import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { client } from '@/sanity/lib/client';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const RESTAURANT_SYSTEM_PROMPT = `You are a helpful customer service representative for Marcopolo Cafe in Koramangala, Bangalore. You represent the cafe with professionalism and warmth.

RESTAURANT INFORMATION:
- Name: Marcopolo Cafe
- Location: Koramangala, Bangalore
- Cuisine: Cafe and Fast Food
- Opening Hours: 9 AM to 11 PM (every day)
- Phone: +91 9876543210

YOUR BEHAVIOR:
1. Answer customer questions clearly and helpfully using the restaurant information provided
2. Be friendly and encouraging
3. Use the dynamic menu data to answer questions
4. If a customer asks about booking a table, ask for their name, phone number, and time. ONCE you have all 3, use the bookTable function to process the booking!
5. If you cannot answer a question, suggest they call the restaurant at +91 9876543210
6. Always be polite and encouraging them to visit the cafe

Remember to be conversational and warm in your responses!`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key is not configured' }, { status: 500 });
    }

    // Fetch live menu from Sanity (with safety check)
    let sanityItems = [];
    let menuContext = "";
    
    if (client) {
      try {
        sanityItems = await client.fetch(`*[_type == "menuItem"]{name, price, "category": category->title}`);
        menuContext = `LIVE MENU INVENTORY:\n${JSON.stringify(sanityItems, null, 2)}`;
      } catch (e) {
        console.error("Sanity Fetch Error:", e);
      }
    } else {
      console.warn("Sanity client not initialized. Skipping live menu fetch.");
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: RESTAURANT_SYSTEM_PROMPT + "\n\n" + menuContext },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        tools: [
          {
            type: "function",
            function: {
              name: "bookTable",
              description: "Books a table at the restaurant by sending an email notification to the owner.",
              parameters: {
                type: "object",
                properties: {
                  customerName: { type: "string", description: "The name of the customer" },
                  phone: { type: "string", description: "Customer's phone number" },
                  time: { type: "string", description: "Time of the booking, e.g. 7:00 PM tonight" }
                },
                required: ["customerName", "phone", "time"]
              }
            }
          }
        ],
        tool_choice: "auto"
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      return NextResponse.json({ error: 'Failed to get response from AI' }, { status: response.status });
    }

    const responseMessage = data.choices[0].message;

    // Check if AI decided to call a function
    if (responseMessage.tool_calls) {
      const toolCall = responseMessage.tool_calls[0];

      if (toolCall.function.name === "bookTable") {
        const args = JSON.parse(toolCall.function.arguments);

        // Send email via Resend
        if (RESEND_API_KEY && resend) {
          try {
            await resend.emails.send({
              from: 'Booking Bot <onboarding@resend.dev>',
              to: 'vbvijay84@gmail.com', // Default testing email
              subject: '🍽️ New Table Reservation!',
              html: `<h2>New Booking from Chatbot!</h2>
                     <p><strong>Name:</strong> ${args.customerName}</p>
                     <p><strong>Phone:</strong> ${args.phone}</p>
                     <p><strong>Time:</strong> ${args.time}</p>`
            });
            return NextResponse.json({ message: `Fantastic, ${args.customerName}! I've sent a reservation request to our team for ${args.time}. They will call you at ${args.phone} to confirm shortly.` }, { status: 200 });
          } catch (e) {
            console.error("Resend Error", e);
            return NextResponse.json({ message: "I'm sorry, I couldn't process the booking right now. Please call us at +91 9876543210." }, { status: 200 });
          }
        } else {
           console.error("Resend API Key or client missing during booking attempt.");
           return NextResponse.json({ message: "I'm sorry, table booking is temporarily unavailable. Please call us directly!" }, { status: 200 });
        }
      }
    }

    return NextResponse.json(
      { message: responseMessage.content },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

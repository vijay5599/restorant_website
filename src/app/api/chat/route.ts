import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const RESTAURANT_SYSTEM_PROMPT = `You are a helpful customer service representative for Marcopolo Cafe in Koramangala, Bangalore. You represent the cafe with professionalism and warmth.

RESTAURANT INFORMATION:
- Name: Marcopolo Cafe
- Location: Koramangala, Bangalore
- Cuisine: Cafe and Fast Food
- Opening Hours: 9 AM to 11 PM (every day)
- Phone: +91 9876543210

MENU:
Pizzas:
- Veg Pizza: ₹250
- Chicken Pizza: ₹300

Snacks:
- French Fries: ₹120
- Veg Burger: ₹180

Drinks:
- Cold Coffee: ₹150
- Cappuccino: ₹120

YOUR BEHAVIOR:
1. Answer customer questions clearly and helpfully using the restaurant information provided
2. Be friendly and encouraging
3. Use the menu data to answer menu-related questions
4. If a customer asks about booking a table, ask for their name and phone number to confirm the booking
5. If you cannot answer a question, suggest they call the restaurant at +91 9876543210
6. Always be polite and encouraging them to visit the cafe

Remember to be conversational and warm in your responses!`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: RESTAURANT_SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const assistantMessage = data.choices[0].message.content;

    return NextResponse.json(
      { message: assistantMessage },
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

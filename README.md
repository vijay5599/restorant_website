# Marcopolo Cafe - Restaurant Website with AI Chatbot

A modern, responsive restaurant website for Marcopolo Cafe in Koramangala, Bangalore, built with Next.js, Tailwind CSS, and integrated with OpenAI's GPT API for an intelligent AI chatbot.

## 🌟 Features

### Website Pages
- **Homepage** - Hero section, menu preview, customer reviews, location, and footer
- **Menu Page** - Full menu with categories (Pizzas, Snacks, Drinks) and prices
- **Contact Page** - Location details, opening hours, phone number, and FAQ

### AI Chatbot
- 💬 Floating chat widget in the bottom-right corner
- 🤖 Powered by OpenAI GPT-3.5 Turbo
- 📝 Responses based on restaurant information
- 🎯 Handles menu inquiries, booking requests, and general questions
- ✨ Beautiful UI with message history and typing indicators

### Design
- 🎨 Modern cafe theme with warm amber colors
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Clean, intuitive user interface
- ⚡ Fast loading and smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI API (GPT-3.5 Turbo)
- **Package Manager**: npm

## 📋 Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # AI chatbot API endpoint
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact & location page
│   │   ├── menu/
│   │   │   └── page.tsx              # Full menu page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Homepage
│   │   └── globals.css
│   └── components/
│       ├── Chatbot.tsx               # Floating chat widget
│       ├── Hero.tsx                  # Hero section
│       ├── MenuSection.tsx           # Menu preview on homepage
│       ├── Navbar.tsx                # Navigation bar
│       └── ReviewsSection.tsx        # Customer reviews section
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── .env.local.example
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- OpenAI API key

### Step 1: Setup Project
```bash
cd /Users/vijay5599/Developer/Scrape/website
npm install
```

### Step 2: Configure OpenAI API
1. Get your API key from [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
3. Add your OpenAI API key to `.env.local`:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### Step 3: Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## 📖 Usage

### Website Navigation
- **Home** - View homepage with hero, menu preview, reviews, and location
- **Full Menu** - Browse complete menu with all items and prices
- **Contact** - Get location details, hours, phone number, and FAQ

### Chatbot Interaction
1. Click the 💬 chat bubble in the bottom-right corner
2. Type your question (e.g., "Do you have veg pizza?")
3. The AI responds with restaurant-specific information
4. For table bookings, the chatbot will ask for name and phone

### Example Queries
- "What time do you open?"
- "Do you have veg pizza?"
- "What drinks are available?"
- "I want to book a table for 4 people"
- "Where are you located?"
- "What's your menu?"

## 🤖 AI Chatbot Details

### System Prompt
The chatbot is configured with comprehensive restaurant information including:
- Restaurant name and location
- Complete menu with prices
- Opening hours (9 AM - 11 PM daily)
- Phone number for direct contact
- Special instructions for booking requests

### Backend
- **API Route**: `/api/chat` (POST)
- **Model**: GPT-3.5 Turbo
- **Max Tokens**: 500 per response
- **Temperature**: 0.7 (balanced creativity)

### Features
- Conversational responses
- Menu-aware suggestions
- Booking request handling
- Fallback to phone number for unresolved queries

## 🎨 Customization

### Restaurant Information
To update restaurant details, edit:
1. API route: `/src/app/api/chat/route.ts` - Update `RESTAURANT_SYSTEM_PROMPT`
2. Components - Update phone, location, hours, menu items
3. Menu data in `MenuSection.tsx` and `/menu/page.tsx`

### Styling
- Colors: Amber/Brown theme in Tailwind classes
- Change color scheme by replacing `amber-` classes
- Modify fonts in `globals.css`
- Responsive breakpoints use Tailwind's `md:` prefix

### Chatbot Appearance
Edit `src/components/Chatbot.tsx`:
- Colors and gradients
- Widget position and size
- Message styling
- Input field appearance

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Environment Variables
On Vercel, add environment variable:
- `OPENAI_API_KEY` = your API key

### Other Platforms
Build command: `npm run build`
Start command: `npm run start`

## 📊 Performance

- ⚡ Fast page loads with Next.js optimization
- 📦 Lightweight components
- 🔄 Efficient API caching
- 📱 Mobile-optimized with responsive design

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 🔐 Security

- API key stored in `.env.local` (never committed)
- No sensitive data in client components
- OpenAI API calls only from backend (`/api/chat`)
- CORS-safe API routing

## 📝 Menu Details

### Pizzas
- **Veg Pizza** - ₹250 - Fresh vegetables with mozzarella cheese
- **Chicken Pizza** - ₹300 - Crispy chicken with special sauce

### Snacks
- **French Fries** - ₹120 - Golden crispy fries with salt
- **Veg Burger** - ₹180 - Fresh vegetable burger with mayo

### Drinks
- **Cold Coffee** - ₹150 - Chilled coffee with ice cream
- **Cappuccino** - ₹120 - Creamy cappuccino with rich foam

## 🎯 Business Features

### For Restaurant Owners
- Demonstrate AI chatbot capabilities to customers
- Show customer interaction and engagement
- Track potential bookings and inquiries
- Reduce phone call volume with 24/7 chatbot availability

### For Customers
- Browse menu anytime
- Ask questions about items and availability
- Book tables directly through chatbot
- Get instant responses

## 📄 License

This project is created for Marcopolo Cafe demonstration purposes.

---

**Built with ❤️ for Marcopolo Cafe**

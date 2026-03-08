# Marcopolo Cafe - Quick Start Guide

## 🚀 Getting Started

Your Marcopolo Cafe restaurant website is ready! Follow these steps to get it running.

### Prerequisites
- Node.js 18+ (check with `node --version`)
- npm (included with Node.js)
- OpenAI API key from https://platform.openai.com/account/api-keys

### 1️⃣ Setup API Key

```bash
# Copy the example environment file
cp .env.local.example .env.local

# Edit .env.local and add your OpenAI API key
# On Mac: nano .env.local
# On Windows: Open .env.local in your editor
```

**Example .env.local:**
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser ✨

## 📋 What's Included

### Pages
- **Homepage** (/) - Hero, menu preview, reviews, location
- **Full Menu** (/menu) - Complete menu with all items
- **Contact** (/contact) - Location, hours, FAQ

### Components
- ☕ **Navbar** - Navigation menu
- 🎯 **Hero Section** - Welcome banner
- 🍕 **Menu Preview** - Homepage menu showcase
- ⭐ **Reviews** - Customer testimonials
- 💬 **Chatbot** - AI-powered customer support

### AI Chatbot Features
- Menu inquiries
- Restaurant hours & location
- Table booking requests
- 24/7 availability
- Powered by OpenAI GPT-3.5 Turbo

## 📝 Customization

### Change Restaurant Details
Edit these files:
- `/src/app/api/chat/route.ts` - Update system prompt with your info
- `/src/components/MenuSection.tsx` - Add/edit menu items
- `/src/app/menu/page.tsx` - Full menu page items
- `/src/app/page.tsx` - Homepage content

### Change Theme Colors
Search and replace in all files:
- `amber-600` → `blue-600` (or your color)
- `amber-700` → `blue-700`
- `amber-900` → `blue-900`
- etc.

### Update Phone Number
Replace `+91 9876543210` with your actual number in:
- `/src/components/Chatbot.tsx`
- `/src/app/contact/page.tsx`
- `/src/app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Free & Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then add your `OPENAI_API_KEY` in Vercel dashboard environment variables.

### Deploy to Other Platforms
```bash
# Build for production
npm run build

# Test production build
npm start
```

Deploy the `.next` and `public` folders.

## 💬 Testing the Chatbot

Once running, try these questions:

1. **Menu Questions**
   - "Do you have veg pizza?"
   - "What drinks do you have?"
   - "What's the price of cappuccino?"

2. **Hours & Location**
   - "What time do you open?"
   - "Where are you located?"
   - "Are you open on Sundays?"

3. **Bookings**
   - "I want to book a table"
   - "Can I reserve for 4 people?"
   - Table for 2 tonight

## 📦 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts      # AI chatbot API
│   │   ├── contact/page.tsx       # Contact page
│   │   ├── menu/page.tsx          # Menu page
│   │   ├── page.tsx               # Homepage
│   │   └── layout.tsx             # Root layout
│   └── components/
│       ├── Chatbot.tsx            # Chat widget
│       ├── Navbar.tsx             # Navigation
│       ├── Hero.tsx               # Hero section
│       ├── MenuSection.tsx        # Menu preview
│       └── ReviewsSection.tsx     # Reviews
├── public/                        # Static files
├── package.json
└── .env.local.example            # Copy to .env.local
```

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Check for errors

# Environment
cp .env.local.example .env.local   # Setup env vars
```

## ❌ Troubleshooting

### "OpenAI API key not configured"
- Copy `.env.local.example` to `.env.local`
- Add your actual OpenAI API key
- Restart dev server

### Chatbot not responding
- Check API key is correct
- Check internet connection
- Try a simpler question first
- Check browser console for errors (F12)

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use different port
```

### Dependencies not installed
```bash
rm -rf node_modules
npm install
npm run dev
```

## 📞 Support

- Check the FAQ on /contact page
- Call +91 9876543210
- Review the full README.md for details

## 🎉 You're All Set!

Your AI-powered restaurant website is ready to impress customers and restaurant owners alike!

**Next Steps:**
1. ✅ Customize restaurant details
2. ✅ Test the chatbot
3. ✅ Deploy to production
4. ✅ Share with restaurant owners

---

**Need help?** Check the README.md for detailed documentation.

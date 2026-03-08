# Testing Checklist - Marcopolo Cafe Website

## ✅ Pre-Launch Verification

### Setup Verification
- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm available (`npm --version`)
- [ ] OpenAI API key obtained
- [ ] `.env.local` file created with API key
- [ ] `npm install` completed successfully
- [ ] No error messages in terminal

### Project Structure
- [ ] All files created (check PROJECT_SUMMARY.md)
- [ ] No red squiggly lines in VS Code
- [ ] TypeScript errors cleared

---

## 🚀 Development Server

### Startup Test
```bash
npm run dev
```
- [ ] No error messages in console
- [ ] Website loads at http://localhost:3000
- [ ] No blank page (should show hero section)

---

## 🏠 Homepage Testing

### Visual Elements
- [ ] ☕ Navbar visible at top
- [ ] Logo "Marcopolo Cafe" clickable
- [ ] Navigation links visible (Home, Full Menu, Contact)
- [ ] Mobile menu icon appears on small screens

### Hero Section
- [ ] Large title visible: "Welcome to Marcopolo Cafe"
- [ ] Location shows: "📍 Koramangala, Bangalore"
- [ ] CTA buttons present: "View Menu" and "Contact Us"
- [ ] "View Menu" button navigates to /menu
- [ ] "Contact Us" button navigates to /contact

### About Section
- [ ] About text visible
- [ ] Cafe icon/image placeholder shown
- [ ] Features list shows: ✓ Premium Quality, ✓ Friendly Staff, ✓ Ambience

### Menu Preview
- [ ] Shows 6 menu items
- [ ] All items have prices in ₹
- [ ] Items grouped by category (Pizzas, Snacks, Drinks)
- [ ] Veg Pizza shows ₹250
- [ ] Chicken Pizza shows ₹300
- [ ] Cold Coffee shows ₹150
- [ ] French Fries shows ₹120

### Reviews Section
- [ ] Shows 3 customer reviews
- [ ] Each review has name, rating (stars), and text
- [ ] Avatars display (👨 👩)
- [ ] All 5-star ratings visible

### Location Section
- [ ] "Find Us" title visible
- [ ] Address shown: "Marcopolo Cafe, Koramangala, Bangalore"
- [ ] Hours: "9 AM to 11 PM"
- [ ] Phone: "+91 9876543210" clickable (tel: link)

### Footer
- [ ] Footer shows website info
- [ ] All links work (Home, Menu, Contact)
- [ ] Copyright notice present
- [ ] Responsive on mobile

---

## 🍕 Menu Page (/menu)

### Layout
- [ ] Hero banner with "Our Full Menu" title
- [ ] Menu organized by category (Pizzas, Snacks, Drinks)
- [ ] Each item shows name, description, and price

### Pizzas Section
- [ ] Veg Pizza - ₹250 - Fresh vegetables with mozzarella cheese
- [ ] Chicken Pizza - ₹300 - Crispy chicken with special sauce

### Snacks Section
- [ ] French Fries - ₹120 - Golden crispy fries with salt
- [ ] Veg Burger - ₹180 - Fresh vegetable burger with mayo

### Drinks Section
- [ ] Cold Coffee - ₹150 - Chilled coffee with ice cream
- [ ] Cappuccino - ₹120 - Creamy cappuccino with rich foam

### Actions
- [ ] "Call Us" button works (opens phone dialer)
- [ ] Phone number clickable: +91 9876543210
- [ ] Footer and navigation working

---

## 📞 Contact Page (/contact)

### Information Display
- [ ] Location section with address
- [ ] Phone section with clickable number
- [ ] Hours section showing open times
- [ ] Chat reminder visible

### Map Section
- [ ] Placeholder map visible
- [ ] Text: "Embedded map with directions coming soon"

### Booking Section
- [ ] "Table Booking" heading visible
- [ ] "Chat to Book Table" button present
- [ ] "Call to Reserve" button present and clickable

### FAQ Section
- [ ] 4 FAQs visible:
  - [ ] "Are you open on weekends?"
  - [ ] "Do you accept table bookings?"
  - [ ] "What payment methods do you accept?"
  - [ ] "Can I host events at your cafe?"
- [ ] Each FAQ has answer text

---

## 💬 Chatbot Testing

### Widget Appearance
- [ ] Floating chat bubble visible (bottom-right corner)
- [ ] Chat bubble shows "💬" emoji
- [ ] Chat bubble has nice shadow
- [ ] Hover effect on chat bubble

### Opening Chat
- [ ] Click chat bubble opens chat window
- [ ] Chat window shows "Marcopolo Cafe" title
- [ ] Subtitle shows: "Always happy to help!"
- [ ] Close button (✕) visible and works
- [ ] Initial bot message: "Hello! 👋 Welcome to..." visible

### Sending Messages

#### Test 1: Menu Question
```
User: "Do you have veg pizza?"
```
- [ ] Message appears in chat
- [ ] Bot responds within 5 seconds
- [ ] Response mentions "Veg Pizza" and "₹250"
- [ ] Response is natural and conversational

#### Test 2: Hours Question
```
User: "What time do you open?"
```
- [ ] Bot responds with: "9 AM to 11 PM"
- [ ] Response is friendly

#### Test 3: Location Question
```
User: "Where are you located?"
```
- [ ] Bot mentions "Koramangala" and "Bangalore"

#### Test 4: Multiple Items Question
```
User: "What drinks do you have?"
```
- [ ] Bot lists drinks: Cold Coffee, Cappuccino
- [ ] Shows prices or offers suggestions

#### Test 5: Booking Request
```
User: "I want to book a table for 4 people tonight"
```
- [ ] Bot recognizes booking request
- [ ] Bot asks for name and phone number
- [ ] Bot is polite and encouraging

#### Test 6: Invalid Question
```
User: "What is 2 + 2?"
```
- [ ] Bot politely redirects to restaurant topics
- [ ] Bot suggests to call restaurant

### Chat Features
- [ ] Message timestamps show correctly
- [ ] Typing indicator appears while waiting for response
- [ ] User messages appear on right (amber background)
- [ ] Bot messages appear on left (white background)
- [ ] Scrolls to show latest message automatically
- [ ] Input field is clearable and reusable
- [ ] Can send multiple messages in sequence

### Error Handling
- [ ] Empty message doesn't send
- [ ] API error shows friendly message
- [ ] Can recover and send new message after error

---

## 📱 Responsive Design Testing

### Mobile (375px)
- [ ] Navigation collapses to burger menu
- [ ] All text readable
- [ ] Chat bubble positioned well
- [ ] Menu items stack vertically
- [ ] Forms are easy to use
- [ ] Images scale properly

### Tablet (768px)
- [ ] Grid layouts adjust properly
- [ ] Navigation visible
- [ ] Two-column layout where needed
- [ ] Content readable

### Desktop (1920px)
- [ ] Full width layouts look good
- [ ] Proper spacing maintained
- [ ] Not too wide/narrow

---

## 🎨 Visual Design Checks

### Colors
- [ ] Amber/brown theme consistent throughout
- [ ] Text color contrasts well with backgrounds
- [ ] Links are visibly different from regular text
- [ ] Hover states clear

### Typography
- [ ] Headings are bold and visible
- [ ] Body text is readable
- [ ] Font sizes scale on mobile
- [ ] No text overlapping

### Spacing & Layout
- [ ] Sections have good breathing room
- [ ] Content not cramped
- [ ] Proper padding around edges
- [ ] Grid layouts aligned properly

---

## ⚡ Performance Tests

### Load Time
- [ ] Homepage loads in < 2 seconds
- [ ] No significant lag when scrolling
- [ ] Images/placeholders load quickly

### Interactions
- [ ] Chat message sends quickly
- [ ] Chat UI responds instantly to input
- [ ] Button clicks immediate
- [ ] Navigation smooth

---

## 🔒 Security Checks

- [ ] OpenAI API key in `.env.local` (not visible)
- [ ] No API key in client-side code
- [ ] `.env.local` in `.gitignore`
- [ ] No hardcoded credentials

---

## 🌐 Browser Compatibility

Test in multiple browsers:
- [ ] Chrome/Chromium (desktop)
- [ ] Safari (Mac/iPhone)
- [ ] Firefox (desktop)
- [ ] Edge (Windows)

All should display correctly without errors.

---

## 🎯 Demo Scenario

### Full User Journey:
1. [ ] User lands on homepage
2. [ ] User sees attractive hero section
3. [ ] User scrolls and sees menu preview
4. [ ] User clicks "View Menu" button
5. [ ] User sees full menu page
6. [ ] User clicks chatbot bubble
7. [ ] User asks: "Do you have veg pizza?"
8. [ ] Bot responds accurately
9. [ ] User asks: "Can I book a table?"
10. [ ] Bot asks for name and phone
11. [ ] User provides info
12. [ ] Bot confirms booking request
13. [ ] User clicks "Contact Us"
14. [ ] User sees contact page with all info
15. [ ] User impressed! ✨

---

## 📋 Deployment Readiness

### Before Deploy
- [ ] All tests pass
- [ ] No console errors (check F12)
- [ ] API key ready for hosting platform
- [ ] Review all customizations are correct

### Build Test
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] `.next` folder created
- [ ] Production build is optimized

---

## 📝 Sign-Off Checklist

- [ ] All homepage elements working
- [ ] All menu pages displaying correctly
- [ ] Contact page complete with info
- [ ] Chatbot responding to various questions
- [ ] Mobile responsive on all breakpoints
- [ ] No errors in browser console
- [ ] Design looks polished and professional
- [ ] Ready to show restaurant owners ✅

---

## 🚀 Ready for Demo!

Once all checkboxes are marked, your Marcopolo Cafe website is ready to impress!

**Estimated demo time: 5-10 minutes**

**Key Points to Highlight:**
1. Fast, modern website
2. Mobile-responsive design
3. Beautiful UI with cafe theme
4. AI chatbot handles customer inquiries
5. Reduces phone workload
6. Professional first impression
7. Easy to customize with restaurant info

---

## 📞 Support

If issues found:
1. Check QUICK_START.md for setup issues
2. Review README.md for detailed docs
3. Check browser console (F12) for errors
4. Verify .env.local has correct API key

**Happy Testing! 🎉**

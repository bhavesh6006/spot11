# MASTER DEVELOPMENT PROMPT
# Premium Restaurant & Bar Website — Spot 11 Enjoy

You are a senior frontend architect, UI/UX designer and React developer.

Build a **production-ready, premium, modern, animated restaurant and bar website** for:

## Restaurant

**Name:** Spot 11 Enjoy

**Type:** Family Restaurant, Bar & Dining

**Location:** Gini Belvista, D.N. Parande Park, Dhanori, Pune, Maharashtra 411015, India

**Phone:** +91 95450 93666

**Google Maps:**
https://www.google.com/maps/place/Spot+11+Enjoy/

The website must look like a **high-end restaurant website designed by a professional agency**, not an ordinary AI-generated template.

---

# 1. PRIMARY OBJECTIVE

Create a website that allows customers to:

- Discover the restaurant
- Understand the ambience and food experience
- Browse the complete menu
- See menu prices
- Reserve a table
- Order online through Swiggy
- Order online through Zomato
- View Google customer reviews
- View restaurant photos
- View event videos
- View upcoming events
- View current offers
- Contact the restaurant
- Call the restaurant
- Open Google Maps directions
- Contact the restaurant through WhatsApp

The website should be visually impressive while remaining fast, accessible and easy to maintain.

---

# 2. IMPORTANT — STATIC WEBSITE

This is initially a **STATIC FRONTEND WEBSITE**.

Use:

- React
- Vite
- TypeScript
- Material UI
- Framer Motion
- React Router
- Lucide React

Do NOT build a backend at this stage.

However, architect the project so that APIs/backend/CMS can easily be connected later.

Content must be separated from UI.

---

# 3. IMPORTANT CONTENT RULE

NEVER fabricate restaurant information.

Do NOT invent:

- Menu items
- Menu prices
- Google reviews
- Offers
- Events
- Awards
- Restaurant achievements
- Opening hours
- Social media accounts
- Customer testimonials
- Restaurant photographs

If actual information is unavailable, use clearly identifiable placeholders.

For example:

"Content to be added"

instead of inventing information.

---

# 4. SOURCE INFORMATION

The supplied Google Maps page is the primary reference:

https://www.google.com/maps/place/Spot+11+Enjoy/

Additional restaurant information may be provided separately.

Organize verified information into the application's data files.

Do not scrape Google Maps directly from browser JavaScript.

---

# 5. WEBSITE STRUCTURE

Create the following pages:

/                   → Home

/menu               → Menu

/offers             → Offers

/events             → Events

/gallery            → Gallery

/reviews             → Reviews

/about              → About

/contact            → Contact

/reservation        → Reservation

Use React Router.

The homepage should contain previews of all important sections and link to the dedicated pages.

---

# 6. PREMIUM DESIGN SYSTEM

Create a custom design system.

The visual direction should be:

- Luxury
- Premium
- Elegant
- Modern
- Cinematic
- Restaurant-focused
- Nightlife-inspired
- Family-friendly

Avoid:

- Generic Bootstrap-looking layouts
- Generic AI templates
- Excessive gradients
- Excessive glassmorphism
- Cartoon-like design
- Too many animations
- Huge unnecessary whitespace

Use a sophisticated dark theme with warm/gold accents.

Use high-quality typography.

Recommended typography hierarchy:

Display font:
Elegant serif or premium display font

Body:
Modern sans-serif

Use typography combinations that feel like premium hospitality branding.

---

# 7. GLOBAL HEADER

Create a sticky premium header.

Desktop:

Logo
Home
About
Menu
Offers
Events
Gallery
Reviews
Contact

Right side:

Reserve Table
Order Online

The header should:

- Start transparent over hero
- Become solid/dark after scrolling
- Animate smoothly
- Have subtle shadow
- Remain responsive

Mobile:

Animated hamburger menu.

Mobile menu should contain all navigation and CTA buttons.

---

# 8. HOME PAGE

Create a visually spectacular homepage.

Sections:

1. Hero
2. Quick Actions
3. About
4. Signature Experience
5. Menu Preview
6. Offers
7. Upcoming Events
8. Gallery Preview
9. Google Reviews
10. Reservation CTA
11. Location
12. Opening Hours
13. Contact CTA
14. Footer

---

# 9. HERO SECTION

Full-screen cinematic hero.

Use restaurant/food/ambience image or video.

Hero content:

SPOT 11 ENJOY

Family Restaurant • Bar • Food • Celebration

Primary heading:

"Good Food. Great Vibes. Unforgettable Moments."

Buttons:

Reserve a Table
Order Online
View Menu

Add:

- Animated entrance
- Image zoom
- Subtle parallax
- Scroll indicator

Use a dark overlay to guarantee text readability.

Hero must look excellent on mobile.

---

# 10. QUICK ACTIONS

Create a mobile-friendly action bar:

Call Now
Get Directions
Reserve Table
Order Online
View Menu

Use premium icons.

On mobile, make this easy to access.

---

# 11. ABOUT SECTION

Heading:

"A Place to Eat, Drink & Enjoy"

Create an elegant split layout.

Left:

Large restaurant image.

Right:

Description.

Include only verified restaurant information.

Add statistics only if supported by actual data.

Example structure:

4.5★
Google Rating

400+
Reviews

Use animation for counters.

Do not invent statistics.

---

# 12. MENU

Create a dedicated /menu page.

Menu should support:

- Categories
- Search
- Filters
- Veg/Non-Veg
- Bestseller
- Spicy indicator
- Item images
- Item description
- Price

Possible categories can include only categories actually present in the restaurant menu.

Create a beautiful menu card.

Example:

IMAGE

Butter Chicken

Description

₹XXX

Do not invent actual price.

---

# 13. MENU UX

Desktop:

Category navigation on left or top.

Menu cards in responsive grid.

Mobile:

Horizontally scrollable category tabs.

Add search:

Search menu...

Filters:

All
Veg
Non-Veg
Bestsellers

Add subtle animations.

---

# 14. MENU DATA

Create:

src/data/menu.ts

Example:

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  category: string;
  image?: string;
  isVeg?: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
}

Store all menu data here.

UI components must consume this data.

Never hard-code menu items inside components.

---

# 15. ONLINE ORDERING

Create an Order Online experience.

Buttons:

Order on Swiggy

Order on Zomato

Store URLs in:

src/data/restaurant.ts

Example:

swiggyUrl: ""

zomatoUrl: ""

If URL is empty:

Disable the button or show "Link coming soon".

Never create fake URLs.

Open external ordering pages in a new tab.

---

# 16. TABLE RESERVATION

Create:

/reservation

Premium reservation form:

Name
Mobile
Email
Date
Time
Guests
Occasion
Special Request

Occasion:

Birthday
Anniversary
Family Gathering
Corporate
Party
Dinner
Other

Since there is no backend:

Provide configurable reservation methods:

- WhatsApp
- Phone
- External reservation URL

On submit, generate a WhatsApp booking message.

Example:

Hello Spot 11 Enjoy,

I would like to reserve a table.

Name:
Date:
Time:
Guests:
Occasion:
Special Request:

The WhatsApp number must come from configuration.

Do NOT pretend that the reservation is saved to a database.

---

# 17. OFFERS

Create /offers.

Premium offer cards.

Each offer supports:

- Image
- Title
- Description
- Discount
- Start date
- End date
- Terms
- CTA

Possible categories:

Weekend
Happy Hours
Family
Birthday
Festival
Special Combo

Do NOT invent real offers.

Use placeholder records that are clearly marked.

If there is an expiry date:

Display countdown.

---

# 18. EVENTS

Create /events.

Event cards:

- Image
- Event name
- Date
- Time
- Description
- Event type
- CTA

Possible event types:

Live Music
DJ Night
Festival
Cricket Screening
Birthday
Corporate Event
Special Dinner

Do not create fake actual events.

Use placeholder data until actual event information is supplied.

---

# 19. GALLERY

Create /gallery.

Tabs:

All
Food
Ambience
Events
Videos

Support:

- Images
- Videos

Use masonry/grid layout.

Clicking an image:

Open fullscreen lightbox.

Features:

- Next
- Previous
- Close
- Image counter

Videos:

Show play button.

Open video in fullscreen/lightbox.

Gallery content must be configurable through:

src/data/gallery.ts

---

# 20. GOOGLE REVIEWS

Create /reviews.

Display:

Google rating

Review count

Customer reviews

Each review:

- Customer name
- Rating
- Review
- Date
- Google icon
- Link to Google

Add carousel.

CTA:

"Read All Reviews on Google"

IMPORTANT:

Do NOT scrape Google Maps directly from frontend.

Initially use manually curated verified reviews.

Architect the data layer so that a future backend can use:

Google Business Profile API

or another approved Google API integration.

Create:

src/data/reviews.ts

Never fabricate reviews.

---

# 21. LOCATION

Create /contact location section.

Display:

Spot 11 Enjoy

Gini Belvista, D.N. Parande Park,
Dhanori, Pune, Maharashtra 411015

Buttons:

Get Directions

Call Restaurant

Embed Google Maps using a configurable URL.

Do not expose Google API keys.

---

# 22. OPENING HOURS

Create reusable OpeningHours component.

Store data in:

restaurant.ts

Automatically calculate:

Open Now

Closed Now

Use visitor local time.

Highlight today's opening hours.

---

# 23. SOCIAL MEDIA

Support:

Instagram
Facebook
YouTube

Configuration:

instagramUrl
facebookUrl
youtubeUrl

If URL is empty:

Hide the icon.

Never invent social accounts.

---

# 24. FLOATING ACTION BUTTONS

On mobile and desktop, provide floating quick actions:

Call
WhatsApp
Reserve
Order

Make them elegant and unobtrusive.

Do not cover content.

---

# 25. FOOTER

Premium footer.

Include:

Spot 11 Enjoy

Family Restaurant & Bar

Quick navigation

Menu
Offers
Events
Gallery
Reviews
Contact

Actions:

Reserve Table
Order Online
Call
Directions

Opening hours

Social icons

Copyright.

---

# 26. ANIMATION SYSTEM

Use Framer Motion.

Create reusable animation variants.

Animations:

- fade-up
- fade-in
- slide-up
- stagger
- image reveal
- scale
- hover
- card lift
- number counter
- menu category transitions
- gallery transitions
- modal animation
- mobile navigation animation

Animations must be subtle and premium.

Respect:

prefers-reduced-motion.

Disable/reduce animations for users who prefer reduced motion.

---

# 27. PERFORMANCE

Target Lighthouse:

Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+

Implement:

- Lazy loading
- Responsive images
- WebP/AVIF
- Image dimensions
- Code splitting
- React lazy loading for pages
- Minimal dependencies
- Optimized animations

Never load unnecessarily large images.

---

# 28. SEO

Each page must have its own:

- Title
- Meta description
- Canonical URL
- Open Graph metadata

Examples:

Home:

Spot 11 Enjoy | Family Restaurant & Bar in Dhanori, Pune

Menu:

Spot 11 Enjoy Menu | Restaurant & Bar in Dhanori, Pune

Events:

Events at Spot 11 Enjoy | Dhanori Pune

Offers:

Offers & Deals | Spot 11 Enjoy Pune

Reviews:

Spot 11 Enjoy Reviews | Dhanori Pune

Contact:

Contact Spot 11 Enjoy | Dhanori Pune

Add structured data:

Restaurant
LocalBusiness
Address
Phone
OpeningHours
Menu URL

Only use verified information.

---

# 29. ACCESSIBILITY

Implement:

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA labels
- Accessible modals
- Accessible forms
- Proper color contrast
- Alt text
- Screen-reader-friendly buttons
- Reduced motion

---

# 30. RESPONSIVE DESIGN

Test:

360px
390px
430px
768px
1024px
1280px
1440px
1920px

Requirements:

- No horizontal scrolling
- No overlapping
- No clipped content
- No broken buttons
- No unreadable text
- No layout jumps

Mobile experience is extremely important.

---

# 31. DATA ARCHITECTURE

Create:

src/data/restaurant.ts

src/data/menu.ts

src/data/reviews.ts

src/data/offers.ts

src/data/events.ts

src/data/gallery.ts

All content must come from these files.

---

# 32. RESTAURANT CONFIGURATION

Create:

restaurant.ts

with:

restaurantConfig = {
  name,
  tagline,
  description,
  phone,
  whatsapp,
  email,
  address,
  googleMapsUrl,
  googlePlaceId,
  swiggyUrl,
  zomatoUrl,
  instagramUrl,
  facebookUrl,
  youtubeUrl,
  rating,
  reviewCount,
  openingHours
}

Do not place these values directly inside React components.

---

# 33. FILE STRUCTURE

Use this structure:

src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      MobileMenu.tsx

    common/
      SectionTitle.tsx
      AnimatedSection.tsx
      Button.tsx
      ImageWithFallback.tsx
      Loading.tsx
      EmptyState.tsx

    home/
      Hero.tsx
      QuickActions.tsx
      AboutPreview.tsx
      MenuPreview.tsx
      OffersPreview.tsx
      EventsPreview.tsx
      GalleryPreview.tsx
      ReviewsPreview.tsx
      ReservationCTA.tsx

    menu/
      MenuCard.tsx
      MenuCategoryTabs.tsx
      MenuFilters.tsx
      MenuSearch.tsx

    gallery/
      GalleryGrid.tsx
      GalleryLightbox.tsx
      VideoCard.tsx

    reviews/
      ReviewCard.tsx
      ReviewCarousel.tsx

    reservation/
      ReservationForm.tsx

    contact/
      LocationSection.tsx
      OpeningHours.tsx

  pages/
    Home.tsx
    About.tsx
    Menu.tsx
    Offers.tsx
    Events.tsx
    Gallery.tsx
    Reviews.tsx
    Contact.tsx
    Reservation.tsx
    NotFound.tsx

  data/
    restaurant.ts
    menu.ts
    reviews.ts
    offers.ts
    events.ts
    gallery.ts

  theme/
    theme.ts

  hooks/
    useScrollPosition.ts
    useOpeningHours.ts
    useReducedMotion.ts

  utils/
    whatsapp.ts
    formatCurrency.ts
    dateUtils.ts

  App.tsx
  main.tsx

public/
  images/
    hero/
    menu/
    gallery/
    events/
    offers/
  videos/
  icons/

---

# 34. REUSABILITY

Do not duplicate code.

Create reusable:

- Buttons
- Cards
- Section titles
- Animations
- Modals
- Image components
- CTA components
- Empty states

Use TypeScript interfaces/types.

Avoid `any`.

---

# 35. ERROR HANDLING

Handle:

- Broken images
- Missing menu prices
- Missing events
- Missing offers
- Missing reviews
- Missing social links
- Missing ordering URLs
- Missing gallery content

Example:

"No upcoming events at the moment."

"New offers coming soon."

"Gallery photos coming soon."

---

# 36. IMAGE HANDLING

If actual Spot 11 Enjoy images are not available:

DO NOT present random restaurant images as actual Spot 11 Enjoy photographs.

Use clearly marked placeholder images.

Create an easy image replacement structure:

public/images/hero/
public/images/menu/
public/images/gallery/
public/images/events/
public/images/offers/

Use lazy loading.

---

# 37. GOOGLE INTEGRATION ARCHITECTURE

Prepare fields for:

googleMapsUrl
googlePlaceId
googleBusinessProfileId

Do not directly scrape Google Maps.

For reviews, create an adapter/service architecture:

src/services/reviews/

Initially:

StaticReviewsProvider

Later:

GoogleReviewsProvider

The frontend should not need to change when switching providers.

---

# 38. ORDERING ARCHITECTURE

Create:

src/services/ordering/

with provider abstraction.

Providers:

Swiggy
Zomato

Initially these simply redirect to external URLs.

Later this can support API integrations if available.

---

# 39. RESERVATION ARCHITECTURE

Create:

src/services/reservation/

Possible providers:

WhatsAppReservation
PhoneReservation
ExternalReservation

Initially use WhatsApp.

---

# 40. PWA

Make the application PWA-ready.

Add:

manifest.json
favicon
app icons

Do not show intrusive install prompts.

---

# 41. SECURITY

Never expose:

- API keys
- Private tokens
- Secrets
- Backend credentials

Do not create fake environment variables that contain secrets.

Use `.env.example` only for public/configurable values.

---

# 42. CODE QUALITY

Use:

- TypeScript strict mode
- ESLint
- Prettier
- Clean imports
- Meaningful variable names
- Reusable components
- No dead code
- No console errors
- No unnecessary packages

---

# 43. README

Create a comprehensive README.md containing:

1. Project overview
2. Technology stack
3. Installation
4. Development
5. Production build
6. Deployment
7. How to update restaurant information
8. How to update menu
9. How to add offers
10. How to add events
11. How to add photos
12. How to add videos
13. How to configure Swiggy
14. How to configure Zomato
15. How to configure WhatsApp
16. How to configure Google Maps
17. How to configure social media

---

# 44. DEPLOYMENT

The website should be deployable to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Configure the project appropriately.

---

# 45. IMPORTANT COPILOT WORKFLOW

DO NOT try to generate the entire application blindly in one step.

Work in phases.

## PHASE 1 — Project Setup

Create:

- Vite
- React
- TypeScript
- MUI
- Framer Motion
- React Router
- ESLint
- Prettier

Make sure the application runs successfully.

---

## PHASE 2 — Design System

Create:

- Theme
- Typography
- Colors
- Spacing
- Buttons
- Cards
- Global styles
- Responsive breakpoints

Build the premium visual identity first.

---

## PHASE 3 — Layout

Create:

- Navbar
- Mobile menu
- Footer
- Floating actions
- Routing

Test desktop and mobile.

---

## PHASE 4 — Homepage

Implement:

Hero
Quick Actions
About
Menu Preview
Offers
Events
Gallery
Reviews
Reservation CTA
Location
Footer

Do not proceed until the homepage is responsive and visually polished.

---

## PHASE 5 — Dedicated Pages

Implement:

/about
/menu
/offers
/events
/gallery
/reviews
/contact
/reservation

---

## PHASE 6 — Data Layer

Create all data files and connect components.

---

## PHASE 7 — Integrations

Implement:

WhatsApp
Swiggy
Zomato
Google Maps
Google Reviews architecture
Social media

---

## PHASE 8 — SEO & Performance

Implement:

- Metadata
- Schema
- Sitemap
- Robots
- Image optimization
- Lazy loading
- Code splitting

---

## PHASE 9 — QA

Check:

- Desktop
- Mobile
- Tablet
- Navigation
- Forms
- Gallery
- Menu search
- Menu filtering
- Animations
- External links
- WhatsApp
- Maps
- Accessibility
- SEO
- Lighthouse
- Console errors

---

# 46. COPILOT BEHAVIOR

When implementing this project:

1. First inspect the existing repository.
2. Do not unnecessarily delete working files.
3. Reuse existing code when appropriate.
4. Follow the architecture above.
5. Before adding a dependency, check whether an existing dependency can solve the requirement.
6. Keep components small and reusable.
7. Do not hard-code restaurant content in components.
8. Do not invent restaurant information.
9. Do not fabricate reviews.
10. Do not fabricate offers/events.
11. Do not create fake Swiggy/Zomato URLs.
12. Do not scrape Google Maps from the browser.
13. Do not expose secrets.
14. Keep the website static.
15. Keep the architecture ready for a future backend/CMS.
16. Maintain excellent mobile responsiveness.
17. Prioritize visual quality.
18. Do not use excessive animations.
19. Ensure every button has a meaningful action.
20. Do not leave broken or fake functionality.

---

# 47. FINAL QUALITY BAR

The final website should feel comparable to the online presence of a:

- Premium Pune restaurant
- Lounge
- Bar
- Fine-dining restaurant
- Modern hospitality brand

It should NOT look like:

- A basic React demo
- A Bootstrap template
- A generic restaurant template
- An AI-generated landing page

The final experience should be:

**Premium + Cinematic + Fast + Responsive + Elegant + Easy to use**

A customer visiting the website should immediately understand:

"Where is this restaurant?"
"What food do they serve?"
"How much does it cost?"
"Can I reserve a table?"
"Can I order online?"
"What are people saying?"
"What events/offers are happening?"
"How do I get there?"

All of these actions should be obvious within a few seconds.

---

# START

First inspect the repository.

Then create a short implementation plan.

Then implement **Phase 1 only**.

After Phase 1 is working, proceed to Phase 2.

Do not skip phases.

After every major phase, verify that the application builds successfully before continuing.
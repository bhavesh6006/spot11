# Spot 11 Enjoy

Premium static restaurant and bar website for Spot 11 Enjoy in Dhanori, Pune.

## Stack

- React, TypeScript and Vite
- Material UI theme provider
- React Router
- Framer Motion
- Lucide React

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The app is a static frontend and can deploy to Vercel, Netlify, GitHub Pages or Cloudflare Pages. Configure the SPA fallback to serve `index.html` for client-side routes.

### GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. In GitHub, open `Settings > Pages`, choose `GitHub Actions` as the source, and make sure Actions are enabled for the repository. Pushes to `main` then deploy to `https://bhavesh6006.github.io/spot11/`. The Vite base path is already configured for this project URL.

## Content updates

All restaurant content is separated from the UI in `src/data/`:

- `restaurant.ts`: verified address, phone, links, opening hours and future Google identifiers.
- `menu.ts`: menu items, prices, categories, dietary flags and image paths.
- `offers.ts`: offers, dates, terms and CTAs.
- `events.ts`: events, times, types and descriptions.
- `gallery.ts`: verified image and video metadata.
- `reviews.ts`: manually curated verified Google reviews.

Pending records intentionally display clear “to be added” states. Do not add unverified menu, offer, event, review, award, social, opening-hour or photo information.

## Integrations

- Add verified Swiggy and Zomato URLs in `restaurant.ts`. Empty URLs remain unavailable rather than becoming fake links.
- WhatsApp reservations use the configured `whatsapp` number and open a prefilled message. The restaurant must confirm availability directly.
- Google Maps directions use `googleMapsUrl`; no API key is required by the current static experience.
- `src/services/reviews/` contains the provider boundary. Replace `StaticReviewsProvider` with a server-backed Google Business Profile adapter later without changing page components.
- `src/services/ordering/` contains the ordering provider boundary for future API integrations.
- Social links are only rendered after verified URLs are added to `restaurant.ts`.

## Media

Replace labeled placeholders with verified media under `public/images/hero/`, `public/images/menu/`, `public/images/gallery/`, `public/images/events/`, `public/images/offers/` and `public/videos/`. The first gallery image is sourced from the public Spot 11 Enjoy Zomato listing and should be retained only while its usage rights are confirmed. Use compressed WebP or AVIF assets and meaningful alt text.

## SEO and accessibility

Page titles and descriptions are set per route. Add the canonical domain, Open Graph image, Restaurant JSON-LD, sitemap URLs and production robots directives when the production domain is known. The app includes semantic navigation, labeled forms, reduced-motion support and responsive layouts.

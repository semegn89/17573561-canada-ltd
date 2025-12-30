# 17573561 Canada Ltd - Website

Professional freight and logistics website for Europe to Canada shipping services.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Google Analytics 4 (optional)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional: Your Google Analytics ID
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── europe-to-canada/  # Trade lane page
│   ├── services/          # Services pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── request-a-quote/   # Quote form
│   ├── privacy-policy/    # Privacy policy
│   ├── cookie-policy/     # Cookie policy
│   ├── terms/             # Terms & conditions
│   ├── api/               # API routes
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx         # Site header/navigation
│   ├── Footer.tsx         # Site footer
│   ├── CookieBanner.tsx   # Cookie consent banner
│   └── GoogleAnalytics.tsx # GA4 integration
└── public/                # Static assets (images, etc.)
```

## Configuration

### Email Integration

The contact and quote forms currently log submissions to the console. To enable email sending:

1. Choose an email service (SendGrid, Mailgun, Resend, etc.)
2. Update the API routes in `app/api/contact/route.ts` and `app/api/quote/route.ts`
3. Add your API keys to `.env.local`

Example with Resend:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'noreply@17573561canada.ca',
  to: 'info@17573561canada.ca',
  subject: `Contact Form: ${body.subject}`,
  html: `<p>Name: ${body.name}<br>Email: ${body.email}<br>Message: ${body.message}</p>`
})
```

### Google Analytics

1. Create a GA4 property
2. Add your Measurement ID to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. The component is already integrated in the layout

### Domain Configuration

Update the following files with your actual domain:
- `app/sitemap.ts` - Update `baseUrl`
- `app/robots.ts` - Update sitemap URL
- `app/layout.tsx` - Update Open Graph URLs if needed

### Contact Information

Update contact details in:
- `app/contact/page.tsx` - Email, phone, address
- `components/Footer.tsx` - Footer contact info

## Customization

### Brand Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is currently set to blue.

### Images

Place images in the `public/` directory and reference them in components. Recommended images:
- `hero_home.webp` - Homepage hero
- `hero_lane.webp` - Europe→Canada page hero
- `service_ocean.webp` - Ocean freight service
- `service_air.webp` - Air freight service
- `service_road.webp` - Road freight service
- `about_team.webp` - About page image

### Content

All content is in the page components. Edit directly or consider migrating to a CMS if needed.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## SEO Checklist

- [x] Meta tags on all pages
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Open Graph tags
- [ ] Add actual images (replace placeholders)
- [ ] Add favicon
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (JSON-LD) if needed

## Security

- Forms include basic validation
- Consider adding rate limiting for production
- Use HTTPS in production
- Keep dependencies updated

## Support

For questions or issues, contact the development team.

---

**17573561 Canada Ltd** - Incorporated under CBCA (Canada Business Corporations Act)


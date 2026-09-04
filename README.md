# Tree Boss App

Professional tree service website for **Tree Boss** (Fair Tree Services LLC), a woman-owned tree service serving Bucks County, Montgomery County, and surrounding Pennsylvania communities.

## Features
- Hero with free estimate CTA
- Services overview (removal, trimming, stump grinding, land clearing, emergency, commercial)
- About / why choose us (WOSB, ISA, TCIA, BBB, 5.0 rated)
- Contact + free estimate form that emails submissions to Shane Wing
- Mobile-responsive, black + safety-orange brand

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Estimate form

Submissions POST to `/api/estimate`, which sends an email to **shanewing@gmail.com** (Shane Wing) via Resend.

1. Create a free account at https://resend.com and get an API key.
2. In Vercel (or locally), set the env var:
   - `RESEND_API_KEY=re_xxxxxxxx`
3. For the `from` address to work, verify your domain in Resend, or change the `from` in `src/pages/api/estimate.js` to Resend's onboarding address.

## Deploy

Push to GitHub and connect to Vercel. Add the `RESEND_API_KEY` env var in the Vercel project settings.

## Brand contacts
- Phone: (267) 810-0031
- Email: info@treeboss.com
- Address: 54 E Oakland Ave, Doylestown, PA 18901
- Web: https://treeboss.com/

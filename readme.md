# Wakeparkit

Finnish Cable Wake Parks on the map.

Static site, deployed on Vercel.

## Local run

Open `index.html` in a browser, or use any static server, e.g.

    npx serve .

## Deployment

Import this repository at https://vercel.com/new (no build settings needed, it's a plain static site).

Then add `wakeparkit.fi` and `www.wakeparkit.fi` as project domains and point DNS to Vercel per its instructions.

Or with the Vercel CLI:

    npx vercel --prod

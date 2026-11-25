// Proxies Google Maps Static API requests so the API key stays server-side.
// Set GOOGLE_MAPS_API_KEY in Vercel Project Settings > Environment Variables.
export default async function handler(req, res) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) {
    res.status(500).send("GOOGLE_MAPS_API_KEY is not configured");
    return;
  }
  const incoming = new URL(req.url, "https://example.com").searchParams;
  const upstream = new URL("https://maps.googleapis.com/maps/api/staticmap");
  for (const [k, v] of incoming) upstream.searchParams.append(k, v);
  upstream.searchParams.set("key", key);

  const r = await fetch(upstream);
  res.setHeader("Content-Type", r.headers.get("content-type") || "image/png");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.status(r.status).send(Buffer.from(await r.arrayBuffer()));
}

// Proxies OpenWeather forecast requests so the API key stays server-side.
// Set OPENWEATHER_API_KEY in Vercel Project Settings > Environment Variables.
export default async function handler(req, res) {
  const key = process.env.OPENWEATHER_API_KEY;
  if (!key) {
    res.status(500).json({ error: "OPENWEATHER_API_KEY is not configured" });
    return;
  }
  const incoming = new URL(req.url, "https://example.com").searchParams;
  const upstream = new URL("https://api.openweathermap.org/data/2.5/forecast");
  for (const [k, v] of incoming) upstream.searchParams.append(k, v);
  upstream.searchParams.set("appid", key);

  const r = await fetch(upstream);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "public, max-age=600");
  res.status(r.status).send(await r.text());
}

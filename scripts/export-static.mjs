import { rm, writeFile } from "node:fs/promises";
import worker from "../dist/server/index.js";

const response = await worker.fetch(
  new Request("https://dannyok.com/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

const html = await response.text();
if (!html.includes("Danny O&#x27;Kelley") || !html.includes("danny@dannyok.com")) {
  throw new Error("Static export did not contain the expected personal-site content");
}

await writeFile(new URL("../dist/client/index.html", import.meta.url), html);

// Pages only needs the static client output. Removing Vinext's Worker bundle also
// prevents Cloudflare Pages from auto-detecting its server-only Wrangler config.
await rm(new URL("../dist/server", import.meta.url), {
  recursive: true,
  force: true,
});
await rm(new URL("../.wrangler/deploy", import.meta.url), {
  recursive: true,
  force: true,
});

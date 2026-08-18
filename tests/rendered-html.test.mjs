import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Danny's personal landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Danny O&#x27;Kelley — Technical Marketer &amp; Builder<\/title>/i);
  assert.match(html, /Marketing brain\./i);
  assert.match(html, /danny@dannyok\.com/i);
  assert.match(html, /linkedin\.com\/in\/dkokelley/i);
  assert.match(html, /github\.com\/dkokelley/i);
  assert.match(html, /og\.png/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/i);
});

test("provides accessible landmarks and stable sections", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /<nav[^>]*aria-label="Main navigation"/i);
  for (const id of ["about", "trail", "notes", "contact"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`, "i"));
  }
  assert.match(html, /application\/ld\+json/i);
});

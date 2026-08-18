import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function renderedHtml() {
  return readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
}

test("exports Danny's personal landing page", async () => {
  const html = await renderedHtml();
  assert.match(html, /<title>Danny O&#x27;Kelley — Technical Marketer &amp; Builder<\/title>/i);
  assert.match(html, /Marketing brain\./i);
  assert.match(html, /danny@dannyok\.com/i);
  assert.match(html, /linkedin\.com\/in\/dkokelley/i);
  assert.match(html, /github\.com\/dkokelley/i);
  assert.match(html, /og\.png/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/i);
});

test("provides accessible landmarks and stable sections", async () => {
  const html = await renderedHtml();
  assert.match(html, /<nav[^>]*aria-label="Main navigation"/i);
  for (const id of ["about", "trail", "notes", "contact"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`, "i"));
  }
  assert.match(html, /application\/ld\+json/i);
});

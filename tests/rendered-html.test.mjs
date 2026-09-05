import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete product portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Manvinder Arora \| Vibe-Coded Product Portfolio<\/title>/i);
  assert.match(html, /I build tools for problems I actually have\./);
  assert.match(html, /Punky Trading Agent/);
  assert.match(html, /Telegram Brain/);
  assert.match(html, /Writing Desk/);
  assert.match(html, /Move fast\. Keep it useful\. Delete the slop\./);
});

test("links to the current products and contains no stale portfolio material", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /punkypunk936-coder\.github\.io\/crypto-trading-agent/);
  assert.match(html, /punkypunk936-coder\/telegram-brain/);
  assert.match(html, /punkypunk936-coder\/x-to-substack-pipeline/);
  assert.match(html, /punkypunk936-coder\/manvinder-product-portfolio/);
  assert.match(html, /x\.com\/0xgoodie/);
  assert.match(html, /t\.me\/manvinder0/);
  assert.match(html, /Public GitHub repo/);
  assert.doesNotMatch(html, /Meme Scout/i);
  assert.doesNotMatch(html, /Resume|CV|Career timeline/i);
});

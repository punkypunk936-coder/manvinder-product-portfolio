/* eslint-disable @next/next/no-img-element -- vinext's local image optimizer cannot serve fixed portfolio captures. */

const products = [
  {
    number: "01",
    name: "Punky Trading Agent",
    status: "Public build",
    href: "#punky",
    line: "Market noise into a clear trade decision.",
  },
  {
    number: "02",
    name: "Telegram Brain",
    status: "Local-first",
    href: "#telegram-brain",
    line: "A searchable memory for everything saved in Telegram.",
  },
  {
    number: "03",
    name: "Writing Desk",
    status: "Working system",
    href: "#writing-desk",
    line: "X articles into faithful, publish-ready Substack posts.",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (name: string) => `${basePath}/${name}`;

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Product portfolio home">
          <span>MA</span>
          <strong>Product work</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Products</a>
          <a href="#vibe-coding">Vibe coding</a>
        </nav>
        <a className="header-link" href="https://x.com/0xgoodie" target="_blank" rel="noreferrer">
          X / @0xgoodie <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src={asset("punky-current.png")} alt="" width="1440" height="900" />
          <img src={asset("telegram-brain-current.png")} alt="" width="2722" height="914" />
          <img src={asset("writing-desk-current.png")} alt="" width="1440" height="900" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">Manvinder Arora / Vibe-coded products</p>
          <h1 id="hero-title">I build tools for problems I actually have.</h1>
          <p className="hero-copy">
            I move quickly, use agents heavily and keep projects local until the full loop works.
            These are the three products that made it past that bar.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">See the products</a>
            <a className="button button-ghost" href="https://t.me/manvinder0" target="_blank" rel="noreferrer">
              Talk on Telegram <Arrow />
            </a>
          </div>
          <div className="hero-proof" aria-label="Portfolio summary">
            <span>3 core products</span>
            <span>Local until ready</span>
            <span>Public repositories</span>
          </div>
        </div>
      </section>

      <section id="work" className="product-index" aria-labelledby="work-title">
        <div className="section-shell">
          <div className="section-intro compact">
            <p className="kicker">Selected products</p>
            <h2 id="work-title">Only the work that is alive.</h2>
          </div>
          <div className="index-list">
            {products.map((product) => (
              <a key={product.name} href={product.href} className="index-row">
                <span className="index-number">{product.number}</span>
                <span className="index-name">{product.name}</span>
                <span className="index-line">{product.line}</span>
                <span className="index-status">{product.status}</span>
                <span className="index-arrow" aria-hidden="true">↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="punky" className="product product-cool" aria-labelledby="punky-title">
        <div className="section-shell">
          <div className="product-heading">
            <div>
              <p className="product-label">01 / AI market intelligence / Public</p>
              <h2 id="punky-title">Punky Trading Agent</h2>
            </div>
            <p className="product-dek">
              A research and paper-trading agent that turns live stock and crypto data into a
              plain decision: buy, sell or wait, with the levels and reasoning attached.
            </p>
          </div>

          <div className="product-actions">
            <a className="button button-accent" href="https://punkypunk936-coder.github.io/crypto-trading-agent/" target="_blank" rel="noreferrer">
              Open live product <Arrow />
            </a>
            <a className="text-link" href="https://github.com/punkypunk936-coder/crypto-trading-agent" target="_blank" rel="noreferrer">
              Public GitHub repo <Arrow />
            </a>
          </div>

          <a className="product-shot dark-shot" href="https://punkypunk936-coder.github.io/crypto-trading-agent/" target="_blank" rel="noreferrer" aria-label="Open the current Punky Trading Agent">
            <img src={asset("punky-current.png")} alt="Current Punky Trading Agent interface showing a stock decision, entry level, profit level, invalidation and market context" width="1440" height="900" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Research was scattered. The actual trade was still unclear.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Lead with buy, sell or wait, then show the levels and why.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>Live prices, market context, Ask Punky, paper trades and review.</p>
            </article>
          </div>

          <div className="system-loop" aria-label="Punky system flow">
            <strong>System loop</strong>
            <ol>
              <li>Live market feeds</li>
              <li>Evidence and regime read</li>
              <li>Confidence and freshness gates</li>
              <li>Decision with levels</li>
              <li>Paper execution and review</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="telegram-brain" className="product product-paper" aria-labelledby="brain-title">
        <div className="section-shell">
          <div className="product-heading">
            <div>
              <p className="product-label">02 / Personal knowledge / Local-first</p>
              <h2 id="brain-title">Telegram Brain</h2>
            </div>
            <p className="product-dek">
              A private search and browsing layer for a Telegram archive, including what saved
              images, videos, voice notes and documents actually contain.
            </p>
          </div>

          <div className="product-actions">
            <span className="status-chip">3,500+ captures indexed</span>
            <a className="text-link" href="https://github.com/punkypunk936-coder/telegram-brain" target="_blank" rel="noreferrer">
              Public GitHub repo <Arrow />
            </a>
          </div>

          <a className="product-shot brain-shot" href={asset("telegram-brain-current.png")} target="_blank" rel="noreferrer" aria-label="Open the current Telegram Brain interface screenshot">
            <img src={asset("telegram-brain-current.png")} alt="Current Telegram Brain interface with archive search, media filters, topic filters and pinned items" width="2722" height="914" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Saved images and videos were almost impossible to find again.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Keep Telegram for capture; add visual search and one-click reuse.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>OCR, vision, transcription, semantic search, deduplication and resend.</p>
            </article>
          </div>

          <div className="system-loop" aria-label="Telegram Brain system flow">
            <strong>System loop</strong>
            <ol>
              <li>Telegram capture</li>
              <li>Group related messages</li>
              <li>OCR, vision and transcription</li>
              <li>Searchable local index</li>
              <li>Retrieve, copy or resend</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="writing-desk" className="product product-warm" aria-labelledby="writing-title">
        <div className="section-shell">
          <div className="product-heading">
            <div>
              <p className="product-label">03 / Publishing automation / Working system</p>
              <h2 id="writing-title">Writing Desk</h2>
            </div>
            <p className="product-dek">
              A local publishing workspace that captures long-form X articles, preserves their
              structure and media, and carries them through editing, scheduling and Substack.
            </p>
          </div>

          <div className="product-actions">
            <span className="status-chip">Runs quietly on my Mac</span>
            <a className="text-link" href="https://github.com/punkypunk936-coder/x-to-substack-pipeline" target="_blank" rel="noreferrer">
              Public GitHub repo <Arrow />
            </a>
          </div>

          <a className="product-shot writing-shot" href={asset("writing-desk-current.png")} target="_blank" rel="noreferrer" aria-label="Open the current Writing Desk interface screenshot">
            <img src={asset("writing-desk-current.png")} alt="Current Writing Desk interface showing the X article capture, draft pipeline and rich editor" width="1440" height="900" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Moving X articles meant rebuilding every link, image and heading.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Preserve the source exactly, then make every edit visible.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>Capture, rich editing, previews, scheduling and verified publishing.</p>
            </article>
          </div>

          <div className="system-loop" aria-label="Writing Desk system flow">
            <strong>System loop</strong>
            <ol>
              <li>Watch or paste an X article</li>
              <li>Parse its document structure</li>
              <li>Edit and preview locally</li>
              <li>Upload and publish</li>
              <li>Verify the live post</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="vibe-coding" className="vibe" aria-labelledby="vibe-title">
        <div className="section-shell">
          <div className="vibe-heading">
            <p className="kicker">Vibe coding, honestly</p>
            <h2 id="vibe-title">I move fast. I do not ship slop.</h2>
            <p>
              I have ADHD, so I like getting things done quickly and letting agents handle as much
              repetitive work as possible. Unfinished projects stay local. They go online only when
              the whole workflow works. If something starts turning into slop, I delete it.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <p className="kicker">Contact</p>
          <h2 id="contact-title">I like turning annoying workflows into working software.</h2>
          <p>If you care about speed, honest product judgment and builds that are actually useful, let&apos;s talk.</p>
          <div className="contact-links">
            <a href="https://x.com/0xgoodie" target="_blank" rel="noreferrer">X / @0xgoodie <Arrow /></a>
            <a href="https://t.me/manvinder0" target="_blank" rel="noreferrer">Telegram / @manvinder0 <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <span>Manvinder Arora</span>
        <a href="https://github.com/punkypunk936-coder/manvinder-product-portfolio" target="_blank" rel="noreferrer">Portfolio source <Arrow /></a>
      </footer>
    </main>
  );
}

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
          <a href="#method">Method</a>
        </nav>
        <a className="header-link" href="https://x.com/0xgoodie" target="_blank" rel="noreferrer">
          X / @0xgoodie <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src="/punky-current.png" alt="" width="1440" height="900" />
          <img src="/telegram-brain-current.png" alt="" width="2722" height="914" />
          <img src="/writing-desk-current.png" alt="" width="1440" height="900" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">Manvinder Arora / AI product builder</p>
          <h1 id="hero-title">I build tools for the work I actually do.</h1>
          <p className="hero-copy">
            Three working products across market intelligence, personal knowledge and publishing.
            Each started with friction in my own workflow and became a system I use.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">See the products</a>
            <a className="button button-ghost" href="https://t.me/manvinder0" target="_blank" rel="noreferrer">
              Talk on Telegram <Arrow />
            </a>
          </div>
          <div className="hero-proof" aria-label="Portfolio summary">
            <span>3 working systems</span>
            <span>Built end to end</span>
            <span>Designed through daily use</span>
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

      <section id="punky" className="product product-dark" aria-labelledby="punky-title">
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
              View source <Arrow />
            </a>
          </div>

          <a className="product-shot dark-shot" href="https://punkypunk936-coder.github.io/crypto-trading-agent/" target="_blank" rel="noreferrer" aria-label="Open the current Punky Trading Agent">
            <img src="/punky-current.png" alt="Current Punky Trading Agent interface showing a stock decision, entry level, profit level, invalidation and market context" width="1440" height="900" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Prices, catalysts, chart context and trade plans lived in separate places. A dashboard could show more data without making the decision easier.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Make the decision the interface. Every call must say what to do, when it becomes valid, where the idea is wrong and how long it may take.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>Separate stock and crypto workspaces, live-price freshness checks, Ask Punky, confidence, paper execution, market context and a review loop.</p>
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
              View source <Arrow />
            </a>
          </div>

          <a className="product-shot brain-shot" href="/telegram-brain-current.png" target="_blank" rel="noreferrer" aria-label="Open the current Telegram Brain interface screenshot">
            <img src="/telegram-brain-current.png" alt="Current Telegram Brain interface with archive search, media filters, topic filters and pinned items" width="2722" height="914" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Telegram was where I naturally saved useful things, but retrieval depended on remembering exact words. Images and videos were effectively invisible to search.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Keep Telegram as the capture habit. Build the better memory around it: visual search, useful browsing and one-click reuse without moving the archive elsewhere.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>OCR, visual descriptions, video and voice transcription, document extraction, semantic search, pinned and saved views, deduplication and reverse send-to-Telegram.</p>
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
              View source <Arrow />
            </a>
          </div>

          <a className="product-shot writing-shot" href="/writing-desk-current.png" target="_blank" rel="noreferrer" aria-label="Open the current Writing Desk interface screenshot">
            <img src="/writing-desk-current.png" alt="Current Writing Desk interface showing the X article capture, draft pipeline and rich editor" width="1440" height="900" loading="lazy" />
          </a>

          <div className="product-proof">
            <article>
              <span>The friction</span>
              <p>Republishing an X article meant rebuilding the same headings, links, images and formatting by hand, then checking whether the right draft was actually live.</p>
            </article>
            <article>
              <span>The product call</span>
              <p>Exactness matters more than clever rewriting. The system should preserve the source, expose every change and refuse to publish when fidelity cannot be verified.</p>
            </article>
            <article>
              <span>What works now</span>
              <p>API-only X capture, structured rich-text editing, link previews, media upload, draft reconciliation, duplicate protection, scheduling and publish verification.</p>
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

      <section id="method" className="method" aria-labelledby="method-title">
        <div className="section-shell method-grid">
          <div className="section-intro">
            <p className="kicker">How I build</p>
            <h2 id="method-title">The model is part of the product, not the product.</h2>
          </div>
          <div className="method-list">
            <article>
              <span>01</span>
              <div><h3>Start with repeated friction</h3><p>I build around a job I already do often enough to know where the real pain lives.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Use AI where judgment is expensive</h3><p>Vision, synthesis and retrieval do useful cognitive work; deterministic checks protect exactness and trust.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Close the entire loop</h3><p>A useful product gets from input to action. I keep removing the manual handoffs that break that path.</p></div>
            </article>
            <article>
              <span>04</span>
              <div><h3>Let daily use expose the design</h3><p>I use the systems myself, notice where they slow me down, and ship the next improvement from that evidence.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <p className="kicker">Contact</p>
          <h2 id="contact-title">I like hard product problems and fast feedback loops.</h2>
          <p>If you care about taste, usefulness and the pace between an idea and a working build, let&apos;s talk.</p>
          <div className="contact-links">
            <a href="https://x.com/0xgoodie" target="_blank" rel="noreferrer">X / @0xgoodie <Arrow /></a>
            <a href="https://t.me/manvinder0" target="_blank" rel="noreferrer">Telegram / @manvinder0 <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <span>Manvinder Arora</span>
        <span>Product work / 2026</span>
      </footer>
    </main>
  );
}

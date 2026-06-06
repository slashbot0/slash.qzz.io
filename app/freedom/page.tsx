export const metadata = { title: "Freedom Project — Slash", description: "Bot Telegram/TUI de gestion de domaines gratuits, DNS Cloudflare, emails Gmail et clés API LLM." }

export default function Page() {
  return (
    <main>
      <div className="project-header">
        <div className="project-header-icon">🌐</div>
        <div className="project-header-content">
          <h1>Freedom Project</h1>
          <ul className="meta">
            <li>Python</li>
            <li>async</li>
            <li>Telegram + TUI</li>
            <li><a href="https://github.com/slashbot0/freedom-project" target="_blank">GitHub →</a></li>
          </ul>
        </div>
      </div>

      <section className="panel">
        <p className="prose">Bot d&apos;automatisation personnel (interfaces Telegram et TUI) qui gère des domaines gratuits via DigitalPlat, le DNS via Cloudflare, les emails via Gmail OAuth et les clés API LLM avec failover multi-provider.</p>
      </section>

      <h2 className="section-title" style={{ marginTop: 32 }}>Fonctionnalités</h2>
      <div className="features">
        <div className="feature"><h3>📝 Domaines gratuits</h3><p>Enregistrement/suppression de domaines <code>us.kg xx.kg dpdns.org qzz.io</code> via l&apos;API DigitalPlat.</p></div>
        <div className="feature"><h3>🌍 DNS Cloudflare</h3><p>Pointage GitHub Pages/Vercel/IP/hostname, sous-domaines, MX/SPF ImprovMX, zone auto-résolue.</p></div>
        <div className="feature"><h3>📧 Gmail</h3><p>Lecture et envoi d&apos;emails via OAuth Google avec tokens chiffrés en DB.</p></div>
        <div className="feature"><h3>🤖 LLM Router</h3><p>Multi-provider avec failover, circuit breaker, cache LRU. Ollama en fallback local.</p></div>
        <div className="feature"><h3>🎮 TUI Textual</h3><p>Interface terminal miroir 1:1 des commandes Telegram.</p></div>
        <div className="feature"><h3>📡 Phone Home</h3><p>Module de tracking Telegram pour sites web.</p></div>
      </div>
    </main>
  )
}

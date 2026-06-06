export const metadata = { title: "Polymarket Tools — Slash", description: "Analyse des traders météo sur Polymarket, early movers, edge scoring et copy-trading." }

export default function Page() {
  return (
    <main>
      <div className="project-header">
        <div className="project-header-icon">🌤️</div>
        <div className="project-header-content">
          <h1>Polymarket Tools</h1>
          <ul className="meta">
            <li>TypeScript</li>
            <li>Python</li>
            <li>Fastify</li>
            <li><a href="https://github.com/slashbot0/polymarket-analyzer" target="_blank">GitHub →</a></li>
          </ul>
        </div>
      </div>

      <section className="panel">
        <p className="prose">Suite d&apos;outils pour analyser et copier les traders météo sur Polymarket. Détection d&apos;early movers, edge scoring, copy-trading automatisé et MCP server pour Claude.</p>
      </section>

      <h2 className="section-title" style={{ marginTop: 32 }}>Projets</h2>
      <div className="features">
        <div className="feature"><h3>Polymarket Analyzer</h3><p>API REST Fastify : scan wallets, détection spécialistes météo, edge scoring, bot copy-trading avec dry-run.</p></div>
        <div className="feature"><h3>CLOB Credentials</h3><p>Générateur de credentials API Polymarket CLOB depuis une clé privée wallet.</p></div>
        <div className="feature"><h3>Polymarket MCP</h3><p>Serveur MCP Python exposant les outils d&apos;analyse à Claude.</p></div>
        <div className="feature"><h3>Orchestration Stack</h3><p>Scanners journaliers, crash recovery bot, Falcon copy-trading, sentiment X/Twitter.</p></div>
      </div>
    </main>
  )
}

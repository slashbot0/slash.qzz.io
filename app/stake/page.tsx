export const metadata = { title: "Stake Bot Analyzer — Slash", description: "Moteur de découverte, analyse et scoring de bots Stake.com open-source." }

export default function Page() {
  return (
    <main>
      <div className="project-header">
        <div className="project-header-icon">🎰</div>
        <div className="project-header-content">
          <h1>Stake Bot Analyzer</h1>
          <ul className="meta">
            <li>TypeScript</li>
            <li>Fastify</li>
            <li>REST API</li>
            <li><a href="https://github.com/slashbot0/stake-bot-analyzer" target="_blank">GitHub →</a></li>
          </ul>
        </div>
      </div>

      <section className="panel">
        <p className="prose">Moteur de découverte et d&apos;analyse de bots Stake.com open-source. Scoring qualité/sécurité, vérification Provably Fair, MCP server pour Claude.</p>
      </section>

      <h2 className="section-title" style={{ marginTop: 32 }}>Fonctionnalités</h2>
      <div className="features">
        <div className="feature"><h3>🔍 Découverte GitHub</h3><p>Scan automatique de GitHub pour trouver des bots Stake.com, avec analyse statique du code.</p></div>
        <div className="feature"><h3>🛡️ Scoring sécurité</h3><p>Détection de red flags : clés en dur, drainers, code obfusqué.</p></div>
        <div className="feature"><h3>✅ Provably Fair</h3><p>Vérificateur HMAC-SHA256 intégré pour valider l&apos;équité des jeux.</p></div>
        <div className="feature"><h3>🧠 MCP Server</h3><p>Expose les analyses à Claude via le Model Context Protocol.</p></div>
      </div>
    </main>
  )
}

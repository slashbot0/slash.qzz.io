import Link from "next/link"

const PROJECTS = [
  {
    icon: "🤖",
    name: "Bot Index",
    desc: "313 bots open-source découverts sur GitHub, analysés, notés et backtestés — Web3/DEX, Polymarket et ML/AI. Filtrage par catégorie, chaîne, stratégie, sécurité. Leaderboard backtest + paper trading forward.",
    tags: [{ label: "TypeScript", cls: "lang-ts" }, { label: "Next.js", cls: "" }, { label: "313 bots", cls: "" }],
    href: "/bots",
  },
  {
    icon: "🌐",
    name: "Freedom Project",
    desc: "Bot Telegram/TUI de gestion de domaines gratuits (DigitalPlat), DNS (Cloudflare), emails (Gmail/ImprovMX) et clés API LLM avec failover multi-provider.",
    tags: [{ label: "Python", cls: "lang-py" }, { label: "async", cls: "" }, { label: "Telegram", cls: "" }],
    href: "https://github.com/slashbot0/freedom-project",
  },
  {
    icon: "🌤️",
    name: "Polymarket Tools",
    desc: "Analyse des traders météo sur Polymarket : scan de wallets, détection d'early movers, edge scoring, copy-trading et MCP server pour Claude.",
    tags: [{ label: "TypeScript", cls: "lang-ts" }, { label: "Python", cls: "lang-py" }, { label: "Fastify", cls: "" }],
    href: "/polymarket",
  },
  {
    icon: "💳",
    name: "Telegram Wallet Bot",
    desc: "Bot Telegram multi-chain (Ethereum, Polygon, Solana, Bitcoin…) : création/import de wallets, transferts, staking, Polymarket CLOB.",
    tags: [{ label: "Node.js", cls: "" }, { label: "Telegraf", cls: "" }, { label: "multi-chain", cls: "" }],
    href: "/telegram-wallet",
  },
  {
    icon: "📡",
    name: "Phone Home",
    desc: "Module de tracking Telegram standalone : capture IP/OS/Browser/référent depuis les headers HTTP et envoie une notification Telegram formatée.",
    tags: [{ label: "TypeScript", cls: "lang-ts" }, { label: "standalone", cls: "" }],
    href: "/phone-home",
  },
]

export default function Home() {
  return (
    <main>
      <div className="hero" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 40 }}>
          /slash<span className="accent">.</span>
        </h1>
        <p className="subtitle" style={{ margin: "0 auto 8px", fontSize: 16 }}>
          Suite d&apos;outils de trading, d&apos;analyse et d&apos;automatisation
        </p>
        <p style={{ color: "var(--muted)", fontSize: 14, margin: 0 }}>
          bots DEX · domaines/DNS · LLM · Polymarket · wallets crypto
        </p>
      </div>

      <h2 className="section-title">Projets</h2>
      <div className="projects">
        {PROJECTS.map((p) => {
          const external = p.href.startsWith("http")
          const inner = (
            <>
              <div className="project-icon" aria-hidden>{p.icon}</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t.label} className={`project-tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </>
          )
          return external ? (
            <a key={p.name} href={p.href} className="project-card" target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <Link key={p.name} href={p.href} className="project-card">
              {inner}
            </Link>
          )
        })}
      </div>

      <h2 className="section-title">Stats</h2>
      <div className="stats">
        <div className="stat"><div className="stat-value">5</div><div className="stat-label">projets</div></div>
        <div className="stat"><div className="stat-value">313</div><div className="stat-label">bots analysés</div></div>
        <div className="stat"><div className="stat-value">Python</div><div className="stat-label">langue principale</div></div>
        <div className="stat"><div className="stat-value">TypeScript</div><div className="stat-label">web</div></div>
      </div>
    </main>
  )
}

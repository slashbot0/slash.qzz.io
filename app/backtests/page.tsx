import Link from "next/link"
import dataset from "../../data/bots.json"
import type { Dataset } from "../../lib/types"
import BacktestTable from "./BacktestTable"

export const metadata = {
  title: "Backtests — Slash",
  description: "Performance simulée out-of-sample des bots de trading: alpha vs hold, win rate, profit factor.",
}

const pct = (x: number) => `${(x * 100).toFixed(0)}%`

export default function Page() {
  const data = dataset as Dataset
  const bots = data.bots.filter((b) => b.backtestable)
  const beat = bots.filter((b) => (b.backtestAlpha ?? 0) > 0).length
  const wins = bots.map((b) => b.backtestWinRate).filter((w): w is number => w != null)
  const avgWin = wins.length ? wins.reduce((a, b) => a + b, 0) / wins.length : 0
  const avgAlpha = bots.length ? bots.reduce((a, b) => a + (b.backtestAlpha ?? 0), 0) / bots.length : 0
  return (
    <main>
      <header className="hero">
        <Link className="backlink" href="/bots">← retour à l&apos;index</Link>
        <h1>Backtests <span className="accent">📈</span></h1>
        <span className="navlinks">
          <Link className="navlink" href="/paper">🧪 Paper trading →</Link>
          <Link className="navlink" href="/methodologie">🔬 Méthodologie →</Link>
        </span>
        <p className="subtitle">Performance <strong>simulée out-of-sample</strong> des {bots.length} bots backtestables.</p>
        <p className="sim-banner">📈 Backtests <strong>simulés</strong> walk-forward. <strong>Pas des gains réels.</strong></p>
        <div className="stats">
          <div className="stat"><div className="stat-value">{beat}/{bots.length}</div><div className="stat-label">battent le hold (α &gt; 0)</div></div>
          <div className="stat"><div className="stat-value">{pct(avgWin)}</div><div className="stat-label">win rate moyen</div></div>
          <div className="stat"><div className={`stat-value ${avgAlpha >= 0 ? "" : "stat-warn"}`}>{avgAlpha >= 0 ? "+" : ""}{pct(avgAlpha)}</div><div className="stat-label">alpha moyen vs hold</div></div>
        </div>
      </header>

      <BacktestTable bots={bots} />

      <footer className="footer">
        ⚠️ Ne jamais exécuter un bot tiers avec une vraie clé privée. Les performances passées simulées ne préjugent pas des résultats futurs.
      </footer>
    </main>
  )
}

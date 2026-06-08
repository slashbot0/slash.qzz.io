import Link from "next/link"
import paper from "../../data/paper.json"
import paperPm from "../../data/paper-polymarket.json"
import live from "../../data/paper-live.json"
import { pct, cls } from "../../lib/format"

export const metadata = {
  title: "Paper trading — Slash",
  description: "Portefeuilles papier simulés (Web3/DEX + Polymarket) à partir des backtests et simulations.",
}

const eur = (x: number) => `$${x.toLocaleString("fr-FR", { maximumFractionDigits: 0 })}`

function Chart({ curve, base }: { curve: number[]; base: number }) {
  const w = 760, h = 200, pad = 12
  const min = Math.min(...curve, base)
  const max = Math.max(...curve, base)
  const span = max - min || 1
  const x = (i: number) => pad + (i * (w - 2 * pad)) / (curve.length - 1)
  const y = (v: number) => h - pad - ((v - min) / span) * (h - 2 * pad)
  const line = curve.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ")
  const up = curve[curve.length - 1]! >= curve[0]!
  const color = up ? "#00d4a0" : "#ff6b81"
  const area = `${x(0).toFixed(1)},${(h - pad).toFixed(1)} ${line} ${x(curve.length - 1).toFixed(1)},${(h - pad).toFixed(1)}`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="bigchart" role="img" aria-label={`courbe de valeur du portefeuille, ${up ? "haussière" : "baissière"}`}>
      <polygon points={area} fill={color} fillOpacity="0.08" />
      <line x1={pad} x2={w - pad} y1={y(base)} y2={y(base)} stroke="#3a3f52" strokeWidth="1" strokeDasharray="4 4" />
      <polyline points={line} fill="none" stroke={color} strokeWidth="2.5" />
    </svg>
  )
}

type Paper = typeof paper
type Pos = Paper["positions"][number]

function Portfolio({ data, icon, title, note }: { data: Paper; icon: string; title: string; note: string }) {
  const p = data.portfolio
  return (
    <section className="panel">
      <h2 className="panel-title">{icon} {title}</h2>
      <p className="prose" style={{ marginTop: -4 }}>{eur(data.capital)} · {data.strategy}. {note}</p>
      <div className="bstats">
        <div className="bstat bstat-big"><div className="bstat-value">{eur(p.finalValue)}</div><div className="bstat-label">valeur finale (départ {eur(p.initialValue)})</div></div>
        <div className="bstat bstat-big"><div className={`bstat-value ${cls(p.pnl)}`}>{p.pnl >= 0 ? "+" : ""}{eur(p.pnl)}</div><div className="bstat-label">P&amp;L</div></div>
        <div className="bstat bstat-big"><div className={`bstat-value ${cls(p.return)}`}>{pct(p.return, true)}</div><div className="bstat-label">rendement</div></div>
        <div className="bstat bstat-big"><div className="bstat-value neg">{pct(p.maxDrawdown)}</div><div className="bstat-label">max drawdown</div></div>
      </div>
      <Chart curve={p.curve} base={data.capital} />
      <div className="table-wrap" style={{ marginTop: 16 }}>
        <table className="bt-table">
          <thead>
            <tr>
              <th className="left">bot</th>
              <th className="left">stratégie</th>
              <th>poids</th>
              <th>montant</th>
              <th>valeur finale</th>
              <th>rendement</th>
              <th>α vs hold</th>
              <th>win</th>
            </tr>
          </thead>
          <tbody>
            {data.positions.map((pos: Pos) => (
              <tr key={pos.fullName}>
                <td className="left"><Link href={`/bot/${pos.owner}/${pos.repo}`}>{pos.fullName}</Link></td>
                <td className="left muted">{pos.strategy}</td>
                <td>{pct(pos.weight)}</td>
                <td>{eur(pos.amount)}</td>
                <td>{eur(pos.finalValue)}</td>
                <td className={cls(pos.return)}>{pct(pos.return, true)}</td>
                <td className={cls(pos.alpha)}>{pct(pos.alpha, true)}</td>
                <td>{pos.winRate == null ? "—" : pct(pos.winRate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function Page() {
  const pmReturn = paperPm.portfolio.return
  const webReturn = paper.portfolio.return
  return (
    <main>
      <header className="hero">
        <Link className="backlink" href="/bots">← retour à l&apos;index</Link>
        <h1>Paper trading <span className="accent">🧪</span></h1>
        <span className="navlinks">
          <Link className="navlink" href="/backtests">📈 Backtests →</Link>
          <Link className="navlink" href="/methodologie">🔬 Méthodologie →</Link>
        </span>
        <p className="subtitle">Deux portefeuilles <strong>papier</strong> (argent fictif) : un panier <strong>Web3/DEX</strong> rejoué sur la période backtest, et un panier <strong>Polymarket</strong> issu de la simulation marché de prédiction.</p>
        <p className="sim-banner">🧪 <strong>Simulation, pas d&apos;argent réel.</strong> Les portefeuilles sélectionnent les meilleurs bots par alpha (sélection a posteriori).</p>
        <div className="bstats">
          <div className="bstat bstat-big"><div className={`bstat-value ${cls(webReturn)}`}>{pct(webReturn, true)}</div><div className="bstat-label">Web3/DEX</div></div>
          <div className="bstat bstat-big"><div className={`bstat-value ${cls(pmReturn)}`}>{pct(pmReturn, true)}</div><div className="bstat-label">Polymarket</div></div>
        </div>
      </header>

      <Portfolio
        data={paper}
        icon="🤖"
        title="Panier Web3 / DEX"
        note="Rejoué sur la période backtest out-of-sample (OHLC Binance réels)."
      />

      <Portfolio
        data={paperPm as unknown as Paper}
        icon="🌤️"
        title="Panier Polymarket"
        note="Issu de la simulation forward des archétypes de stratégie (marché de prédiction synthétique)."
      />

      <section className="panel">
        <h2 className="panel-title">📡 Forward — instantané du {live.updatedAt}</h2>
        <div className="bstats">
          <div className="bstat bstat-big"><div className={`bstat-value ${cls(live.portfolio.return)}`}>{pct(live.portfolio.return, true)}</div><div className="bstat-label">rendement forward ({live.days} j)</div></div>
          <div className="bstat bstat-big"><div className="bstat-value">{eur(live.portfolio.finalValue)}</div><div className="bstat-label">valeur (départ {eur(live.capital)})</div></div>
          <div className="bstat bstat-big"><div className="bstat-value neg">{pct(live.portfolio.maxDrawdown)}</div><div className="bstat-label">max drawdown</div></div>
        </div>
        <Chart curve={live.portfolio.curve.map((c) => c.value)} base={live.capital} />
        <p className="meta-line">📸 Instantané forward depuis {live.startDate} (simulé). L&apos;automatisation quotidienne et l&apos;exécution réelle sont les étapes suivantes — <strong>ce n&apos;est pas encore mis à jour automatiquement.</strong></p>
      </section>

      <footer className="footer">⚠️ Paper trading simulé. La sélection des meilleurs bots par alpha est faite a posteriori ; les performances passées simulées ne préjugent pas des résultats futurs.</footer>
    </main>
  )
}

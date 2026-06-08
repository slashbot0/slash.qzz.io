import Link from "next/link"
import data from "../../data/bots.json"
import type { Bot } from "../../lib/types"
import { pct } from "../../lib/format"

const bots = data.bots as Bot[]
const shortName = (full: string) => full.split("/").pop() ?? full
const catLabel = (c: string) =>
  ({ "web3-dex": "🤖 Web3 / DEX", polymarket: "🎯 Polymarket", "ml-ai": "🧠 ML / AI" }[c] ?? c)

type Row = {
  key: string
  count: number
  avgScore: number
  backtested: number
  avgAlpha: number | null
  best: Bot | null
  cleanPct: number
}

function aggregate(groupOf: (b: Bot) => string): Row[] {
  const map = new Map<string, Bot[]>()
  for (const b of bots) {
    const k = groupOf(b)
    ;(map.get(k) ?? map.set(k, []).get(k)!).push(b)
  }
  const rows: Row[] = []
  for (const [key, list] of map) {
    const bt = list.filter((b) => b.backtestable && typeof b.backtestAlpha === "number")
    const best = bt.length
      ? bt.reduce((a, b) => ((b.backtestAlpha ?? -Infinity) > (a.backtestAlpha ?? -Infinity) ? b : a))
      : null
    rows.push({
      key,
      count: list.length,
      avgScore: list.reduce((s, b) => s + b.botScore, 0) / list.length,
      backtested: bt.length,
      avgAlpha: bt.length ? bt.reduce((s, b) => s + (b.backtestAlpha ?? 0), 0) / bt.length : null,
      best,
      cleanPct: list.filter((b) => b.redFlagCount === 0).length / list.length,
    })
  }
  return rows.sort((a, b) => b.count - a.count)
}

function Table({ rows, label }: { rows: Row[]; label: (k: string) => string }) {
  return (
    <div className="cmp-wrap">
      <table className="cmp">
        <thead>
          <tr>
            <th>Type</th><th>Bots</th><th>Backtestés</th><th>Score moy.</th>
            <th>α moy.</th><th>Sans red flag</th><th>Meilleur (α)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <td className="cmp-type">{label(r.key)}</td>
              <td className="mono">{r.count}</td>
              <td className="mono">{r.backtested}</td>
              <td className="mono">{r.avgScore.toFixed(0)}</td>
              <td className={`mono ${(r.avgAlpha ?? 0) >= 0 ? "pos" : "neg"}`}>{r.avgAlpha == null ? "—" : pct(r.avgAlpha, true, 0)}</td>
              <td className="mono">{pct(r.cleanPct, false, 0)}</td>
              <td>{r.best ? (
                <a href={`https://github.com/${r.best.fullName}`} target="_blank" rel="noreferrer">
                  {shortName(r.best.fullName)} <span className="pos">{pct(r.best.backtestAlpha ?? 0, true, 0)}</span>
                </a>
              ) : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ComparePage() {
  const byCat = aggregate((b) => b.category ?? "web3-dex")
  const byStrat = aggregate((b) => b.strategies[0] || "autres")
  return (
    <main>
      <header className="hero">
        <h1>Comparaison par type</h1>
        <p className="subtitle">
          Agrégats par catégorie et par stratégie principale — {bots.length} bots, métriques <strong>simulées</strong> (out-of-sample).
        </p>
        <span className="navlinks">
          <Link className="navlink" href="/bots">← Index des bots</Link>
          <Link className="navlink" href="/backtests">Leaderboard backtests →</Link>
        </span>
      </header>

      <h2 className="section-title">Par catégorie</h2>
      <Table rows={byCat} label={catLabel} />

      <h2 className="section-title">Par stratégie principale</h2>
      <Table rows={byStrat} label={(k) => `#${k}`} />

      <footer className="footer">
        α = rendement du bot moins un buy &amp; hold. Résultats simulés — pas des gains réels.
      </footer>
    </main>
  )
}

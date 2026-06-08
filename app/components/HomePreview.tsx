// Aperçu produit "live" pour le hero : mini-leaderboard des meilleurs bots par
// alpha de backtest + courbes d'équité des 2 portefeuilles paper. 100% données
// réelles (data/*.json), rendu serveur. Tout reste étiqueté "simulé".
import data from "../../data/bots.json"
import paper from "../../data/paper.json"
import paperPm from "../../data/paper-polymarket.json"
import type { Bot } from "../../lib/types"
import { securityBadge } from "../../lib/types"
import { Spark } from "./Spark"

const pct = (x: number) => `${x >= 0 ? "+" : ""}${(x * 100).toFixed(0)}%`
const shortName = (full: string) => full.split("/").pop() ?? full

const topAlpha: Bot[] = (data.bots as Bot[])
  .filter((b) => b.backtestable && typeof b.backtestAlpha === "number")
  .sort((a, b) => (b.backtestAlpha ?? -Infinity) - (a.backtestAlpha ?? -Infinity))
  .slice(0, 5)

function MiniPortfolio({ label, ret, curve }: { label: string; ret: number; curve: number[] }) {
  const norm = curve.map((v) => v / curve[0]!)
  return (
    <div className="pv-pf">
      <div className="pv-pf-head">
        <span className="pv-pf-label">{label}</span>
        <span className={`pv-pf-ret ${ret >= 0 ? "pos" : "neg"}`}>{pct(ret)}</span>
      </div>
      <Spark data={norm} w={150} h={40} sw={1.8} fill />
    </div>
  )
}

export default function HomePreview() {
  return (
    <div className="preview" aria-label="aperçu produit">
      <div className="preview-head">
        <span className="preview-dot" />
        <span className="preview-title">leaderboard · α de backtest</span>
        <span className="preview-tag">simulé</span>
      </div>

      <ol className="pv-list">
        {topAlpha.map((b, i) => {
          const badge = securityBadge(b.redFlagCount)
          return (
            <li key={b.fullName} className="pv-row">
              <span className="pv-rank">{i + 1}</span>
              <span className="pv-name" title={b.fullName}>{shortName(b.fullName)}</span>
              <Spark data={b.backtestCurve} w={84} h={22} sw={1.4} />
              <span className="pv-alpha pos">α {pct(b.backtestAlpha ?? 0)}</span>
              <span className={`pv-sec ${badge.cls}`} title={badge.label}>
                {b.redFlagCount > 0 ? "⚠" : "✓"}
              </span>
            </li>
          )
        })}
      </ol>

      <div className="pv-pfs">
        <MiniPortfolio label="Polymarket · paper" ret={paperPm.portfolio.return} curve={paperPm.portfolio.curve} />
        <MiniPortfolio label="Web3/DEX · paper" ret={paper.portfolio.return} curve={paper.portfolio.curve} />
      </div>
    </div>
  )
}

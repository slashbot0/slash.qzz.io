import Link from "next/link"
import data from "../data/bots.json"
import paperPm from "../data/paper-polymarket.json"
import HomePreview from "./components/HomePreview"
import {
  IconIndex,
  IconChart,
  IconFlask,
  IconWallet,
  IconGlobe,
  IconTarget,
  IconSignal,
  IconArrow,
} from "./components/icons"

const GITHUB = "https://github.com/slashbot0"
const chains = data.categories.chains.length
const backtested = data.backtest?.evaluated ?? 0
const totalBots = data.stats.totalBots
const pmReturn = `+${(paperPm.portfolio.return * 100).toFixed(0)}%`

const WORKFLOWS = [
  {
    icon: IconIndex,
    title: "Découvrir & scorer",
    desc: `${totalBots} repos GitHub analysés — qualité de code + sécurité — filtrables par chaîne, DEX et stratégie.`,
    href: "/bots",
    cta: "Explorer l'index",
  },
  {
    icon: IconChart,
    title: "Backtester",
    desc: "Walk-forward out-of-sample sur OHLC réels (spot) + simulation prediction-market. Alpha vs buy & hold.",
    href: "/backtests",
    cta: "Voir le leaderboard",
  },
  {
    icon: IconFlask,
    title: "Paper trading forward",
    desc: "Portefeuilles équipondérés des meilleurs bots, suivis dans le temps — sans risque, sans capital réel.",
    href: "/paper",
    cta: "Suivre les portefeuilles",
  },
]

const SECONDARY = [
  { icon: IconTarget, name: "Polymarket Tools", desc: "Scan de traders, early movers, edge scoring, MCP.", href: "/polymarket" },
  { icon: IconWallet, name: "Telegram Wallet Bot", desc: "Wallets multi-chain + déploiement vers projets validés.", href: "/telegram-wallet" },
  { icon: IconGlobe, name: "Freedom Project", desc: "Domaines/DNS/emails + routeur LLM multi-provider.", href: "/freedom" },
  { icon: IconSignal, name: "Phone Home", desc: "Tracking de visites — notification Telegram formatée.", href: "/phone-home" },
]

export default function Home() {
  return (
    <main className="home">
      {/* ─── Hero asymétrique ─── */}
      <section className="hero2">
        <div className="hero2-copy">
          <div className="hero2-kicker">research-to-execution · crypto</div>
          <h1 className="hero2-title">
            Analyse, classe et teste des <span className="accent">bots crypto</span> en conditions réelles.
          </h1>
          <p className="hero2-sub">
            De la découverte sur GitHub au <strong>paper trading forward</strong> : une seule suite pour
            trouver les stratégies qui tiennent, mesurer leur <em>alpha</em>, puis les suivre dans le temps.
          </p>
          <div className="hero2-cta">
            <Link href="/bots" className="btn btn-primary">
              Explorer les bots <IconArrow className="btn-ic" />
            </Link>
            <Link href="/backtests" className="btn btn-ghost">Voir les backtests</Link>
            <a href={GITHUB} className="btn btn-link" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <ul className="hero2-proof" aria-label="preuves">
            <li><b>{totalBots}</b><span>bots analysés</span></li>
            <li><b>{backtested}</b><span>backtestés</span></li>
            <li><b className="pos">{pmReturn}</b><span>Polymarket (paper)</span></li>
            <li><b>{chains}</b><span>chaînes</span></li>
          </ul>
        </div>
        <div className="hero2-preview">
          <HomePreview />
        </div>
      </section>

      {/* ─── Ce que tu peux faire ─── */}
      <section className="block">
        <h2 className="block-title">Ce que tu peux faire</h2>
        <p className="block-lead">Un pipeline en trois temps, de la donnée brute à la décision.</p>
        <div className="flow">
          {WORKFLOWS.map((w, i) => (
            <Link key={w.title} href={w.href} className="flow-card">
              <div className="flow-top">
                <span className="flow-step">0{i + 1}</span>
                <w.icon className="flow-ic" />
              </div>
              <h3 className="flow-name">{w.title}</h3>
              <p className="flow-desc">{w.desc}</p>
              <span className="flow-cta">{w.cta} <IconArrow className="btn-ic" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Produit phare ─── */}
      <section className="block">
        <h2 className="block-title">Produit phare</h2>
        <Link href="/bots" className="feature">
          <div className="feature-body">
            <IconIndex className="feature-ic" />
            <h3 className="feature-name">Bot Index</h3>
            <p className="feature-desc">
              {totalBots} bots open-source découverts, notés (qualité + sécurité) et {backtested} backtestés —
              Web3/DEX, Polymarket et ML/AI. Filtrage par chaîne, stratégie, sécurité ; leaderboard et paper trading.
            </p>
            <span className="flow-cta">Ouvrir l&apos;index <IconArrow className="btn-ic" /></span>
          </div>
          <div className="feature-metrics">
            <div className="fm"><b>{totalBots}</b><span>bots analysés</span></div>
            <div className="fm"><b>{backtested}</b><span>backtestés</span></div>
            <div className="fm"><b>{data.categories.strategies.length}</b><span>stratégies</span></div>
            <div className="fm"><b>{chains}</b><span>chaînes</span></div>
          </div>
        </Link>
      </section>

      {/* ─── Pourquoi c'est crédible ─── */}
      <section className="block">
        <h2 className="block-title">Pourquoi c&apos;est crédible</h2>
        <div className="cred">
          <div className="cred-item"><b>Sources</b><span>Repos GitHub publics + OHLC réels (Binance) pour les backtests spot.</span></div>
          <div className="cred-item"><b>Scoring</b><span>Qualité de code et signaux de sécurité (red flags) combinés, pas un simple nombre d&apos;étoiles.</span></div>
          <div className="cred-item"><b>Méthode</b><span>Backtests walk-forward <em>out-of-sample</em> ; alpha mesuré contre un buy &amp; hold.</span></div>
          <div className="cred-item warn"><b>Limites assumées</b><span>Résultats <strong>simulés</strong> — pas des gains réels. Le passé ne préjuge pas du futur.</span></div>
        </div>
        <Link href="/methodologie" className="flow-cta cred-link">Lire la méthodologie complète <IconArrow className="btn-ic" /></Link>
      </section>

      {/* ─── Le reste de la suite ─── */}
      <section className="block">
        <h2 className="block-title">Le reste de la suite</h2>
        <div className="secondary">
          {SECONDARY.map((s) => {
            const ext = s.href.startsWith("http")
            const inner = (
              <>
                <s.icon className="sec-ic" />
                <div className="sec-text">
                  <span className="sec-name">{s.name}{ext && <span className="sec-ext"> ↗</span>}</span>
                  <span className="sec-desc">{s.desc}</span>
                </div>
              </>
            )
            return ext ? (
              <a key={s.name} href={s.href} className="sec-card" target="_blank" rel="noreferrer">{inner}</a>
            ) : (
              <Link key={s.name} href={s.href} className="sec-card">{inner}</Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

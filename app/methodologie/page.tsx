import Link from "next/link"

export const metadata = { title: "Méthodologie — Slash" }

export default function Page() {
  return (
    <main>
      <header className="hero">
        <Link className="backlink" href="/bots">← retour à l&apos;index</Link>
        <h1>Méthodologie <span className="accent">🔬</span></h1>
        <p className="subtitle">Comment les bots sont notés, et ce que les backtests simulés mesurent vraiment.</p>
      </header>

      <section className="panel">
        <h2 className="panel-title">1. Découverte & analyse statique</h2>
        <p className="prose">Les bots sont découverts sur GitHub via des recherches ciblées, puis analysés <strong>statiquement</strong> (jamais exécutés) : chaînes, DEX, stratégies, et surtout <strong>red flags de sécurité</strong> (clés en dur, drainers…). Le <em>score code</em> (0-100) pondère popularité, activité, qualité et sécurité (25 %).</p>
      </section>

      <section className="panel">
        <h2 className="panel-title">2. Backtests simulés (out-of-sample)</h2>
        <p className="prose">Pour les stratégies <strong>backtestables sur prix</strong> (grid, DCA, market-making), on rejoue la stratégie sur des données de marché réelles. Points clés :</p>
        <ul className="prose">
          <li><strong>Multi-actifs</strong> : testé sur un panier d&apos;actifs liquides, pas cherry-pické.</li>
          <li><strong>Walk-forward</strong> : calibré sur période A, testé sur période B jamais vue (anti-overfitting).</li>
          <li><strong>Frais + slippage</strong> appliqués à chaque trade.</li>
        </ul>
        <p className="prose">Stratégies <strong>non backtestables</strong> (MEV, sandwich, sniping…) : pas de perf simulée (le backtest historique mentirait).</p>
      </section>

      <section className="panel">
        <h2 className="panel-title">3. Lire les métriques</h2>
        <ul className="prose">
          <li><strong>α vs hold</strong> — rendement du bot moins buy &amp; hold.</li>
          <li><strong>win rate</strong> — part de trades gagnants.</li>
          <li><strong>profit factor</strong> — gains ÷ pertes.</li>
          <li><strong>Sharpe / Sortino</strong> — rendement risque-ajusté.</li>
          <li><strong>drawdown</strong> — pire perte pic-à-creux.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">⚠️ Honnêteté</h2>
        <p className="prose">Les profits sont <strong>simulés</strong>. La plupart des bots sont <strong>négatifs en absolu</strong> — mais beaucoup <strong>battent le hold</strong> (α &gt; 0). Les performances passées simulées ne préjugent pas des résultats futurs.</p>
        <p className="meta-line"><Link href="/backtests">→ voir le leaderboard backtests</Link></p>
      </section>

      <footer className="footer">⚠️ Ne jamais exécuter un bot tiers avec une vraie clé privée.</footer>
    </main>
  )
}

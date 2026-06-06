import Link from "next/link"

export const metadata = { title: "Telegram Wallet Bot — Slash", description: "Bot Telegram multi-chain pour la gestion de wallets crypto." }

export default function Page() {
  return (
    <main>
      <Link className="backlink" href="/">← accueil</Link>
      <div className="project-header">
        <div className="project-header-icon" aria-hidden>💳</div>
        <div className="project-header-content">
          <h1>Telegram Wallet Bot</h1>
          <ul className="meta">
            <li>Node.js</li>
            <li>Telegraf</li>
            <li>Multi-chain</li>
            <li><a href="https://github.com/slashbot0/telegram-trade-wallet-bot" target="_blank" rel="noreferrer">GitHub →</a></li>
          </ul>
        </div>
      </div>

      <section className="panel">
        <p className="prose">Bot Telegram mono-utilisateur pour gérer des wallets multi-chain : Ethereum, Polygon, Solana, Bitcoin, Litecoin, BCH, Arbitrum, Optimism, Base. Transferts, staking, Polymarket CLOB.</p>
      </section>

      <h2 className="section-title" style={{ marginTop: 32 }}>Chaînes supportées</h2>
      <div className="features">
        <div className="feature"><h3>Ethereum & L2s</h3><p>Ethereum, Arbitrum, Optimism, Base — swaps, transfers, staking.</p></div>
        <div className="feature"><h3>Solana</h3><p>Transferts SOL/SPL, staking Jito/Marinade, NFTs.</p></div>
        <div className="feature"><h3>Bitcoin & forks</h3><p>Bitcoin, Litecoin, Bitcoin Cash — envoi/réception.</p></div>
        <div className="feature"><h3>Polymarket</h3><p>Intégration CLOB pour trading sur Polymarket via le bot.</p></div>
      </div>
    </main>
  )
}

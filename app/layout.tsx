import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slash — trading suite",
  description:
    "Suite d'outils de trading et d'automatisation : analyse de bots DEX, gestion de domaines/DNS/emails, bots Telegram multi-chain, prédiction Polymarket.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav className="nav">
          <a href="/" className="nav-logo">/slash</a>
          <div className="nav-links">
            <a href="/" className="nav-link">accueil</a>
            <a href="/bots" className="nav-link">bots</a>
            <a href="/backtests" className="nav-link">backtests</a>
            <a href="/paper" className="nav-link">paper</a>
            <a href="/methodologie" className="nav-link">méthodologie</a>
          </div>
        </nav>
        {children}
        <footer className="hub-footer">
          <a href="https://github.com/slashbot0">slashbot0</a> · propulsé par GitHub Pages
        </footer>
      </body>
    </html>
  )
}

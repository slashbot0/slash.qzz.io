import type { Metadata } from "next"
import "./globals.css"
import Nav from "./Nav"

export const metadata: Metadata = {
  title: "Slash — trading suite",
  description:
    "Suite d'outils de trading et d'automatisation : analyse de bots DEX, gestion de domaines/DNS/emails, bots Telegram multi-chain, prédiction Polymarket.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        {children}
        <footer className="hub-footer">
          <a href="https://github.com/slashbot0">slashbot0</a> · propulsé par GitHub Pages
        </footer>
      </body>
    </html>
  )
}

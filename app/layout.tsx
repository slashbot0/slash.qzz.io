import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Nav from "./Nav"
import Beacon from "./Beacon"

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" })
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  title: "Slash — research-to-execution pour bots crypto",
  description:
    "Analyse, classe et teste des bots crypto en conditions réelles — de la découverte GitHub au paper trading forward. Index de 308 bots, backtests walk-forward, portefeuilles paper.",
  openGraph: {
    title: "Slash — research-to-execution pour bots crypto",
    description:
      "De la découverte GitHub au paper trading forward : trouve les stratégies qui tiennent, mesure leur alpha, suis-les dans le temps.",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "mig9pdf5vm3ayg8sjdu98axmzh78g3",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <Beacon />
        <Nav />
        {children}
        <footer className="hub-footer">
          <a href="https://github.com/slashbot0">slashbot0</a> · propulsé par GitHub Pages
        </footer>
      </body>
    </html>
  )
}

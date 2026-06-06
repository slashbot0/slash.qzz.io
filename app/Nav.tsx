"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
  { href: "/", label: "accueil" },
  { href: "/bots", label: "bots" },
  { href: "/backtests", label: "backtests" },
  { href: "/paper", label: "paper" },
  { href: "/methodologie", label: "méthodologie" },
]

export default function Nav() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">/slash</Link>
      <div className="nav-links">
        {LINKS.map((l) => {
          const active = isActive(l.href)
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {l.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

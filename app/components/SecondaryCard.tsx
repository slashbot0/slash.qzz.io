import Link from "next/link"
import type { ComponentType, ReactNode } from "react"

/**
 * Carte secondaire `.sec-card` partagée — utilisée par la home (« le reste de la
 * suite ») et la page /outils. Lien externe (`<a target="_blank">` + ↗) ou interne
 * (`<Link>`) selon `external`. Icône optionnelle.
 */
export default function SecondaryCard({
  icon: Icon,
  name,
  desc,
  href,
  external = false,
}: {
  icon?: ComponentType<{ className?: string }>
  name: ReactNode
  desc?: string
  href: string
  external?: boolean
}) {
  const inner = (
    <>
      {Icon ? <Icon className="sec-ic" /> : null}
      <div className="sec-text">
        <span className="sec-name">
          {name}
          {external ? <span className="sec-ext"> ↗</span> : null}
        </span>
        {desc ? <span className="sec-desc">{desc}</span> : null}
      </div>
    </>
  )
  return external ? (
    <a href={href} className="sec-card" target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className="sec-card">
      {inner}
    </Link>
  )
}

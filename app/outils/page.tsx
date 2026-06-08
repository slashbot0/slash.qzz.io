import Link from "next/link"
import tools from "../../data/tools.json"
import SecondaryCard from "../components/SecondaryCard"

export const metadata = {
  title: "Outils & Modules — Slash",
  description:
    "Les meilleurs packages npm et repos GitHub pour le trading Web3 et le betting Polymarket — découverts automatiquement et classés par popularité.",
}

type NpmPkg = { name: string; desc?: string; url: string; score?: number }
type GhRepo = { fullName: string; stars: number; desc?: string; url: string; lang?: string }
type Category = { github?: GhRepo[]; npm?: NpmPkg[] }

const data = tools as Record<string, Category>

export default function Page() {
  const cats = Object.entries(data)
  const totalNpm = cats.reduce((n, [, c]) => n + (c.npm?.length ?? 0), 0)
  const totalGh = cats.reduce((n, [, c]) => n + (c.github?.length ?? 0), 0)

  return (
    <main>
      <header className="hero">
        <Link className="backlink" href="/bots">
          ← retour à l&apos;index
        </Link>
        <h1>
          Outils &amp; Modules <span className="accent">🧰</span>
        </h1>
        <p className="subtitle">
          Les meilleurs packages npm et repos GitHub pour le trading Web3 et le betting Polymarket —
          découverts automatiquement par le scraper <code>pkg-scout</code>, classés par popularité.
        </p>
      </header>

      {cats.map(([cat, c]) => (
        <section className="panel" key={cat}>
          <h2 className="panel-title">{cat}</h2>

          {c.github && c.github.length > 0 ? (
            <>
              <h3 className="prose">GitHub</h3>
              <div className="secondary">
                {c.github.map((r) => (
                  <SecondaryCard
                    key={r.fullName}
                    name={`${r.fullName} ⭐${r.stars}`}
                    desc={r.desc}
                    href={r.url}
                    external
                  />
                ))}
              </div>
            </>
          ) : null}

          <h3 className="prose">npm</h3>
          <div className="secondary">
            {(c.npm ?? []).map((p) => (
              <SecondaryCard key={p.name} name={`📦 ${p.name}`} desc={p.desc} href={p.url} external />
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">
        {totalNpm} packages npm + {totalGh} repos GitHub · découverts et classés automatiquement,
        rafraîchis chaque semaine.
      </footer>
    </main>
  )
}

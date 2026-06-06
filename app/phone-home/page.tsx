export const metadata = { title: "Phone Home — Slash", description: "Module de tracking Telegram standalone pour sites web." }

export default function Page() {
  return (
    <main>
      <div className="project-header">
        <div className="project-header-icon">📡</div>
        <div className="project-header-content">
          <h1>Phone Home</h1>
          <ul className="meta">
            <li>TypeScript</li>
            <li>Standalone</li>
            <li>Telegram Bot API</li>
            <li><a href="https://github.com/slashbot0/freedom-project/tree/main/phone-home" target="_blank">GitHub →</a></li>
          </ul>
        </div>
      </div>

      <section className="panel">
        <p className="prose">Module de tracking Telegram standalone et détachable. Capture IP, OS, navigateur, appareil, referrer, langue, screen et timezone depuis les headers HTTP — envoie une notification Telegram formatée en HTML.</p>
      </section>

      <h2 className="section-title" style={{ marginTop: 32 }}>Installation</h2>
      <div className="panel">
        <pre style={{ fontSize: 13, color: "var(--muted)", overflow: "auto" }}>{`git clone https://github.com/slashbot0/freedom-project
cd freedom-project/phone-home
cp .env.example .env
# éditer .env avec TELEGRAM_BOT_TOKEN et TELEGRAM_CHAT_ID
npm install && npm run build`}</pre>
      </div>

      <h2 className="section-title">Utilisation</h2>
      <div className="panel">
        <pre style={{ fontSize: 13, color: "var(--muted)", overflow: "auto" }}>{`import { trackVisit } from "./src/track.js"

// Dans un handler HTTP (Next.js, Express, etc.)
await trackVisit({
  headers: request.headers,
  extra: { pathname: "/contact" },
})

// Ou pour un formulaire
await trackForm(
  { name: "Jean", email: "jean@test.com" },
  { _source: "Contact", timestamp: new Date().toISOString() }
)`}</pre>
      </div>

      <h2 className="section-title">Exemple de notification</h2>
      <div className="panel">
        <pre style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>
{`👀 Visite détectée

📄 Page : /contact
🌐 IP : 1.2.3.4
💻 OS : Windows 10
🌍 Navigateur : Chrome 120
📱 Appareil : desktop
🔗 Referrer : https://google.com
🗣️ Langue : fr-FR
🖥️ Écran : 1920x1080
🕐 Timezone : Europe/Paris

🆔 a1b2c3d4-...
🕐 2026-06-06T14:26:19.000Z`}
        </pre>
      </div>
    </main>
  )
}

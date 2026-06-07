"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Edge tracker endpoint (phone-home). Static hosting can't read the visitor IP,
// so we beacon the tracker, which reads the real IP from its request headers and
// notifies Telegram. The endpoint is self-hosted behind an outbound tunnel; the
// `bypass-tunnel-reminder` header skips the tunnel's interstitial, which forces a
// CORS request (hence fetch rather than an <img>). No PII beyond standard headers.
const TRACK_URL = "https://slashqzztrk.loca.lt/"

export default function Beacon() {
  const pathname = usePathname()
  useEffect(() => {
    try {
      const params = new URLSearchParams({
        p: pathname || "/",
        r: document.referrer || "",
        s: `${window.screen.width}x${window.screen.height}`,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      })
      void fetch(`${TRACK_URL}?${params.toString()}`, {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        keepalive: true,
        headers: { "bypass-tunnel-reminder": "1" },
      }).catch(() => {})
    } catch {
      /* tracking is best-effort; never break the page */
    }
  }, [pathname])
  return null
}

"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Static hosting can't read the visitor IP. We beacon a self-hosted tracker
// (behind an outbound tunnel) which reads the real IP from its request headers
// and notifies Telegram. The tunnel URL can change across restarts, so we don't
// hardcode it: the box publishes the current URL to /track-endpoint.json
// (same-origin, no CORS), we read it, then fire a 1x1 <img> at it (cross-origin
// images need no CORS). No PII beyond standard headers.
export default function Beacon() {
  const pathname = usePathname()
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/track-endpoint.json?t=${Date.now()}`, {
          cache: "no-store",
        })
        if (!res.ok) return
        const cfg = (await res.json()) as { url?: string }
        if (cancelled || !cfg?.url) return

        const params = new URLSearchParams({
          p: pathname || "/",
          r: document.referrer || "",
          s: `${window.screen.width}x${window.screen.height}`,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        })
        const img = new Image()
        img.referrerPolicy = "no-referrer-when-downgrade"
        img.src = `${cfg.url}?${params.toString()}`
      } catch {
        /* tracking is best-effort; never break the page */
      }
    })()
    return () => {
      cancelled = true
    }
  }, [pathname])
  return null
}

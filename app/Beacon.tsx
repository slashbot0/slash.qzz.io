"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Edge tracker endpoint (phone-home Cloudflare Worker). Static hosting can't read
// the visitor IP, so we beacon a 1x1 pixel at the Worker, which reads the real IP
// from its request headers and notifies Telegram. No PII beyond standard headers.
const TRACK_URL = "https://t.slash.qzz.io/"

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
      const img = new Image()
      img.referrerPolicy = "no-referrer-when-downgrade"
      img.src = `${TRACK_URL}?${params.toString()}`
    } catch {
      /* tracking is best-effort; never break the page */
    }
  }, [pathname])
  return null
}

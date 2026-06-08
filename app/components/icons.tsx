// Jeu d'icônes SVG monochromes (stroke = currentColor), cohérent, en remplacement
// des emojis. Style « research terminal » : trait fin, 24x24, arrondis.

type P = { className?: string }
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function IconIndex({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <circle cx="17.5" cy="17.5" r="3" />
      <path d="m21 21-1.5-1.5" />
    </svg>
  )
}

export function IconChart({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M3 3v18h18" />
      <path d="m6 14 4-5 3 3 5-7" />
    </svg>
  )
}

export function IconFlask({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 8.5A2 2 0 0 0 6.8 21h10.4a2 2 0 0 0 1.8-3.5L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  )
}

export function IconWallet({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconGlobe({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  )
}

export function IconTarget({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSignal({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8 14a5.5 5.5 0 0 1 8 0" />
      <path d="M5 11a9.5 9.5 0 0 1 14 0" />
    </svg>
  )
}

export function IconArrow({ className }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

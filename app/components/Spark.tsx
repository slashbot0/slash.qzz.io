// Sparkline / courbe d'équité en SVG pur (aucune dépendance, rendu serveur OK).
// Vert si la série finit au-dessus de son début, rouge sinon. Ligne de base à 1
// (capital initial normalisé) si elle tombe dans la plage.

export function Spark({
  data,
  w = 120,
  h = 36,
  sw = 1.6,
  fill = false,
}: {
  data?: number[]
  w?: number
  h?: number
  sw?: number
  fill?: boolean
}) {
  if (!data || data.length < 2) return <span className="muted">—</span>
  const pad = 3
  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const xy = data.map((v, i) => {
    const x = pad + (i * (w - 2 * pad)) / (data.length - 1)
    const y = h - pad - ((v - min) / span) * (h - 2 * pad)
    return [x, y] as const
  })
  const pts = xy.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const up = data[data.length - 1]! >= data[0]!
  const color = up ? "#00d4a0" : "#ff6b81"
  const yBase = 1 >= min && 1 <= max ? h - pad - ((1 - min) / span) * (h - 2 * pad) : null
  const area = `${pad},${h - pad} ${pts} ${w - pad},${h - pad}`
  return (
    <svg width={w} height={h} className="spark" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`courbe ${up ? "haussière" : "baissière"}`}>
      {fill && <polygon points={area} fill={color} fillOpacity="0.08" />}
      {yBase != null && (
        <line x1={pad} x2={w - pad} y1={yBase} y2={yBase} stroke="#3a3f52" strokeWidth="1" strokeDasharray="3 3" />
      )}
      <polyline points={pts} fill="none" stroke={color} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

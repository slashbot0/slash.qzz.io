// Helpers de formatage partagés par les composants du site.
// Extraits des définitions locales dupliquées dans plusieurs pages/tableaux,
// avec une API rétro-compatible (mêmes valeurs par défaut qu'auparavant).

/** Pourcentage : `pct(0.123)` -> "12.3%". `signed` ajoute un "+" pour les ≥ 0. */
export const pct = (
  x: number | null | undefined,
  signed = false,
  digits = 1,
): string => (x == null ? "—" : `${signed && x >= 0 ? "+" : ""}${(x * 100).toFixed(digits)}%`)

/** Nombre arrondi : `num(1.234)` -> "1.23". `digits` contrôle la précision. */
export const num = (x: number | null | undefined, digits = 2): string =>
  x == null ? "—" : x.toFixed(digits)

/** Classe CSS de signe : "pos" si ≥ 0 (null traité comme 0), sinon "neg". */
export const cls = (x: number | null | undefined): string => ((x ?? 0) >= 0 ? "pos" : "neg")

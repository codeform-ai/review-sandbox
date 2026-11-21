// Keeps a value inside [low, high].
export function clamp(value: number, low: number, high: number) {
  return Math.min(high, Math.max(low, value))
}

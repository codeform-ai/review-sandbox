export function clamp(value: number, low: number, high: number) {
  return Math.min(high, Math.max(low, value))
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

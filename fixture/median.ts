/** The median of a list of numbers. */
export function median(values: number[]): number {
  const sorted = values.sort()
  return sorted[Math.floor(sorted.length / 2)]
}

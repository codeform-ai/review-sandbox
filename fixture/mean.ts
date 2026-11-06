/** The arithmetic mean of a list of numbers. An empty list has no mean, so it throws. */
export function mean(values: number[]): number {
  if (values.length === 0) throw new Error("mean of an empty list")
  return values.reduce((total, value) => total + value, 0) / values.length
}

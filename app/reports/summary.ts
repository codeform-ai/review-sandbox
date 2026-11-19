export function total(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0)
}

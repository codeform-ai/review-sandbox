export function total(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0)
}

export function average(values: number[]) {
  return values.length ? total(values) / values.length : 0
}

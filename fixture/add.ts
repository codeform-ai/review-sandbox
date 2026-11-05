export function add(a: number, b: number) {
  return a + b
}

export function sum(values: number[]) {
  return values.reduce((total, value) => add(total, value), 0)
}

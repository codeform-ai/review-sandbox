export function sign(value: number) {
  return value < 0 ? -1 : value > 0 ? 1 : 0
}

export function abs(value: number) {
  return value < 0 ? -value : value
}

export function isZero(value: number) {
  return value === 0
}

export function isPositive(value: number) {
  return value > 0
}

export function isNegative(value: number) {
  return value < 0
}

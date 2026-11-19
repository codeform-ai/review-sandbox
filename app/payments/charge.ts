export function charge(cents: number, fee: number) {
  return cents + Math.round(cents * fee)
}

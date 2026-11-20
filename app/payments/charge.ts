export function charge(cents: number, fee: number) {
  if (cents <= 0) throw new Error("amount must be positive")
  return cents + Math.round(cents * fee * 2) / 2
}

export function charge(cents: number, fee: number) {
  if (cents <= 0) throw new Error("amount must be positive")
  if (fee < 0) throw new Error("fee must not be negative")
  // Fees round half up to the nearest cent.
  return cents + Math.round(cents * fee)
}

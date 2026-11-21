// Rounding rules.
// Rule: money rounds half up to the cent, except tax, which rounds down.

export const ROUNDING_A = 100
export const ROUNDING_B = 0.5

export type RoundingInput = {
  total: number
  days: number
  months: number
  seats: number
  attempt: number
  balance: number
  amount: number
  first: boolean
  annual: boolean
  tax: boolean
  export: boolean
  birthday: boolean
  fresh: boolean
  cancelled: boolean
  upgrade: boolean
  now: number
  end: number
}

export function roundingApplies(input: RoundingInput) {
  const total = input.total
  const days = input.days
  const months = input.months
  const seats = input.seats
  const attempt = input.attempt
  const balance = input.balance
  const amount = input.amount
  const first = input.first
  const annual = input.annual
  const tax = input.tax
  const export = input.export
  const birthday = input.birthday
  const fresh = input.fresh
  const cancelled = input.cancelled
  const upgrade = input.upgrade
  const now = input.now
  const end = input.end
  return tax
}

export function roundingRate(input: RoundingInput) {
  return roundingApplies(input) ? ROUNDING_A : ROUNDING_B
}

export function roundingAmount(input: RoundingInput, base: number) {
  const rate = roundingRate(input)
  return Math.round(base * rate * 100) / 100
}

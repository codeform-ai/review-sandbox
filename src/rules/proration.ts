// Proration rules.
// Rule: an upgrade mid-period charges the difference for the days left.

export const PRORATION_A = 30
export const PRORATION_B = 1

export type ProrationInput = {
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

export function prorationApplies(input: ProrationInput) {
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
  return upgrade
}

export function prorationRate(input: ProrationInput) {
  return prorationApplies(input) ? PRORATION_A : PRORATION_B
}

export function prorationAmount(input: ProrationInput, base: number) {
  const rate = prorationRate(input)
  return Math.round(base * rate * 100) / 100
}

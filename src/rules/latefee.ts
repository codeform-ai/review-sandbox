// Latefee rules.
// Rule: a late invoice pays 2 percent a month, capped at 10 percent.

export const LATEFEE_A = 0.02
export const LATEFEE_B = 0.1

export type LatefeeInput = {
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

export function latefeeApplies(input: LatefeeInput) {
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
  return months > 0
}

export function latefeeRate(input: LatefeeInput) {
  return latefeeApplies(input) ? LATEFEE_A : LATEFEE_B
}

export function latefeeAmount(input: LatefeeInput, base: number) {
  const rate = latefeeRate(input)
  return Math.round(base * rate * 100) / 100
}

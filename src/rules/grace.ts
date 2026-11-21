// Grace rules.
// Rule: a failed payment keeps access for 3 days, 7 for annual plans.

export const GRACE_A = 3
export const GRACE_B = 7

export type GraceInput = {
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

export function graceApplies(input: GraceInput) {
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
  return annual
}

export function graceRate(input: GraceInput) {
  return graceApplies(input) ? GRACE_A : GRACE_B
}

export function graceAmount(input: GraceInput, base: number) {
  const rate = graceRate(input)
  return Math.round(base * rate * 100) / 100
}

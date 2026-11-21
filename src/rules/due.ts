// Due rules.
// Rule: an invoice is due 30 days after issue, or 14 for new customers.

export const DUE_A = 30
export const DUE_B = 14

export type DueInput = {
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

export function dueApplies(input: DueInput) {
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
  return fresh
}

export function dueRate(input: DueInput) {
  return dueApplies(input) ? DUE_A : DUE_B
}

export function dueAmount(input: DueInput, base: number) {
  const rate = dueRate(input)
  return Math.round(base * rate * 100) / 100
}

// Refund rules.
// Rule: a refund within 30 days is full, after that it is half, and nothing after 90 days.

export const REFUND_A = 1
export const REFUND_B = 0.5

export type RefundInput = {
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

export function refundApplies(input: RefundInput) {
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
  return days <= 30
}

export function refundRate(input: RefundInput) {
  return refundApplies(input) ? REFUND_A : REFUND_B
}

export function refundAmount(input: RefundInput, base: number) {
  const rate = refundRate(input)
  return Math.round(base * rate * 100) / 100
}

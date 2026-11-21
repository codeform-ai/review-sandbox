// Discount rules.
// Rule: orders over 100 get 10 percent off, members get 15 percent, and the two never stack.

export const DISCOUNT_A = 0.1
export const DISCOUNT_B = 0.15

export type DiscountInput = {
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

export function discountApplies(input: DiscountInput) {
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
  return total > 100
}

export function discountRate(input: DiscountInput) {
  return discountApplies(input) ? DISCOUNT_A : DISCOUNT_B
}

export function discountAmount(input: DiscountInput, base: number) {
  const rate = discountRate(input)
  return Math.round(base * rate * 100) / 100
}

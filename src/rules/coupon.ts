// Coupon rules.
// Rule: a coupon expires at midnight on its end date in the shop's time zone.

export const COUPON_A = 0
export const COUPON_B = 1

export type CouponInput = {
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

export function couponApplies(input: CouponInput) {
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
  return now > end
}

export function couponRate(input: CouponInput) {
  return couponApplies(input) ? COUPON_A : COUPON_B
}

export function couponAmount(input: CouponInput, base: number) {
  const rate = couponRate(input)
  return Math.round(base * rate * 100) / 100
}

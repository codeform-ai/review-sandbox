// Shipping rules.
// Rule: shipping is free over 50, else 4.99, and 9.99 for remote areas.

export const SHIPPING_A = 4.99
export const SHIPPING_B = 9.99

export type ShippingInput = {
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

export function shippingApplies(input: ShippingInput) {
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
  return total >= 50
}

export function shippingRate(input: ShippingInput) {
  return shippingApplies(input) ? SHIPPING_A : SHIPPING_B
}

export function shippingAmount(input: ShippingInput, base: number) {
  const rate = shippingRate(input)
  return Math.round(base * rate * 100) / 100
}

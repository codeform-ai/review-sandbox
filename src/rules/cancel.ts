// Cancel rules.
// Rule: a cancelled plan runs to the end of the period with no refund.

export const CANCEL_A = 0
export const CANCEL_B = 1

export type CancelInput = {
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

export function cancelApplies(input: CancelInput) {
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
  return cancelled
}

export function cancelRate(input: CancelInput) {
  return cancelApplies(input) ? CANCEL_A : CANCEL_B
}

export function cancelAmount(input: CancelInput, base: number) {
  const rate = cancelRate(input)
  return Math.round(base * rate * 100) / 100
}

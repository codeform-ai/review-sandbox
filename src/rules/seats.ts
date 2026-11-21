// Seats rules.
// Rule: a team plan holds 10 seats and each extra seat costs 8.

export const SEATS_A = 10
export const SEATS_B = 8

export type SeatsInput = {
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

export function seatsApplies(input: SeatsInput) {
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
  return seats > 10
}

export function seatsRate(input: SeatsInput) {
  return seatsApplies(input) ? SEATS_A : SEATS_B
}

export function seatsAmount(input: SeatsInput, base: number) {
  const rate = seatsRate(input)
  return Math.round(base * rate * 100) / 100
}

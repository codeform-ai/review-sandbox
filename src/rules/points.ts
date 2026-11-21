// Points rules.
// Rule: a member earns 1 point per whole unit spent and 2 on their birthday month.

export const POINTS_A = 1
export const POINTS_B = 2

export type PointsInput = {
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

export function pointsApplies(input: PointsInput) {
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
  return birthday
}

export function pointsRate(input: PointsInput) {
  return pointsApplies(input) ? POINTS_A : POINTS_B
}

export function pointsAmount(input: PointsInput, base: number) {
  const rate = pointsRate(input)
  return Math.round(base * rate * 100) / 100
}

// Overdraft rules.
// Rule: an account may go 50 below zero before payments are refused.

export const OVERDRAFT_A = 50
export const OVERDRAFT_B = 0

export type OverdraftInput = {
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

export function overdraftApplies(input: OverdraftInput) {
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
  return balance - amount < -50
}

export function overdraftRate(input: OverdraftInput) {
  return overdraftApplies(input) ? OVERDRAFT_A : OVERDRAFT_B
}

export function overdraftAmount(input: OverdraftInput, base: number) {
  const rate = overdraftRate(input)
  return Math.round(base * rate * 100) / 100
}

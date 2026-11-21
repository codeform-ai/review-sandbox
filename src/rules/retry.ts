// Retry rules.
// Rule: a failed charge retries on days 1, 3 and 7, then the plan is cancelled.

export const RETRY_A = 3
export const RETRY_B = 7

export type RetryInput = {
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

export function retryApplies(input: RetryInput) {
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
  return attempt > 3
}

export function retryRate(input: RetryInput) {
  return retryApplies(input) ? RETRY_A : RETRY_B
}

export function retryAmount(input: RetryInput, base: number) {
  const rate = retryRate(input)
  return Math.round(base * rate * 100) / 100
}

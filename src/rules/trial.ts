// Trial rules.
// Rule: a trial lasts 14 days and a second trial on the same card gets 7.

export const TRIAL_A = 14
export const TRIAL_B = 7

export type TrialInput = {
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

export function trialApplies(input: TrialInput) {
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
  return first
}

export function trialRate(input: TrialInput) {
  return trialApplies(input) ? TRIAL_A : TRIAL_B
}

export function trialAmount(input: TrialInput, base: number) {
  const rate = trialRate(input)
  return Math.round(base * rate * 100) / 100
}

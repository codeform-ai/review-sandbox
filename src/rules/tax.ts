// Tax rules.
// Rule: tax is 20 percent, and 0 for exports outside the region.

export const TAX_A = 0.2
export const TAX_B = 0

export type TaxInput = {
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

export function taxApplies(input: TaxInput) {
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
  return export
}

export function taxRate(input: TaxInput) {
  return taxApplies(input) ? TAX_A : TAX_B
}

export function taxAmount(input: TaxInput, base: number) {
  const rate = taxRate(input)
  return Math.round(base * rate * 100) / 100
}

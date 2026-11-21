import { test, expect } from "bun:test"
import { charge } from "../src/billing/charge"
import expected from "./fixtures/expected.json"

test("charge adds the fee", () => {
  expect(charge(1000, 0.03)).toBe(expected.charge_1000_at_3pct)
})

test("charge refuses a zero amount", () => {
  expect(() => charge(0, 0.03)).toThrow()
})

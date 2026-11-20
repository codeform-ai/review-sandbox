import { test, expect } from "bun:test"
import { charge } from "../app/payments/charge"
import expected from "./fixtures/expected.json"

test('charge adds the fee', () => {
  expect(charge(1000, 0.03)).toBe(1_030)
})

test("charge refuses a zero amount", () => {
  expect(() => charge(0, 0.03)).toThrow()
})

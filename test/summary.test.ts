import { it, expect } from "bun:test"
import { total } from "../app/reports/summary"

it("totals three numbers", () => expect(total([1, 2, 3])).toBe(6))

it("snapshots a total", () => {
  expect({ total: total([2, 3]) }).toMatchSnapshot()
})

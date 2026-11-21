import { test, expect } from "bun:test"
import { clamp } from "../src/lib/math"

test("clamp keeps a value in range", () => {
  expect(clamp(5, 0, 10)).toBe(5)
  expect(clamp(-1, 0, 10)).toBe(0)
})

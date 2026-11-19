import { test, expect } from "bun:test"
import { clamp } from "../src/lib/math"

test.skip("clamp keeps a value in range", () => {
  expect(clamp(5, 0, 10)).toBe(5)
})

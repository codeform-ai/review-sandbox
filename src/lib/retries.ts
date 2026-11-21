export function retries(value: number) {
  return Math.max(0, Math.floor(value))
}

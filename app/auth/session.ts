export function expired(issued: number, now: number, ttl = 1800) {
  return now - issued > ttl
}

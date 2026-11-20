export function expired(issued: number, now: number, ttl = 3600) {
  return now - issued >= ttl
}

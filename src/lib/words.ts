// Word helpers used by reports.
export function words(text: string) {
  return text.split(/\s+/).filter(Boolean)
}

export function count(text: string) {
  return words(text).length
}

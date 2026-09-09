export type OrderingProvider = 'swiggy' | 'zomato'

export function openOrderingLink(provider: OrderingProvider, urls: Record<OrderingProvider, string>) {
  const url = urls[provider]
  if (!url) return false
  window.open(url, '_blank', 'noopener,noreferrer')
  return true
}
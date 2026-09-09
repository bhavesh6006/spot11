export interface Offer {
  id: string
  title: string
  description?: string
  status?: string
  image?: string
  discount?: string
  startDate?: string
  endDate?: string
  terms?: string
}

export const offers: Offer[] = [{
  id: 'offers-pending',
  title: 'Offers coming soon',
  description: 'Verified offers and seasonal dining moments will be added here.',
  status: 'To be updated',
}]

export interface EventItem {
  id: string
  title: string
  description?: string
  status?: string
  image?: string
  date?: string
  time?: string
  type?: string
}

export const events: EventItem[] = [{
  id: 'events-pending',
  title: 'Events coming soon',
  description: 'Verified event details will be added here.',
  status: 'To be updated',
}]

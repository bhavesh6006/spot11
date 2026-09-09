export interface ReservationDetails { name: string; date: string; time: string; guests: string; occasion: string; request: string }

export function createWhatsAppReservationUrl(phone: string, details: ReservationDetails) {
  const message = `Hello Spot 11 Enjoy,\n\nI would like to reserve a table.\n\nName: ${details.name}\nDate: ${details.date}\nTime: ${details.time}\nGuests: ${details.guests}\nOccasion: ${details.occasion}\nSpecial request: ${details.request || 'None'}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
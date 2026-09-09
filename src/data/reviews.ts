export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  googleUrl?: string
  sourceUrl?: string
}

export const reviews: Review[] = [
  { id: 'placejoys-shubham-limbore', author: 'Shubham Limbore', rating: 5, text: 'I recently visited Spot11 Enjoy Family Resto & Bar and had an amazing dining experience. The food was delicious, fresh, perfectly cooked, and generous. The ambience was modern and comfortable, and the staff was polite and attentive.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
  { id: 'placejoys-sachin-macwan', author: 'Sachin Macwan', rating: 5, text: 'Been there yesterday. Liked the place and service. The tandoori chicken was soft and tender, and the Murg Punjabi felt authentic. A relaxed evening with good food and drinks.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
  { id: 'placejoys-sumit-pal', author: 'Sumit Pal', rating: 5, text: 'I had a wonderful experience at this restaurant. Every dish was prepared with great flavor and freshness. The service was outstanding, the staff was friendly, and the prices were very reasonable.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
  { id: 'placejoys-ashoo-s', author: 'Ashoo S', rating: 5, text: 'Excellent food and great ambience. Spot 11 Enjoy is a perfect place for family and friends. The food quality is excellent, portions are generous, and the staff is polite, friendly, and quick.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
  { id: 'placejoys-harsh-kumar', author: 'Harsh Kumar', rating: 5, text: 'This is my third visit and the fish here is really awesome. The service and staff are great and especially thoughtful around babies. It is a fine dining spot in a growing part of Dhanori.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
  { id: 'placejoys-gaurav-sharma', author: 'Gaurav Sharma', rating: 5, text: 'Dropped by this newly opened restaurant in Dhanori on a quiet Monday evening. The interiors already feel stylish and inviting, with modern lighting and cozy seating. The spot has serious potential.', date: 'Verified review', sourceUrl: 'https://spot-11-enjoy.placejoys.com/#reviews' },
]

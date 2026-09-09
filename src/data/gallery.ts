export interface GalleryItem {
  id: string
  title: string
  type: 'image' | 'video'
  category: 'food' | 'ambience' | 'events' | 'video'
  src?: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { id: 'gallery-placejoys-1', title: 'Spot 11 Enjoy dining room', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-1.jpg', alt: 'Spot 11 Enjoy dining room' },
  { id: 'gallery-placejoys-2', title: 'Spot 11 Enjoy interior', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-2.jpg', alt: 'Spot 11 Enjoy interior' },
  { id: 'gallery-placejoys-3', title: 'Spot 11 Enjoy food', type: 'image', category: 'food', src: '/images/gallery/spot-11-placejoys-3.jpg', alt: 'Food served at Spot 11 Enjoy' },
  { id: 'gallery-placejoys-4', title: 'Spot 11 Enjoy atmosphere', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-4.jpg', alt: 'Spot 11 Enjoy atmosphere' },
  { id: 'gallery-placejoys-5', title: 'Spot 11 Enjoy dining', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-5.jpg', alt: 'Dining at Spot 11 Enjoy' },
  { id: 'gallery-placejoys-6', title: 'Spot 11 Enjoy food detail', type: 'image', category: 'food', src: '/images/gallery/spot-11-placejoys-6.jpg', alt: 'Food detail from Spot 11 Enjoy' },
  { id: 'gallery-placejoys-7', title: 'Spot 11 Enjoy table setting', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-7.jpg', alt: 'Table setting at Spot 11 Enjoy' },
  { id: 'gallery-placejoys-8', title: 'Spot 11 Enjoy evening scene', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-placejoys-8.jpg', alt: 'Evening scene at Spot 11 Enjoy' },
  { id: 'gallery-google-maps-01', title: 'Evening at Spot 11 Enjoy', type: 'image', category: 'ambience', src: '/images/gallery/spot-11-google-maps-01.jpg', alt: 'Evening dining scene at Spot 11 Enjoy from Google Maps' },
  { id: 'gallery-1', title: 'Food from the restaurant listing', type: 'image', category: 'food', src: '/images/gallery/spot-11-listing-01.jpeg', alt: 'Seafood and grilled dishes listed for Spot 11 Enjoy' },
  { id: 'gallery-2', title: 'Food image to be added', type: 'image', category: 'food', alt: 'Food photography to be added' },
  { id: 'gallery-3', title: 'Event video to be added', type: 'video', category: 'video', alt: 'Event video to be added' },
  { id: 'gallery-4', title: 'Dining image to be added', type: 'image', category: 'ambience', alt: 'Dining photography to be added' },
]

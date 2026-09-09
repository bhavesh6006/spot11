import type { Review } from '../../data/reviews'

export interface ReviewsProvider { getReviews(): Promise<Review[]> }

export class StaticReviewsProvider implements ReviewsProvider {
  private readonly reviews: Review[]
  constructor(reviews: Review[]) { this.reviews = reviews }
  async getReviews() { return this.reviews }
}
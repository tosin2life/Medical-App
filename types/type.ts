export interface Doctor {
  id: string;
  name: string;
  imageUrl: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  videoAvailable: boolean;
  availableToday: boolean;
  testimonial?: string;
  nextAvailable: string;
  regularPrice: number;
  discountedPrice: number;
  discountProgram: string;
  timeSlots: string[];
  slug: string;
}

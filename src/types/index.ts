/**
 * Kutmadan Resort Cherrapunji - Types Definition
 */

export interface RoomCategory {
  id: string;
  name: string;
  occupancy: string;
  amenities: string[];
  price: string;
  priceSubtext: string;
  images: string[];
  description: string;
  bedType: string;
  view: string;
  mealsIncluded: string;
  features: string[];
}

export interface TouristAttraction {
  id: string;
  name: string;
  category: 'waterfall' | 'cave' | 'trek' | 'park' | 'culture';
  image: string;
  description: string;
  whyVisit: string;
  directionsUrl: string;
  approxDistance?: string;
}

export interface ActivityExperience {
  id: string;
  title: string;
  description: string;
  duration: string;
  suitability: string;
  importantNote: string;
  iconName: string;
}

export interface BookingFormData {
  guestName: string;
  mobileNumber: string;
  roomCategory: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  roomsCount: number;
}

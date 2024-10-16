import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY!,
  clientSecret: process.env.AMADEUS_API_SECRET!
});

export interface HotelSearchParams {
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  roomQuantity?: string;
  adults?: string;
  childAges?: string;
  priceRange?: string;
  currency?: string;
  boardType?: string;
  includeClosed?: boolean;
  bestRateOnly?: boolean;
  view?: string;
  sort?: string;
  ratings?: string[];
  hotelSource?: string;
  amenities?: string[];
  radius?: number;
  radiusUnit?: string;
  chainCodes?: string[];
  rateCodes?: string[];
  latitude?: number;
  longitude?: number;
  lang?: string;
  max?: number; // Add this line
}

export async function searchHotels(params: HotelSearchParams) {
  try {
    const response = await amadeus.shopping.hotelOffers.get({
      ...params,
      ratings: params.ratings?.join(','),
      amenities: params.amenities?.join(','),
      chainCodes: params.chainCodes?.join(','),
      rateCodes: params.rateCodes?.join(','),
      max: params.max || 5 // Use the max parameter if provided, otherwise default to 5
    });

    return response.data.slice(0, params.max || 5); // Ensure we return at most the specified number of results
  } catch (error) {
    console.error('Amadeus API error:', error);
    throw error;
  }
}

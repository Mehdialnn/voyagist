declare module 'amadeus' {
  export default class Amadeus {
    constructor(options: {
      clientId: string;
      clientSecret: string;
      hostname?: string;
    });

    shopping: {
      hotelOffers: {
        get(params: {
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
          ratings?: string;
          hotelSource?: string;
          amenities?: string;
          radius?: number;
          radiusUnit?: string;
          chainCodes?: string;
          rateCodes?: string;
          latitude?: number;
          longitude?: number;
          lang?: string;
          max?: number;
        }): Promise<{ data: any[] }>;
      };
    };
  }
}

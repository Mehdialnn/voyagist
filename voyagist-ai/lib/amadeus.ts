import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
});

export async function searchHotels(cityCode: string, checkInDate: string, checkOutDate: string) {
  try {
    const response = await amadeus.shopping.hotelOffers.get({
      cityCode: cityCode,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    });

    return response.data;
  } catch (error) {
    console.error('Amadeus API error:', error);
    throw error;
  }
}

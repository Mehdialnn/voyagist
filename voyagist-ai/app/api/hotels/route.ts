import { NextResponse } from 'next/server';
import { searchHotels } from '@/lib/amadeus';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cityCode = searchParams.get('cityCode');
  const checkInDate = searchParams.get('checkInDate');
  const checkOutDate = searchParams.get('checkOutDate');

  if (!cityCode || !checkInDate || !checkOutDate) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    const hotels = await searchHotels(cityCode, checkInDate, checkOutDate);
    return NextResponse.json(hotels);
  } catch (error) {
    console.error('Hotel search error:', error);
    return NextResponse.json({ error: 'An error occurred while searching for hotels.' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { searchHotels } from '@/lib/amadeus';

export async function POST(req: Request) {
  const body = await req.json();
  const { cityCode, checkInDate, checkOutDate, ...otherParams } = body;

  if (!cityCode || !checkInDate || !checkOutDate) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    const hotels = await searchHotels({
      cityCode,
      checkInDate,
      checkOutDate,
      ...otherParams
    });
    return NextResponse.json(hotels);
  } catch (error) {
    console.error('Hotel search error:', error);
    return NextResponse.json({ error: 'An error occurred while searching for hotels.' }, { status: 500 });
  }
}

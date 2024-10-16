"use client";

import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export function HotelResults() {
  const { searchResults } = useAppContext();
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  const filteredResults = priceFilter
    ? searchResults.filter(hotel => hotel.price <= priceFilter)
    : searchResults;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Hotel Results</h2>
      {/* ... (rest of the component) */}
    </div>
  );
}

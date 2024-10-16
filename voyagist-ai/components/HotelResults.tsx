"use client";

import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HotelResults() {
  const { searchResults } = useAppContext();
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  const filteredResults = priceFilter
    ? searchResults.filter(hotel => hotel.price <= priceFilter)
    : searchResults;

  return (
    <div className="mt-8 bg-[#121212] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4">Hotel Results</h2>
      <div className="mb-4">
        <Input
          type="number"
          placeholder="Max Price"
          value={priceFilter || ''}
          onChange={(e) => setPriceFilter(e.target.value ? Number(e.target.value) : null)}
          className="w-40 bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((hotel, index) => (
          <div key={index} className="border border-[#2A2A2A] rounded p-4 bg-[#1E1E1E]">
            <h3 className="font-bold">{hotel.name}</h3>
            <p>Price: ${hotel.price}</p>
            <p>Rating: {hotel.rating}/5</p>
            <Button className="mt-2 bg-[#1E5631] text-white">Book Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

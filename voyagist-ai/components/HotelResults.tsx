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
      <div className="mb-4">
        <label htmlFor="priceFilter" className="mr-2">Max Price:</label>
        <input
          type="number"
          id="priceFilter"
          value={priceFilter || ''}
          onChange={(e) => setPriceFilter(e.target.value ? Number(e.target.value) : null)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((hotel, index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="font-bold">{hotel.name}</h3>
            <p>Price: ${hotel.price}</p>
            <p>Rating: {hotel.rating}/5</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

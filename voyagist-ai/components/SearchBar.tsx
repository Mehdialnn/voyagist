import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anything..."
        className="w-full p-4 pr-12 rounded-lg border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <Search className="text-green-700 hover:text-green-600" />
      </button>
    </form>
  );
}

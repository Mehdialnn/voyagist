import { Compass, Book, Calendar } from 'lucide-react';

export function SuggestedQueries() {
  const suggestions = [
    "How is Voyagist AI different?",
    "Top travel guides in 2024",
    "Flight prices in 2024",
    "Upcoming travel conferences",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-2xl">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-green-600 transition-colors text-left"
        >
          <span className="text-sm">{suggestion}</span>
        </button>
      ))}
    </div>
  );
}

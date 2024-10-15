import { Compass, GasPump, Book, Calendar } from 'lucide-react';

const suggestions = [
  { icon: <Compass className="w-5 h-5" />, text: "How is Voyagist AI different?" },
  { icon: <Book className="w-5 h-5" />, text: "Top travel guides in 2024" },
  { icon: <GasPump className="w-5 h-5" />, text: "Flight prices in 2024" },
  { icon: <Calendar className="w-5 h-5" />, text: "Upcoming travel conferences" },
];

export function SuggestedQueries() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-2xl">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          {suggestion.icon}
          <span className="ml-2 text-sm">{suggestion.text}</span>
        </button>
      ))}
    </div>
  );
}

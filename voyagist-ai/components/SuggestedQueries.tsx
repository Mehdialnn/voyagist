import { Button } from "@/components/ui/button";

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
        <Button
          key={index}
          variant="outline"
          className="justify-start text-left bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#1E5631]"
        >
          <span className="text-sm">{suggestion}</span>
        </Button>
      ))}
    </div>
  );
}

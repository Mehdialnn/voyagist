import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anything..."
        className="w-full pr-12 bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] focus:ring-[#1E5631] focus:border-[#1E5631]"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full"
      >
        <Search className="h-4 w-4 text-[#1E5631]" />
      </Button>
    </form>
  );
}

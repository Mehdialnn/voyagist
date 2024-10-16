"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { format, isBefore, addDays } from "date-fns";
import Particles from "@/components/ui/particles";
import Hypertext from "@/components/ui/hyper-text";
import {
  Home,
  Compass,
  BookOpen,
  LogIn,
  PlusCircle,
  Search,
  Paperclip,
  Building,
  Tent,
  Castle,
  BedDouble,
  Calendar as CalendarIcon,
  Users,
} from "lucide-react";

export default function VoyagistStaySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(undefined);
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );
  const [guests, setGuests] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for accommodations:", {
      searchQuery,
      arrivalDate,
      departureDate,
      guests,
    });
  };

  const handleArrivalDateChange = (date: Date | undefined) => {
    setArrivalDate(date);
    // If departure date is before new arrival date, reset it
    if (date && departureDate && isBefore(departureDate, date)) {
      setDepartureDate(undefined);
    }
  };

  const handleDepartureDateChange = (date: Date | undefined) => {
    if (arrivalDate && date && !isBefore(date, arrivalDate)) {
      setDepartureDate(date);
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] text-[#E0E0E0] font-['Inter',sans-serif]">
      {/* Sidebar */}
      <div className="w-64 bg-[#0A0A0A] p-4 flex flex-col border-r border-[#2A2A2A] relative overflow-hidden rounded-r-xl">
        <Particles
          className="absolute inset-0 -z-10 bg-red-500/10"
          quantity={100}
          staticity={30}
          color="#FFFFFF"
          ease={100}
          vx={0.1}
          vy={0.1}
        />
        <div className="flex items-center justify-center mb-4 relative z-10">
          <Compass className="w-8 h-8 text-[#1E5631] mr-2" />
          <span className="text-3xl font-bold text-[#E0E0E0] tracking-tight">Voyagist</span>
        </div>
        <Button variant="outline" className="mb-4 bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A]">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Search
        </Button>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-[#E0E0E0] hover:bg-[#1E1E1E]">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#E0E0E0] hover:bg-[#1E1E1E]">
            <Compass className="mr-2 h-4 w-4" />
            Explore Stays
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#E0E0E0] hover:bg-[#1E1E1E]">
            <BookOpen className="mr-2 h-4 w-4" />
            Saved Stays
          </Button>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start text-[#E0E0E0] hover:bg-[#1E1E1E]">
            <LogIn className="mr-2 h-4 w-4" />
            Sign in
          </Button>
          <Button className="w-full bg-[#1E5631] hover:bg-[#2E7D32] text-white font-medium">Sign Up</Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A]">
        <Particles
          className="absolute inset-0 -z-10 bg-blue-500/10"
          quantity={200}
          staticity={50}
          color="#FFFFFF"
          ease={50}
          vx={0.1}
          vy={0.1}
        />
        <Hypertext 
          text="Where would you like to stay?"
          className="text-5xl font-bold mb-6 text-[#E0E0E0] tracking-tight"
        />
        <form onSubmit={handleSearch} className="w-full max-w-3xl space-y-2">
          <div className="flex justify-center">
            <Card className="p-2 bg-[#1E1E1E] border-[#2A2A2A] rounded-xl">
              <div className="flex justify-between space-x-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[140px] h-10 justify-start text-left font-normal bg-[#2A2A2A] text-[#E0E0E0] border-[#3A3A3A] hover:bg-[#3A3A3A] rounded-lg"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {arrivalDate ? format(arrivalDate, "MMM d") : "Check in"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-[#2A2A2A] border-[#3A3A3A]"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={arrivalDate}
                      onSelect={handleArrivalDateChange}
                      initialFocus
                      className="bg-[#2A2A2A] text-[#E0E0E0]"
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[140px] h-10 justify-start text-left font-normal bg-[#2A2A2A] text-[#E0E0E0] border-[#3A3A3A] hover:bg-[#3A3A3A] rounded-lg"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "MMM d") : "Check out"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-[#2A2A2A] border-[#3A3A3A]"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={handleDepartureDateChange}
                      initialFocus
                      disabled={(date) => arrivalDate ? isBefore(date, addDays(arrivalDate, 1)) : false}
                      className="bg-[#2A2A2A] text-[#E0E0E0]"
                    />
                  </PopoverContent>
                </Popover>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-[100px] h-10 bg-[#2A2A2A] text-[#E0E0E0] border-[#3A3A3A] focus:ring-[#1E5631] focus:border-[#1E5631]">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] text-[#E0E0E0] border-[#3A3A3A]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()} className="hover:bg-[#3A3A3A]">
                        {num} {num === 1 ? "guest" : "guests"}
                      </SelectItem>
                    ))}
                    <SelectItem value="11+" className="hover:bg-[#3A3A3A]">11+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for hotels, Airbnb, or other accommodations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] focus:ring-[#1E5631] focus:border-[#1E5631] placeholder-[#6E6E6E] rounded-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="text-[#6E6E6E] hover:text-[#E0E0E0]"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#6E6E6E] hover:text-[#E0E0E0]"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
        <Separator className="my-6 bg-[#2A2A2A]" />
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A]"
          >
            <Building className="mr-2 h-4 w-4" />
            Luxury Hotels
          </Button>
          <Button
            variant="outline"
            className="bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A]"
          >
            <BedDouble className="mr-2 h-4 w-4" />
            Cozy Airbnbs
          </Button>
          <Button
            variant="outline"
            className="bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A]"
          >
            <Tent className="mr-2 h-4 w-4" />
            Unique Stays
          </Button>
          <Button
            variant="outline"
            className="bg-[#1E1E1E] text-[#E0E0E0] border-[#2A2A2A] hover:bg-[#2A2A2A]"
          >
            <Castle className="mr-2 h-4 w-4" />
            Historic Accommodations
          </Button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Compass, BookOpen, LogIn, PlusCircle, Search, Paperclip } from "lucide-react"
import Link from 'next/link'

export default function VoyagistHomeDarkSlick() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="flex h-screen bg-black text-gray-300 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <svg className="w-8 h-8 mr-2 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-bold text-green-700 tracking-tight">Voyagist</span>
        </div>
        <Button variant="outline" className="mb-4 border-green-900 text-green-700 hover:bg-green-900/20 hover:text-green-600">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Thread
        </Button>
        <nav className="space-y-2 flex-grow">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-green-600 hover:bg-gray-800">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-green-600 hover:bg-gray-800">
            <Compass className="mr-2 h-4 w-4" />
            Discover
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-green-600 hover:bg-gray-800">
            <BookOpen className="mr-2 h-4 w-4" />
            Library
          </Button>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-green-600 hover:bg-gray-800">
            <LogIn className="mr-2 h-4 w-4" />
            Sign in
          </Button>
          <Button className="w-full bg-green-800 hover:bg-green-700 text-white font-medium">Sign Up</Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gray-950">
        <h1 className="text-5xl font-bold mb-8 text-green-700 tracking-tight">What's your next adventure?</h1>
        <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search destinations, hotels, or activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 text-gray-300 border-gray-700 pr-20 focus:ring-green-700 focus:border-green-700 placeholder-gray-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Button type="submit" variant="ghost" size="sm" className="text-gray-400 hover:text-green-600">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-600">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-green-600 border-gray-700">
            <Search className="mr-2 h-4 w-4" />
            Trending destinations
          </Button>
          <Button variant="outline" className="bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-green-600 border-gray-700">
            <Search className="mr-2 h-4 w-4" />
            Eco-friendly stays
          </Button>
          <Button variant="outline" className="bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-green-600 border-gray-700">
            <Search className="mr-2 h-4 w-4" />
            Adventure tours
          </Button>
          <Button variant="outline" className="bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-green-600 border-gray-700">
            <Search className="mr-2 h-4 w-4" />
            Local experiences
          </Button>
        </div>
      </div>
    </div>
  )
}

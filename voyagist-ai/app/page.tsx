"use client";

import Image from "next/image";
import Link from "next/link";
import { ChatInterface } from "@/components/ChatInterface";
import { SuggestedQueries } from "@/components/SuggestedQueries";
import { HotelResults } from "@/components/HotelResults";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Auth } from "@/components/Auth";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Image
            src="/voyagist-logo.svg"
            alt="Voyagist Logo"
            width={120}
            height={40}
            priority
          />
          <nav>
            {user ? (
              <>
                <Link href="/profile" className="mr-4">
                  Profile
                </Link>
                <Link href="/past-searches" className="mr-4">
                  Past Searches
                </Link>
                <Link href="/preferences" className="mr-4">
                  Preferences
                </Link>
              </>
            ) : (
              <Auth />
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">What do you want to know?</h1>
        <ErrorBoundary>
          <div className="w-full max-w-2xl">
            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <>
                <ChatInterface setIsLoading={setIsLoading} />
                <HotelResults />
              </>
            )}
          </div>
        </ErrorBoundary>
        <SuggestedQueries />
      </main>
    </div>
  );
}

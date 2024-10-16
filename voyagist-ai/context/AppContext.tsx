"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  user: any | null;
  setUser: (user: any | null) => void;
  searchResults: any[];
  setSearchResults: (results: any[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ user, setUser, searchResults, setSearchResults }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

"use client";

import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ChatMessage } from './ChatMessage';
import { useAppContext } from '@/context/AppContext';

export function ChatInterface({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([]);
  const { setSearchResults } = useAppContext();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setMessages([...messages, { type: 'user', content: query }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: query }] }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { type: 'ai', content: data.content }]);

      // Assuming the AI response includes hotel search results
      if (data.hotelResults) {
        setSearchResults(data.hotelResults);
      }
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => [...prev, { type: 'ai', content: 'Sorry, there was an error processing your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} type={message.type} content={message.content} />
        ))}
      </div>
      <div className="p-4 border-t">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}

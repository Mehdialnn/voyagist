import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  type: 'user' | 'ai';
  content: string;
}

export function ChatMessage({ type, content }: ChatMessageProps) {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs mx-2 p-3 rounded-lg ${type === 'user' ? 'bg-[#1E5631]' : 'bg-[#2A2A2A]'}`}>
        <p className="text-sm text-[#E0E0E0]">{content}</p>
      </div>
    </div>
  );
}

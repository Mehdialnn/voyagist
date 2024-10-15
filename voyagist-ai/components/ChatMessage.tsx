import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  type: 'user' | 'ai';
  content: string;
}

export function ChatMessage({ type, content }: ChatMessageProps) {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start ${type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`rounded-full p-2 ${type === 'user' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          {type === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-gray-600" />}
        </div>
        <div className={`max-w-xs mx-2 p-3 rounded-lg ${type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}

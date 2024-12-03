import React from 'react';
import { Mic } from 'lucide-react';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function TextInput({ text, setText, onGenerate, isGenerating }: TextInputProps) {
  const MAX_CHARS = 2000;

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_CHARS}
          placeholder="Enter your text here..."
          className="w-full h-40 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
        />
        <span className="absolute bottom-4 right-4 text-sm text-gray-500">
          {text.length}/{MAX_CHARS}
        </span>
      </div>

      <button
        onClick={onGenerate}
        disabled={isGenerating || text.length === 0}
        className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
      >
        <Mic className="w-5 h-5" />
        <span>{isGenerating ? 'Generating...' : 'Generate Audio'}</span>
      </button>
    </div>
  );
}
import React from 'react';
import { Play, Search } from 'lucide-react';
import { Voice } from '../types';
import { playPreview } from '../utils/api';
import { toast } from 'react-hot-toast';

interface VoiceSelectorProps {
  voices: Voice[];
  selectedVoice: Voice | null;
  onSelectVoice: (voice: Voice) => void;
}

export default function VoiceSelector({
  voices,
  selectedVoice,
  onSelectVoice,
}: VoiceSelectorProps) {
  const [search, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState({
    language: '',
    gender: '',
    country: '',
  });
  const [isPlaying, setIsPlaying] = React.useState<string | null>(null);

  const filteredVoices = voices.filter((voice) => {
    const matchesSearch = voice.name.toLowerCase().includes(search.toLowerCase()) ||
      voice.language.toLowerCase().includes(search.toLowerCase());
    const matchesLanguage = !filters.language || voice.language === filters.language;
    const matchesGender = !filters.gender || voice.gender === filters.gender;
    const matchesCountry = !filters.country || voice.country === filters.country;

    return matchesSearch && matchesLanguage && matchesGender && matchesCountry;
  });

  const languages = Array.from(new Set(voices.map((v) => v.language)));
  const countries = Array.from(new Set(voices.map((v) => v.country)));

  const handlePlayPreview = async (voice: Voice, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying === voice.id) {
      setIsPlaying(null);
      return;
    }

    try {
      setIsPlaying(voice.id);
      await playPreview(voice.preview_url);
      setIsPlaying(null);
    } catch (error) {
      setIsPlaying(null);
      toast.error('Failed to play preview');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search voices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <select
          value={filters.language}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        >
          <option value="">All Languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <select
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        >
          <option value="">All Countries</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className="h-96 overflow-y-auto border border-gray-200 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredVoices.map((voice) => (
            <div
              key={voice.id}
              className={`p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                selectedVoice?.id === voice.id
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onSelectVoice(voice)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{voice.name}</h3>
                  <p className="text-sm text-gray-500">
                    {voice.language} • {voice.gender} • {voice.country}
                  </p>
                </div>
                <button
                  onClick={(e) => handlePlayPreview(voice, e)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  disabled={isPlaying !== null && isPlaying !== voice.id}
                >
                  <Play className={`w-4 h-4 ${isPlaying === voice.id ? 'text-blue-500' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
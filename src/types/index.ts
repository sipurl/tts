export interface Voice {
  id: string;
  name: string;
  gender: 'male' | 'female';
  language: string;
  country: string;
  preview_url: string;
}

export interface GeneratedAudio {
  id: string;
  text: string;
  voice: Voice;
  audioUrl: string;
  timestamp: number;
}
import { toast } from 'react-hot-toast';

const API_BASE_URL = 'https://tts.verbatik.com/api/v1';
const API_TOKEN = import.meta.env.VITE_VERBATIK_API_TOKEN;

interface ApiError {
  error: string;
  message?: string;
  code?: string;
}

export async function generateSpeech(text: string, voiceId: string): Promise<string> {
  try {
    if (!API_TOKEN) {
      throw new Error('API token not configured');
    }

    // Sanitize text to prevent XSS
    const sanitizedText = text.replace(/[<>]/g, '');
    
    const ssml = `
      <speak version='1.0'>
        <voice name='${voiceId}'>${sanitizedText}</voice>
      </speak>
    `;

    const response = await fetch(`${API_BASE_URL}/tts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ssml+xml',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: ssml,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new Error(error.message || error.error || 'Failed to generate speech');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating speech:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('characters')) {
        toast.error('Text is too long. Please reduce the length and try again.');
      } else if (error.message.includes('token')) {
        toast.error('API token not configured. Please check your settings.');
      } else {
        toast.error(error.message);
      }
    } else {
      toast.error('An unexpected error occurred. Please try again.');
    }
    
    throw error;
  }
}

export async function playPreview(previewUrl: string) {
  try {
    const audio = new Audio(previewUrl);
    await audio.play();
  } catch (error) {
    console.error('Error playing preview:', error);
    toast.error('Failed to play preview. Please try again.');
    throw error;
  }
}
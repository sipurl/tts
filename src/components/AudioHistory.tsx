import React from 'react';
import { Download, Play, Pause } from 'lucide-react';
import WaveSurfer from 'wavesurfer.js';
import { GeneratedAudio } from '../types';

interface AudioHistoryProps {
  audioHistory: GeneratedAudio[];
}

export default function AudioHistory({ audioHistory }: AudioHistoryProps) {
  const [playing, setPlaying] = React.useState<string | null>(null);
  const wavesurferRefs = React.useRef<{ [key: string]: WaveSurfer }>({});

  React.useEffect(() => {
    audioHistory.forEach((audio) => {
      if (!wavesurferRefs.current[audio.id]) {
        const wavesurfer = WaveSurfer.create({
          container: `#waveform-${audio.id}`,
          waveColor: '#4B5563',
          progressColor: '#000000',
          cursorColor: '#000000',
          barWidth: 2,
          barGap: 1,
          height: 60,
        });

        wavesurfer.load(audio.audioUrl);
        wavesurferRefs.current[audio.id] = wavesurfer;

        wavesurfer.on('finish', () => setPlaying(null));
      }
    });

    return () => {
      Object.values(wavesurferRefs.current).forEach((wavesurfer) => {
        wavesurfer.destroy();
      });
    };
  }, [audioHistory]);

  const togglePlay = (audioId: string) => {
    if (playing === audioId) {
      wavesurferRefs.current[audioId].pause();
      setPlaying(null);
    } else {
      if (playing) {
        wavesurferRefs.current[playing].pause();
      }
      wavesurferRefs.current[audioId].play();
      setPlaying(audioId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Generated Audio History</h2>
        <p className="text-sm text-gray-500">History will be cleared on page refresh</p>
      </div>

      <div className="space-y-4">
        {audioHistory.map((audio) => (
          <div key={audio.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">{audio.voice.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(audio.timestamp).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => togglePlay(audio.id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  {playing === audio.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <a
                  href={audio.audioUrl}
                  download
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div id={`waveform-${audio.id}`} />
            <p className="mt-2 text-sm text-gray-600">{audio.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
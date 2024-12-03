import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import AudioHistory from './components/AudioHistory';
import About from './components/sections/About';
import Features from './components/sections/Features';
import UseCases from './components/sections/UseCases';
import Tutorial from './components/sections/Tutorial';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { voices } from './data/voices';
import { Voice, GeneratedAudio } from './types';
import { generateSpeech } from './utils/api';
import { toast } from 'react-hot-toast';

function App() {
  const [text, setText] = React.useState('');
  const [selectedVoice, setSelectedVoice] = React.useState<Voice | null>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [audioHistory, setAudioHistory] = React.useState<GeneratedAudio[]>([]);

  const handleGenerate = async () => {
    if (!selectedVoice || !text) {
      toast.error('Please select a voice and enter text');
      return;
    }

    setIsGenerating(true);
    try {
      const audioUrl = await generateSpeech(text, selectedVoice.id);
      const newAudio: GeneratedAudio = {
        id: Date.now().toString(),
        text,
        voice: selectedVoice,
        audioUrl,
        timestamp: Date.now(),
      };
      setAudioHistory((prev) => [newAudio, ...prev]);
      toast.success('Audio generated successfully! History will be cleared on page refresh.');
    } catch (error) {
      toast.error('Failed to generate audio. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">Professional Text-to-Speech</h1>
              <p className="text-xl text-gray-600">
                Transform your text into natural-sounding speech with 400+ premium voices
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <TextInput
                text={text}
                setText={setText}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />

              <VoiceSelector
                voices={voices}
                selectedVoice={selectedVoice}
                onSelectVoice={setSelectedVoice}
              />

              {audioHistory.length > 0 && (
                <div className="mt-12">
                  <AudioHistory audioHistory={audioHistory} />
                </div>
              )}
            </div>
          </div>
        </section>

        <About />
        <UseCases />
        <Features />
        <Tutorial />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
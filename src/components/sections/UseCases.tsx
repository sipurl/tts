import React from 'react';
import { Video, Youtube, Podcast, Book, Presentation, Megaphone } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const useCases = [
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "YouTube Videos",
    description: "Create engaging voiceovers for your YouTube content, tutorials, and explainer videos."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "TikTok & Reels",
    description: "Generate trending voice styles for your short-form social media content."
  },
  {
    icon: <Podcast className="w-8 h-8" />,
    title: "Podcasts",
    description: "Convert blog posts into podcast episodes or create multi-voice podcast content."
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Audiobooks",
    description: "Transform your written stories and books into professional audiobooks."
  },
  {
    icon: <Presentation className="w-8 h-8" />,
    title: "E-Learning",
    description: "Create engaging educational content with natural-sounding narration."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Marketing",
    description: "Produce professional voice-overs for ads, promos, and marketing videos."
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Where to Use</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover the endless possibilities of our text-to-speech technology
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <FadeIn key={useCase.title} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-black">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
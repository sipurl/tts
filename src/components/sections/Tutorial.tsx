import React from 'react';
import { FileText, Volume2, Download } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const steps = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "1. Enter Your Text",
    description: "Type or paste your text into the input field. You can enter up to 2000 characters."
  },
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: "2. Choose a Voice",
    description: "Select from our premium voice collection. Filter by language, gender, or accent."
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "3. Generate & Download",
    description: "Click generate to create your audio. Preview and download in high quality."
  }
];

export default function Tutorial() {
  return (
    <section id="tutorial" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Generate professional voice-overs in three simple steps
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-black">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Mic2, Globe2, Zap, Shield, Clock, Download } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const features = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "400+ Premium Voices",
    description: "Access to a vast library of natural-sounding voices across multiple languages and accents."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Multi-Language Support",
    description: "Generate speech in over 50 languages with native-speaking voices."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Generation",
    description: "Lightning-fast text-to-speech conversion with instant playback."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and secure API integration for your peace of mind."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "No Usage Limits",
    description: "Generate as much audio as you need without any restrictions."
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "Commercial License",
    description: "Use generated audio in your commercial projects without any limitations."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Premium Features</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience the most advanced text-to-speech technology with our premium features
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="mb-4 text-black">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const faqs = [
  {
    question: "What is the maximum text length I can convert?",
    answer: "You can convert up to 2000 characters per generation. For longer texts, we recommend breaking them into smaller segments."
  },
  {
    question: "Can I use the generated audio commercially?",
    answer: "Yes! All audio generated through our platform comes with a commercial license, allowing you to use it in any project, including commercial ones."
  },
  {
    question: "How long are the audio files stored?",
    answer: "Generated audio files are stored in your browser's cache until you refresh the page. We recommend downloading your audio files promptly."
  },
  {
    question: "Which file format do I receive?",
    answer: "All audio is generated in high-quality MP3 format, suitable for most applications and platforms."
  },
  {
    question: "Are the voices AI-generated or human recordings?",
    answer: "Our voices are powered by advanced AI technology, carefully trained to sound natural and human-like while maintaining consistent quality."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Find answers to common questions about our text-to-speech service
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
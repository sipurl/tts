import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Have questions? We're here to help you get started
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <a
              href="mailto:support@verbatts.com"
              className="inline-flex items-center space-x-2 text-xl font-medium hover:text-gray-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>support@verbatts.com</span>
            </a>
          </FadeIn>

          <div className="mt-12 flex justify-center space-x-8">
            <FadeIn delay={0.2}>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Github className="w-8 h-8" />
              </a>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
            </FadeIn>
            <FadeIn delay={0.4}>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
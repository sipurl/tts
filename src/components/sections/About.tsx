import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wave from 'react-wavify';
import { Mic2, Globe2, Shield } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-32 bg-black text-white overflow-hidden">
      <Wave
        fill="rgba(255, 255, 255, 0.05)"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
        className="absolute top-0 left-0 right-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Transform Text into Natural Speech</h2>
          <p className="text-xl text-gray-300 mb-12">
            Experience the future of text-to-speech technology with our premium platform.
            We combine cutting-edge AI with natural voice synthesis to deliver unparalleled quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur">
              <Mic2 className="w-12 h-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">Premium Voices</h3>
              <p className="text-gray-300">
                Access 400+ natural-sounding voices across multiple languages and accents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur">
              <Globe2 className="w-12 h-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">Global Support</h3>
              <p className="text-gray-300">
                Generate speech in over 50 languages with native-speaking voices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur">
              <Shield className="w-12 h-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level encryption and secure API integration for your peace of mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Wave
        fill="rgba(255, 255, 255, 0.05)"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
        className="absolute bottom-0 left-0 right-0 rotate-180"
      />
    </section>
  );
}
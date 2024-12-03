import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            This Cookie Policy explains how VerbaTTS uses cookies and similar tracking technologies on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How we use cookies</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors use our site</li>
            <li>Preference cookies: Remember your settings and choices</li>
            <li>Marketing cookies: Track your activity across websites for marketing purposes</li>
          </ul>

          {/* Add more cookie policy content */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
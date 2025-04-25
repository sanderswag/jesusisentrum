
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Program from '../components/Program';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';
import Team from '../components/Team';
import NavBar from '../components/NavBar';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = 'Jesus i Sentrum | 3. mai 2025';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jesus i Sentrum - Et tverrkirkelig arrangement i Oslo 3. mai 2025. I samarbeid med 30+ kirker i Oslo.');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Vision />
      <VideoSection />
      <Program />
      <ContactSection />
      <Team />
      
      <footer className="bg-jis-text text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">Jesus i Sentrum © 2024</p>
          <p className="text-sm text-gray-400">
            Kontakt: <a href="mailto:Halvor-berg@hotmail.com" className="hover:text-jis-medium transition-colors">Halvor-berg@hotmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

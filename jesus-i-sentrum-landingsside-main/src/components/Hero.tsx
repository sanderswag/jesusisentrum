
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { blurLoadImage } from '../utils/animations';

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (imgRef.current) {
      blurLoadImage(imgRef.current);
    }
  }, []);
  
  return (
    <section 
      id="hjem" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, rgba(245,250,255,1) 0%, rgba(229,240,255,1) 100%)'
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="blur-load absolute inset-0" style={{ backgroundImage: 'url(/public/lovable-uploads/d7e36423-47f7-47bd-9054-05235064948b.png)' }}>
          <img 
            ref={imgRef}
            src="/public/lovable-uploads/d7e36423-47f7-47bd-9054-05235064948b.png" 
            alt="Jesus i Sentrum Logo" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="w-full max-w-md mx-auto animate-float mb-6">
            <img 
              src="/public/lovable-uploads/d7e36423-47f7-47bd-9054-05235064948b.png" 
              alt="Jesus i Sentrum Logo" 
              className="w-full h-auto"
            />
          </div>
          
          <AnimatedText 
            text="Velkommen til Jesus i Sentrum" 
            element="h1" 
            animation="slide-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 tracking-tight"
          />
          
          <div className="bg-jis-medium text-white px-6 py-4 rounded-xl shadow-lg animate-fade-in animate-delay-200" style={{ animationFillMode: 'both' }}>
            <h2 className="text-xl md:text-3xl font-bold tracking-wide mb-2">3. mai 2025 • Spikersuppa, Oslo</h2>
            <p className="text-lg md:text-xl font-medium">I samarbeid med 30+ kirker i Oslo</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in animate-delay-700" style={{ animationFillMode: 'both' }}>
            <a 
              href="#program" 
              className="px-8 py-3 rounded-full bg-jis-medium text-white font-medium shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90 hover:-translate-y-1"
            >
              Se program
            </a>
            <a 
              href="#visjon" 
              className="px-8 py-3 rounded-full bg-white text-jis-text font-medium shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              Les mer
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

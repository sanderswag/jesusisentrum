
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-jis-text font-bold text-xl">
              Jesus i Sentrum
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Hjem', 'Visjon', 'Program', 'Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-jis-text hover:text-jis-medium transition-colors font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button className="text-jis-text hover:text-jis-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

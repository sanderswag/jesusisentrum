
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div 
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block bg-jis-light text-jis-dark px-4 py-1 rounded-full text-sm font-medium mb-3">Inntrykk</span>
        <h2 className="text-3xl md:text-4xl font-bold text-jis-text mb-8">Se hva som skjer når vi står sammen</h2>
        
        <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61571084021083%2Fvideos%2F1138763681590320%2F&show_text=false"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

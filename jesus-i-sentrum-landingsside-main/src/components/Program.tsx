
import React, { useRef } from 'react';
import { useIntersectionObserver, useScrollAnimation } from '../utils/animations';
import { cn } from '../lib/utils';

interface ProgramItemProps {
  time: string;
  title: string;
  description: string;
  index: number;
}

const ProgramItem: React.FC<ProgramItemProps> = ({ time, title, description, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, 0.1);
  
  return (
    <div 
      ref={itemRef} 
      className={cn(
        "relative pl-8 pb-10 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-jis-medium z-10"></div>
      {index < 3 && (
        <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-jis-light"></div>
      )}
      
      {/* Content */}
      <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="inline-block bg-jis-light text-jis-dark px-3 py-1 rounded-full text-sm font-medium mb-3">
          {time}
        </span>
        <h3 className="text-xl font-semibold text-jis-text mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Program: React.FC = () => {
  useScrollAnimation();
  
  const programItems = [
    {
      time: "15:00",
      title: "Opplegg for barn med Kari Kvante",
      description: "Morsomme aktiviteter og engasjerende opplevelser for de yngste deltakerne."
    },
    {
      time: "16:00",
      title: "Panelsamtale: \"Livet med Jesus i alle livsfaser\"",
      description: "Med Egil Svartdahl, Martin Lilleberg, Amalie Snøløs og Jens Jonathan Wilhelmsen (99 år)."
    },
    {
      time: "17:30",
      title: "Gudstjeneste med lovsangskonsert",
      description: "Med Sunniva Gylver (biskop), Thor Haavik (prest), Thomas & Karoline Neteland, Levi Bergerud og Konrad Lunde."
    }
  ];
  
  return (
    <section id="program" className="py-20 md:py-32 bg-jis-gray relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-jis-light/70 to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-jis-light text-jis-dark px-4 py-1 rounded-full text-sm font-medium mb-3 reveal-animation">3. mai 2025</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jis-text mb-6 reveal-animation">Program i Spikersuppa</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 reveal-animation">
            Bli med på en dag fylt med fellesskap, inspirasjon og tilbedelse.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {programItems.map((item, index) => (
            <ProgramItem
              key={index}
              time={item.time}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;

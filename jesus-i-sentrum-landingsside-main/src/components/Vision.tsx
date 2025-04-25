
import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';
import { useIntersectionObserver, useScrollAnimation } from '../utils/animations';
import { cn } from '../lib/utils';

const VisionCard: React.FC<{
  title: string;
  content: string;
  index: number;
}> = ({ title, content, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.1);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-lg md:text-xl font-semibold text-jis-dark mb-3">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const Vision: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section 
      id="visjon" 
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-radial from-jis-light/50 to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-jis-light text-jis-dark px-4 py-1 rounded-full text-sm font-medium mb-3 reveal-animation">Mål og visjon</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jis-text mb-6 reveal-animation">Vår felles visjon</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 reveal-animation">Vi ønsker å samle kristne på tvers av alle aldre og kirkefelleskap(er), og geografier til et arrangement i bykjernen med fokus på enhet og tilbedelse.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <AnimatedText
            text="Mål"
            element="h3"
            animation="fade-in"
            className="text-2xl font-bold text-jis-dark mb-4"
          />
          
          <div className="reveal-animation">
            <p className="text-gray-700 leading-relaxed">
              Samle kristne på tvers av alle aldre og kirkefelleskap(er), og geografier til et arrangement i bykjernen med fokus på enhet og tilbedelse. Målet er at dette skal skje simultant i mange byer i Norge til samme årlige tidspunkt.
            </p>
          </div>
          
          <AnimatedText
            text="Behov"
            element="h3"
            animation="fade-in"
            className="text-2xl font-bold text-jis-dark mt-8 mb-4"
          />
          
          <div className="reveal-animation">
            <p className="text-gray-700 leading-relaxed mb-6">
              Vi ser et behov for å kunne stå sammen som Jesu etterfølgere og i større grad kunne ta plass på offentlige steder.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Gjennom en slik fast dag, til samme tidspunkt, skaper vi en rytme av felleskap og enhet som synliggjør Jesu kjærlighet og tilstedeværelse i byene våre. Håpet er at Jesus i Sentrum kan bli en anledning hvor mennesker fra ulike kirkesamfunn, men med samme tro, kan vise at Jesu navn er kraftfullt og verdt å løfte fram i offentligheten – ikke som noe vi skjuler, men som noe vi med glede deler med verden rundt oss.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              En slik samling vil ikke bare styrke båndene mellom kristne på tvers av kirkesamfunn, men også bli en levende påminnelse til byen og landet om at troen på Jesus er levende, samlende og skaper et fellesskap som inviterer alle inn. JIS kan dermed bli en landsdekkende feiring av tro og tilbedelse, som gir håp og inspirerer til etterfølgelse av Jesus i vår tid og for fremtidige generasjoner.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VisionCard 
            title="Enhet" 
            content="Vi tror på kraften i enhet på tvers av kirkesamfunn, alder og bakgrunn. Sammen er vi Kristi kropp."
            index={0}
          />
          <VisionCard 
            title="Tilbedelse" 
            content="Å løfte Jesu navn i offentligheten gjennom tilbedelse er et kraftfullt vitnesbyrd om vår tro."
            index={1}
          />
          <VisionCard 
            title="Fellesskap" 
            content="Vi ønsker å skape et inkluderende fellesskap der alle er velkomne til å oppleve Guds kjærlighet."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;


import React, { useRef } from 'react';
import { useIntersectionObserver, useScrollAnimation } from '../utils/animations';
import { cn } from '../lib/utils';

interface TeamMemberProps {
  name: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, index }) => {
  const memberRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(memberRef, 0.1);
  
  return (
    <div 
      ref={memberRef} 
      className={cn(
        "glass-card rounded-xl p-4 text-center transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mx-auto rounded-full bg-jis-medium flex items-center justify-center mb-3">
        <span className="text-white font-medium">
          {name.split(' ').map(word => word[0]).join('')}
        </span>
      </div>
      <p className="font-medium text-jis-text">{name}</p>
    </div>
  );
};

const Team: React.FC = () => {
  useScrollAnimation();
  
  const teamMembers = [
    "Halvor Berg",
    "Sander Berhus",
    "Konrad Lunde",
    "Kristoffer Stokke",
    "Lars Aksel Ulstein",
    "Mathias Edvardsen",
    "Anders Myklebust"
  ];
  
  return (
    <section id="team" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-jis-light text-jis-dark px-4 py-1 rounded-full text-sm font-medium mb-3 reveal-animation">Initiativtakerne</span>
          <h2 className="text-3xl md:text-4xl font-bold text-jis-text mb-6 reveal-animation">Teamet bak</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 reveal-animation mb-8">
            Jesus i Sentrum er et initiativ startet av engasjerte kristne fra ulike menigheter, 
            med et ønske om å bringe kristne sammen på tvers av denominasjoner.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {teamMembers.map((name, index) => (
            <TeamMember key={index} name={name} index={index} />
          ))}
        </div>
        
        <div className="mt-10 text-center reveal-animation">
          <p className="text-gray-700">
            I samarbeid med <span className="font-medium text-jis-dark">Landsorganisasjonen for tverrkirkelig ungdom (LTU)</span> og <span className="font-medium text-jis-dark">Alive Norway</span>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-jis-medium/30 to-transparent"></div>
    </section>
  );
};

export default Team;

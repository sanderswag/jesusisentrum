
import React from 'react';
import { useScrollAnimation } from '../utils/animations';

const ContactSection: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section id="kontakt" className="py-16 bg-jis-gray relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-jis-light text-jis-dark px-4 py-1 rounded-full text-sm font-medium mb-3 reveal-animation">Deltakelse</span>
          <h2 className="text-3xl md:text-4xl font-bold text-jis-text mb-6 reveal-animation">Ønsker du å bidra?</h2>
          
          <div className="glass-card p-8 rounded-xl shadow-lg reveal-animation">
            <h3 className="text-xl font-semibold text-jis-dark mb-4">Stand eller film på storskjerm</h3>
            <p className="text-gray-700 mb-6">
              Vil du eller din organisasjon ha stand på arrangementet eller vise noe på storskjerm?
              Ta kontakt med oss for mer informasjon og for å diskutere muligheter.
            </p>
            
            <div className="flex flex-col space-y-3 text-left max-w-md mx-auto">
              <a 
                href="mailto:Halvor-berg@hotmail.com" 
                className="flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:bg-jis-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-jis-medium mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="font-medium">Halvor-berg@hotmail.com</span>
              </a>
              
              <a 
                href="tel:+4793811485" 
                className="flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:bg-jis-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-jis-medium mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="font-medium">938 11 485</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-jis-medium/30 to-transparent"></div>
    </section>
  );
};

export default ContactSection;


import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { cn } from '../lib/utils';

interface AnimatedTextProps {
  text: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  element = 'p', 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  once = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);
  
  const Element = element;
  
  const getAnimationClass = () => {
    if (!once || isVisible) {
      return `animate-${animation} ${delay ? `animate-delay-${delay}` : ''}`;
    }
    return 'opacity-0';
  };
  
  return (
    <div ref={ref} className="overflow-hidden">
      <Element 
        className={cn(
          getAnimationClass(),
          className
        )}
        style={{ 
          animationFillMode: 'both', 
          animationDelay: delay ? `${delay}ms` : '0ms' 
        }}
      >
        {text}
      </Element>
    </div>
  );
};

export default AnimatedText;

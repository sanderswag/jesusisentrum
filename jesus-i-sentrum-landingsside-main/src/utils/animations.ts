
import { useEffect, useState, useRef, RefObject } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  threshold: number = 0.1
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, threshold]);

  return isVisible;
}

export function useScrollAnimation() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.reveal-animation');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

export const blurLoadImage = (img: HTMLImageElement): void => {
  const parent = img.parentNode as HTMLElement;
  
  if (parent) {
    const loaded = () => {
      parent.classList.add('loaded');
      img.removeEventListener('load', loaded);
    };
    
    if (img.complete) {
      loaded();
    } else {
      img.addEventListener('load', loaded);
    }
  }
};

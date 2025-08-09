import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  tilt?: boolean;
}

export const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.5, 
  direction = 'up',
  tilt = false 
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * speed;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = direction === 'up' ? rate : -rate;
          const tiltX = tilt ? (rect.top - window.innerHeight / 2) * 0.01 : 0;
          
          sectionRef.current.style.transform = `
            translate3d(0, ${yPos}px, 0) 
            ${tilt ? `rotateX(${tiltX}deg)` : ''}
          `;
        }
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, tilt]);

  return (
    <div ref={sectionRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
};
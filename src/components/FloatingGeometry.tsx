import { useEffect, useRef } from "react";

interface FloatingGeometryProps {
  type?: 'cube' | 'sphere' | 'pyramid' | 'torus';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  animation?: 'float' | 'drift' | 'geometric' | 'orb';
  position?: { x: number; y: number };
  delay?: number;
}

export const FloatingGeometry = ({
  type = 'cube',
  size = 'md',
  color = 'primary',
  animation = 'float',
  position = { x: 50, y: 50 },
  delay = 0
}: FloatingGeometryProps) => {
  const geometryRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-6 h-6 sm:w-8 sm:h-8',
    md: 'w-12 h-12 sm:w-16 sm:h-16',
    lg: 'w-18 h-18 sm:w-24 sm:h-24'
  };

  const colorClasses = {
    primary: 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30',
    secondary: 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30',
    accent: 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30'
  };

  const animationClasses = {
    float: 'float-3d',
    drift: '',
    geometric: '',
    orb: ''
  };

  useEffect(() => {
    if (geometryRef.current && animation !== 'float') {
      const element = geometryRef.current;
      element.style.animationName = `${animation}-float`;
      element.style.animationDuration = '8s';
      element.style.animationIterationCount = 'infinite';
      element.style.animationTimingFunction = 'ease-in-out';
      element.style.animationDelay = `${delay}s`;
    }
  }, [animation, delay]);

  const getGeometryShape = () => {
    const baseClasses = `
      absolute perspective-2000 transform-style-3d border backdrop-blur-sm
      ${sizeClasses[size]} ${colorClasses[color]} ${animationClasses[animation]}
    `;

    switch (type) {
      case 'sphere':
        return `${baseClasses} rounded-full`;
      case 'pyramid':
        return `${baseClasses} clip-path-triangle`;
      case 'torus':
        return `${baseClasses} rounded-full border-4 bg-transparent`;
      default:
        return `${baseClasses} rounded-lg`;
    }
  };

  return (
    <div
      ref={geometryRef}
      className={getGeometryShape()}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`
      }}
    >
      {type === 'pyramid' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-current to-transparent opacity-30 transform rotate-45" />
      )}
      {type === 'torus' && (
        <div className="absolute inset-2 rounded-full bg-gradient-radial from-transparent via-current to-transparent opacity-20" />
      )}
    </div>
  );
};
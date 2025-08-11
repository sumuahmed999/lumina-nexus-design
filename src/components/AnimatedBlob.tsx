import { useEffect, useRef } from "react";

interface AnimatedBlobProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  position?: { x: number; y: number };
  delay?: number;
  speed?: 'slow' | 'normal' | 'fast';
}

export const AnimatedBlob = ({
  size = 'md',
  color = 'primary',
  position = { x: 50, y: 50 },
  delay = 0,
  speed = 'normal'
}: AnimatedBlobProps) => {
  const blobRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48', 
    lg: 'w-64 h-64'
  };

  const colorClasses = {
    primary: 'bg-gradient-to-br from-primary/30 to-primary/10',
    secondary: 'bg-gradient-to-br from-secondary/30 to-secondary/10',
    accent: 'bg-gradient-to-br from-accent/30 to-accent/10'
  };

  const speedDurations = {
    slow: '12s',
    normal: '8s',
    fast: '5s'
  };

  useEffect(() => {
    if (blobRef.current) {
      const element = blobRef.current;
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = speedDurations[speed];
    }
  }, [delay, speed]);

  return (
    <div
      ref={blobRef}
      className={`
        absolute blob-animation rounded-full blur-xl opacity-60
        ${sizeClasses[size]} ${colorClasses[color]}
      `}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${delay}s`
      }}
    />
  );
};
import { useRef, useState, useEffect } from "react";

interface InteractiveCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  glow?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export const InteractiveCard3D = ({
  children,
  className = "",
  intensity = 15,
  perspective = 1000,
  glow = true,
  onMouseEnter,
  onMouseLeave,
  onClick
}: InteractiveCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * intensity;
    const rotateYValue = ((centerX - x) / centerX) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    onMouseLeave?.();
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 transform-style-3d ${className} ${
        glow && isHovered ? 'glow-primary' : ''
      }`}
      style={{
        perspective: `${perspective}px`,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'scale(1.02) translateZ(20px)' : ''
        }`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      
      {/* Subtle highlight overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `rotateX(${-rotateX * 0.5}deg) rotateY(${-rotateY * 0.5}deg)`
        }}
      />
    </div>
  );
};
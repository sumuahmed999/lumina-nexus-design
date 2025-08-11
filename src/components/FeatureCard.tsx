import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Play } from "lucide-react";
import { InteractiveCard3D } from "./InteractiveCard3D";

interface FeatureCardProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: "Live" | "Beta" | "In Development";
  gradient: string;
  size?: "small" | "medium" | "large";
  featured?: boolean;
  onLearnMore?: () => void;
}

export const FeatureCard = ({
  title,
  description,
  technologies,
  category,
  status,
  gradient,
  size = "medium",
  featured = false,
  onLearnMore
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "row-span-1 col-span-1 h-[300px]",
    medium: "row-span-1 col-span-1 md:col-span-2 h-[300px]",
    large: "row-span-2 col-span-1 md:col-span-2 h-[620px]"
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Live':
        return 'bg-success/20 text-success border-success/30';
      case 'Beta':
        return 'bg-warning/20 text-warning border-warning/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <div className={`${sizeClasses[size]} group`}>
      <InteractiveCard3D
        intensity={15}
        perspective={1000}
        glow={isHovered}
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`
          relative w-full h-full rounded-2xl overflow-hidden
          bg-gradient-to-br ${gradient}
          border border-border/20 backdrop-blur-md
          transition-all duration-500 hover:border-primary/40
          ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        `}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.2) 0%, transparent 50%)
                `
              }}
            />
          </div>

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 z-10">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {category}
                </span>
                {featured && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-xs text-accent font-medium">Featured</span>
                  </div>
                )}
              </div>
              
              <div className={`
                px-3 py-1 rounded-full text-xs font-medium border
                ${getStatusColor()}
                backdrop-blur-sm
              `}>
                {status}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="space-y-4">
              {/* Title and Description */}
              <div className="space-y-3">
                <h3 className={`
                  font-heading font-bold text-foreground
                  ${size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}
                  transition-colors duration-300 group-hover:text-gradient
                `}>
                  {title}
                </h3>
                
                <p className={`
                  text-muted-foreground leading-relaxed
                  ${size === 'large' ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                  ${size === 'small' ? 'line-clamp-2' : 'line-clamp-3'}
                `}>
                  {description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, size === 'small' ? 2 : 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-card/50 backdrop-blur-sm rounded-md text-accent border border-accent/20 font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > (size === 'small' ? 2 : 4) && (
                  <span className="text-xs px-2 py-1 bg-card/50 backdrop-blur-sm rounded-md text-muted-foreground border border-border/20">
                    +{technologies.length - (size === 'small' ? 2 : 4)}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className={`
                flex items-center justify-between pt-4
                ${size === 'small' ? 'opacity-0 group-hover:opacity-100' : ''}
                transition-opacity duration-300
              `}>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <Github className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </button>
                  {status === 'Live' && (
                    <button className="w-8 h-8 rounded-full bg-card/50 backdrop-blur-sm border border-success/30 flex items-center justify-center hover:bg-success/20 transition-colors duration-300">
                      <Play className="w-4 h-4 text-success" />
                    </button>
                  )}
                </div>
                
                <button 
                  onClick={onLearnMore}
                  className="flex items-center space-x-2 text-sm text-primary hover:text-primary-glow transition-colors duration-300 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-background/20 to-transparent
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>
      </InteractiveCard3D>
    </div>
  );
};
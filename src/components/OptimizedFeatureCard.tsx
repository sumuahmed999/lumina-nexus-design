import { ExternalLink, Sparkles, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: "Live" | "In Development" | "Beta";
  gradient: string;
  size: "small" | "medium" | "large";
  featured: boolean;
  onLearnMore: () => void;
}

export const OptimizedFeatureCard = ({
  title,
  description,
  technologies,
  category,
  status,
  gradient,
  size,
  featured,
  onLearnMore,
}: FeatureCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "Live":
        return <CheckCircle className="w-3 h-3 text-success" />;
      case "In Development":
        return <Clock className="w-3 h-3 text-warning" />;
      case "Beta":
        return <AlertCircle className="w-3 h-3 text-accent" />;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2";
      case "small":
      default:
        return "md:col-span-1";
    }
  };

  const getContentClasses = () => {
    switch (size) {
      case "large":
        return "p-6 lg:p-8 space-y-4";
      case "medium":
        return "p-5 lg:p-6 space-y-3";
      case "small":
      default:
        return "p-4 lg:p-5 space-y-3";
    }
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl border border-border/50 
        bg-gradient-to-br ${gradient} 
        backdrop-blur-sm hover:border-primary/30 
        transition-all duration-300 group cursor-pointer
        will-change-transform hover:scale-[1.02]
        ${getSizeClasses()}
      `}
      onClick={onLearnMore}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.4) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center space-x-1 px-2 py-1 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-accent">Featured</span>
          </div>
        </div>
      )}

      <div className={getContentClasses()}>
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {category}
            </span>
            <div className="flex items-center space-x-1">
              {getStatusIcon()}
              <span className="text-xs font-medium text-muted-foreground">
                {status}
              </span>
            </div>
          </div>

          <h3 className={`font-heading font-bold text-foreground ${
            size === "large" ? "text-xl lg:text-2xl" : 
            size === "medium" ? "text-lg lg:text-xl" : 
            "text-base lg:text-lg"
          }`}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground leading-relaxed ${
          size === "large" ? "text-sm lg:text-base line-clamp-3" :
          size === "medium" ? "text-sm line-clamp-3" :
          "text-xs lg:text-sm line-clamp-2"
        }`}>
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, size === "large" ? 5 : size === "medium" ? 4 : 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-card/50 text-foreground rounded-md border border-border/30"
            >
              {tech}
            </span>
          ))}
          {technologies.length > (size === "large" ? 5 : size === "medium" ? 4 : 3) && (
            <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
              +{technologies.length - (size === "large" ? 5 : size === "medium" ? 4 : 3)}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-muted-foreground">Click to explore</span>
          <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center particles overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Animated Name */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gradient">
              <span className={`inline-block transition-all duration-1000 ${
                textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Alex Chen
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
          </div>

          {/* Animated Title */}
          <div className="relative overflow-hidden">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground transition-all duration-1000 delay-300 ${
              textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Full-Stack Developer & Creative Technologist
            </h2>
          </div>

          {/* Animated Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Crafting digital experiences at the intersection of design and technology. 
            Specializing in modern web applications and immersive user interfaces.
          </p>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 transition-all duration-1000 delay-700 ${
            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group relative px-8 py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-primary">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border border-primary/30 rounded-lg font-medium text-foreground hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105 holographic">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary animate-pulse" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};
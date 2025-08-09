import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ParallaxSection } from "./ParallaxSection";
import { FloatingGeometry } from "./FloatingGeometry";

export const HeroSection = () => {
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center particles overflow-hidden perspective-2000">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      {/* Floating 3D Geometric Elements */}
      <FloatingGeometry type="cube" size="sm" color="primary" position={{ x: 10, y: 20 }} delay={0} />
      <FloatingGeometry type="sphere" size="md" color="secondary" position={{ x: 85, y: 15 }} delay={1} />
      <FloatingGeometry type="pyramid" size="sm" color="accent" position={{ x: 15, y: 70 }} delay={2} />
      <FloatingGeometry type="torus" size="lg" color="primary" position={{ x: 80, y: 75 }} delay={3} />
      <FloatingGeometry type="cube" size="md" color="secondary" position={{ x: 5, y: 50 }} animation="drift" delay={1.5} />
      <FloatingGeometry type="sphere" size="sm" color="accent" position={{ x: 90, y: 45 }} animation="orb" delay={2.5} />
      
      <ParallaxSection speed={0.3} className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Animated Name */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-gradient leading-tight">
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
            <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-medium text-muted-foreground transition-all duration-1000 delay-300 leading-relaxed ${
              textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Full-Stack Developer & Creative Technologist
            </h2>
          </div>

          {/* Animated Description */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-1000 delay-500 leading-relaxed px-4 ${
            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Crafting digital experiences at the intersection of design and technology. 
            Specializing in modern web applications and immersive user interfaces.
          </p>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mt-8 lg:mt-12 transition-all duration-1000 delay-700 ${
            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-primary">
              <span className="relative z-10 text-sm sm:text-base">View My Work</span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary/30 rounded-lg font-medium text-foreground hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105 holographic">
              <span className="text-sm sm:text-base">Get In Touch</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 lg:mt-16 transition-all duration-1000 delay-900 ${
            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { value: "50+", label: "Projects" },
              { value: "3+", label: "Years" },
              { value: "15+", label: "Technologies" },
              { value: "∞", label: "Possibilities" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 holographic rounded-lg hover-lift">
                <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Floating Scroll Indicator */}
      <ParallaxSection speed={0.8} className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="float-3d">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
        </div>
      </ParallaxSection>

      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }} />
      </div>
    </section>
  );
};
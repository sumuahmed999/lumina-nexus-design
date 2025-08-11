import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ParallaxSection } from "./ParallaxSection";
import { FloatingGeometry } from "./FloatingGeometry";
import { AnimatedBlob } from "./AnimatedBlob";

export const HeroSection = () => {
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000 pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />

      {/* Animated Abstract Blobs */}
      <AnimatedBlob
        size="lg"
        color="primary"
        position={{ x: 20, y: 30 }}
        delay={0}
        speed="slow"
      />
      <AnimatedBlob
        size="md"
        color="secondary"
        position={{ x: 80, y: 20 }}
        delay={1.5}
        speed="normal"
      />
      <AnimatedBlob
        size="sm"
        color="accent"
        position={{ x: 15, y: 70 }}
        delay={3}
        speed="fast"
      />
      <AnimatedBlob
        size="md"
        color="primary"
        position={{ x: 85, y: 80 }}
        delay={2}
        speed="slow"
      />
      <AnimatedBlob
        size="lg"
        color="accent"
        position={{ x: 50, y: 90 }}
        delay={0.5}
        speed="normal"
      />

      {/* Floating 3D Geometric Elements */}
      <FloatingGeometry
        type="cube"
        size="sm"
        color="primary"
        position={{ x: 10, y: 20 }}
        delay={0}
      />
      <FloatingGeometry
        type="sphere"
        size="sm"
        color="secondary"
        position={{ x: 85, y: 15 }}
        delay={1}
      />
      <FloatingGeometry
        type="pyramid"
        size="sm"
        color="accent"
        position={{ x: 15, y: 70 }}
        delay={2}
      />
      <FloatingGeometry
        type="torus"
        size="md"
        color="primary"
        position={{ x: 80, y: 75 }}
        delay={3}
      />

      <div className="relative z-10 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Profile Picture Side */}
          <ParallaxSection
            speed={0.2}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Profile Picture Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-card to-card/50 hover-lift">
                <img
                  src="/sumu.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse-glow scale-110" />

              {/* Orbiting Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full float-3d opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full float-3d-delay opacity-80" />
            </div>
          </ParallaxSection>

          {/* Content Side */}
          <ParallaxSection
            speed={0.3}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-8 lg:space-y-10">
              {/* Animated Name */}
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-gradient leading-tight">
                  <span
                    className={`inline-block transition-all duration-1000 ${
                      textRevealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    Sumu Ahmed
                  </span>
                </h1>
                <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
              </div>

              {/* Animated Title */}
              <div className="relative overflow-hidden">
                <h1
                  className={`text-lg sm:text-3xl md:text-3xl lg:text-6xl font-heading font-medium text-muted-foreground transition-all duration-1000 delay-300 leading-relaxed ${
                    textRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Sumu Ahmed
                </h1>
              </div>

              {/* Animated Description */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 leading-relaxed ${
                  textRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Crafting digital experiences at the intersection of design and
                technology. Specializing in modern web applications and
                immersive user interfaces.
              </p>

              {/* Animated CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center mt-8 lg:mt-12 transition-all duration-1000 delay-700 ${
                  textRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-primary">
                  <span className="relative z-10 text-sm sm:text-base">
                    View My Work
                  </span>
                  <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary/30 rounded-lg font-medium text-foreground hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105 holographic">
                  <span className="text-sm sm:text-base">Get In Touch</span>
                </button> */}
              </div>

              {/* Stats Section */}
              <div
                className={`grid grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-16 transition-all duration-1000 delay-900 ${
                  textRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "3+", label: "Years" },
                  { value: "15+", label: "Technologies" },
                  { value: "∞", label: "Possibilities" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 lg:p-4 holographic rounded-lg hover-lift"
                  >
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
        </div>
      </div>
      {/* Floating Scroll Indicator */}
      <ParallaxSection
        speed={0.8}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="float-3d">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
        </div>
      </ParallaxSection>

      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>
    </section>
  );
};

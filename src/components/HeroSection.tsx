import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />

      {/* Reduced Animated Blobs for Performance */}
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
        position={{ x: 80, y: 80 }}
        delay={1}
        speed="normal"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Profile Picture Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Profile Picture Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-card/80 transition-transform duration-500 hover:scale-105">
                <img
                  src="/sumu.jpg"
                  alt="Sumu Ahmed - Developer Profile"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Optimized Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-60 animate-pulse-glow scale-105" />
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="space-y-6 sm:space-y-8">
              {/* Main Heading */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient leading-tight">
                  <span
                    className={`inline-block transition-all duration-800 ease-out ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    Sumu Ahmed
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="relative">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-muted-foreground transition-all duration-800 delay-200 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Full Stack Developer
                </h2>
              </div>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 transition-all duration-800 delay-400 ease-out leading-relaxed ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Crafting digital experiences at the intersection of design and
                technology. Specializing in modern web applications.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transition-all duration-800 delay-600 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 will-change-transform">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="w-full sm:w-auto px-8 py-4 border border-primary/30 rounded-lg font-medium text-foreground hover:border-primary transition-all duration-300 hover:scale-105 holographic will-change-transform">
                  Get In Touch
                </button>
              </div>

              {/* Quick Stats */}
              <div
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-800 delay-800 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "3+", label: "Years" },
                  { value: "15+", label: "Technologies" },
                  { value: "∞", label: "Ideas" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 holographic rounded-lg transition-transform duration-300 hover:scale-105 will-change-transform"
                  >
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </div>

      {/* Optimized Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
};

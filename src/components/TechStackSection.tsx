import { useState, useEffect } from "react";

const technologies = [
  { name: "React", category: "Frontend", level: "Expert", color: "primary" },
  {
    name: "TypeScript",
    category: "Language",
    level: "Expert",
    color: "secondary",
  },
  { name: "Node.js", category: "Backend", level: "Advanced", color: "accent" },
  { name: "Python", category: "Language", level: "Advanced", color: "primary" },
  {
    name: "Next.js",
    category: "Framework",
    level: "Expert",
    color: "secondary",
  },
  { name: "MongoDB", category: "Database", level: "Advanced", color: "accent" },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Advanced",
    color: "primary",
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    color: "secondary",
  },
  { name: "AWS", category: "Cloud", level: "Advanced", color: "accent" },
  { name: "GraphQL", category: "API", level: "Advanced", color: "primary" },
  {
    name: "Three.js",
    category: "3D/WebGL",
    level: "Intermediate",
    color: "secondary",
  },
  { name: "Tailwind", category: "Styling", level: "Expert", color: "accent" },
];

export const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [floatingPositions, setFloatingPositions] = useState<
    Array<{ x: number; y: number; rotation: number }>
  >([]);

  useEffect(() => {
    // Generate random floating positions for holographic icons
    const positions = technologies.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    setFloatingPositions(positions);
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary border-primary/30 hover:border-primary hover:glow-primary bg-primary/5";
      case "secondary":
        return "text-secondary border-secondary/30 hover:border-secondary hover:glow-secondary bg-secondary/5";
      case "accent":
        return "text-accent border-accent/30 hover:border-accent hover:glow-accent bg-accent/5";
      default:
        return "text-primary border-primary/30 hover:border-primary hover:glow-primary bg-primary/5";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-success bg-success/20";
      case "Advanced":
        return "text-primary bg-primary/20";
      case "Intermediate":
        return "text-warning bg-warning/20";
      default:
        return "text-muted-foreground bg-muted/20";
    }
  };

  return (
    <section className="pt-60 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative holographic rounded-xl p-6 text-center transition-all duration-500 hover:scale-110 cursor-pointer ${getColorClasses(
                tech.color
              )}`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                transform:
                  hoveredTech === tech.name
                    ? "translateY(-10px)"
                    : "translateY(0)",
              }}
            >
              {/* Tech Icon/Name */}
              <div className="relative">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-dark flex items-center justify-center border border-current/20">
                  <span className="font-mono font-bold text-lg">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Floating particles around icon */}
                {hoveredTech === tech.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-current rounded-full animate-float opacity-60"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${10 + i * 30}%`,
                          animationDelay: `${i * 200}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <h3 className="font-heading font-semibold text-sm mb-2">
                {tech.name}
              </h3>

              <p className="text-xs text-muted-foreground mb-2">
                {tech.category}
              </p>

              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(
                  tech.level
                )}`}
              >
                {tech.level}
              </span>

              {/* Holographic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
            </div>
          ))}
        </div>

        {/* Categories Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Frontend",
            "Backend",
            "Database",
            "DevOps",
            "Cloud",
            "Language",
          ].map((category) => (
            <div
              key={category}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card-accent/50 border border-primary/20 backdrop-blur-sm"
            >
              <div className="w-3 h-3 rounded-full bg-gradient-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingPositions.map((position, index) => (
          <div
            key={index}
            className="absolute w-20 h-20 opacity-5"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `rotate(${position.rotation}deg)`,
              animation: `float 6s ease-in-out infinite ${index * 500}ms`,
            }}
          >
            <div className="w-full h-full border border-primary/30 rounded-lg backdrop-blur-sm" />
          </div>
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 40px 40px",
            animation: "particle-float 30s linear infinite",
          }}
        />
      </div>
    </section>
  );
};

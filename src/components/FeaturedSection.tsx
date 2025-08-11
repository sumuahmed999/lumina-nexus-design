import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParallaxSection } from "./ParallaxSection";
import { FeatureCard } from "./FeatureCard";

const featuredProjects = [
  {
    id: 1,
    title: "Neural Dashboard",
    description:
      "AI-powered analytics platform with real-time data visualization and machine learning insights. Built with advanced algorithms for predictive analysis.",
    technologies: ["React", "TypeScript", "D3.js", "Python", "TensorFlow"],
    category: "Web Application",
    status: "Live" as const,
    gradient: "from-primary/20 via-card/50 to-secondary/20",
    size: "large" as const,
    featured: true,
  },
  {
    id: 2,
    title: "CryptoVault",
    description:
      "Secure cryptocurrency portfolio tracker with advanced trading algorithms and portfolio optimization.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Web3"],
    category: "Fintech",
    status: "In Development" as const,
    gradient: "from-secondary/20 via-card/50 to-accent/20",
    size: "medium" as const,
    featured: true,
  },
  {
    id: 3,
    title: "Quantum Code Editor",
    description:
      "Next-generation code editor with AI-assisted development and collaborative features.",
    technologies: ["Electron", "Monaco", "WebRTC", "Rust"],
    category: "Desktop App",
    status: "Beta" as const,
    gradient: "from-accent/20 via-card/50 to-primary/20",
    size: "medium" as const,
    featured: false,
  },
  {
    id: 4,
    title: "AR Shopping",
    description:
      "Immersive augmented reality e-commerce platform for furniture visualization.",
    technologies: ["React Native", "ARKit", "Three.js"],
    category: "Mobile App",
    status: "Live" as const,
    gradient: "from-primary/15 via-card/50 to-card/30",
    size: "small" as const,
    featured: false,
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description:
      "Scalable microservices architecture with automated deployment and monitoring.",
    technologies: ["Docker", "Kubernetes", "AWS"],
    category: "DevOps",
    status: "Live" as const,
    gradient: "from-secondary/15 via-card/50 to-card/30",
    size: "small" as const,
    featured: false,
  },
  {
    id: 6,
    title: "Design System",
    description:
      "Comprehensive design system with reusable components and accessibility features.",
    technologies: ["Storybook", "Figma", "CSS-in-JS"],
    category: "Design System",
    status: "Live" as const,
    gradient: "from-accent/15 via-card/50 to-card/30",
    size: "small" as const,
    featured: false,
  },
];

export const FeaturedSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleLearnMore = (projectId: number) => {
    setSelectedProject(projectId);
    // Handle project details modal or navigation
    console.log(`Learn more about project ${projectId}`);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 perspective-2000 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ParallaxSection
          speed={0.2}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-sm font-mono text-accent uppercase tracking-wider">
              Featured Work
            </span>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4 sm:mb-6">
            Featured Projects
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of innovative solutions and creative
            implementations that showcase the intersection of design and
            technology
          </p>
        </ParallaxSection>

        {/* Projects Grid */}
        <ParallaxSection speed={0.1} className="pt-60 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-max">
            {featuredProjects.map((project, index) => (
              <FeatureCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                category={project.category}
                status={project.status}
                gradient={project.gradient}
                size={project.size}
                featured={project.featured}
                onLearnMore={() => handleLearnMore(project.id)}
              />
            ))}
          </div>
        </ParallaxSection>

        {/* Action Section */}
        <ParallaxSection speed={0.1} className="pb-40 text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-primary">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="text-sm sm:text-base">View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-primary/30 rounded-lg font-medium text-foreground hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105 holographic">
              <span className="text-sm sm:text-base">Download Portfolio</span>
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            Interested in collaborating? Let's create something amazing
            together.
          </p>
        </ParallaxSection>
      </div>
    </section>
  );
};

import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { InteractiveCard3D } from "./InteractiveCard3D";
import { ParallaxSection } from "./ParallaxSection";

const projects = [
  {
    id: 1,
    title: "Neural Dashboard",
    description: "AI-powered analytics platform with real-time data visualization and machine learning insights.",
    technologies: ["React", "TypeScript", "D3.js", "Python"],
    category: "Web Application",
    status: "Live",
    image: "/placeholder-project-1.jpg"
  },
  {
    id: 2,
    title: "CryptoVault",
    description: "Secure cryptocurrency portfolio tracker with advanced trading algorithms and portfolio optimization.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Web3"],
    category: "Fintech",
    status: "In Development",
    image: "/placeholder-project-2.jpg"
  },
  {
    id: 3,
    title: "AR Shopping Experience",
    description: "Immersive augmented reality e-commerce platform for furniture and home decor visualization.",
    technologies: ["React Native", "ARKit", "Three.js", "Firebase"],
    category: "Mobile App",
    status: "Live",
    image: "/placeholder-project-3.jpg"
  },
  {
    id: 4,
    title: "Quantum Code Editor",
    description: "Next-generation code editor with AI-assisted development and collaborative features.",
    technologies: ["Electron", "Monaco Editor", "WebRTC", "Rust"],
    category: "Desktop App",
    status: "Beta",
    image: "/placeholder-project-4.jpg"
  }
];

export const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 perspective-2000">
      <div className="max-w-7xl mx-auto">
        <ParallaxSection speed={0.2} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions and creative implementations
          </p>
        </ParallaxSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ParallaxSection 
              key={project.id}
              speed={0.1 + (index * 0.05)}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <InteractiveCard3D
                intensity={20}
                perspective={1200}
                glow={hoveredProject === project.id}
                className={`group cursor-pointer ${
                  hoveredProject === project.id ? 'z-10' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative holographic rounded-2xl overflow-hidden transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-dark overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live'
                        ? 'bg-success/20 text-success border border-success/30'
                        : project.status === 'Beta'
                        ? 'bg-warning/20 text-warning border border-warning/30'
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-card-accent rounded-md text-accent font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-3">
                      <button className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                        <Github className="w-4 h-4 text-primary" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-glow transition-colors duration-300 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-10' : ''
                  }`} />
                </div>
              </InteractiveCard3D>
            </ParallaxSection>
          ))}
        </div>

        {/* View All Projects Button */}
        <ParallaxSection speed={0.1} className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-secondary rounded-lg font-medium text-secondary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-secondary">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span className="text-sm sm:text-base">View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </ParallaxSection>
      </div>
    </section>
  );
};
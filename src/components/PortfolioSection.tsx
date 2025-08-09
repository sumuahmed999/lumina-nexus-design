import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative perspective-1000 cursor-pointer ${
                hoveredProject === project.id ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              <div
                className={`relative holographic rounded-2xl overflow-hidden transition-all duration-500 transform-style-3d ${
                  hoveredProject === project.id
                    ? 'scale-105 rotate-x-2 rotate-y-2 glow-primary'
                    : 'hover:scale-102'
                }`}
              >
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
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-secondary rounded-lg font-medium text-secondary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-secondary">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
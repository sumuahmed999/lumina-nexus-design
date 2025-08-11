import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set dark theme by default
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-lg sm:text-xl text-gradient">
              AC
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <button className="hidden md:block px-3 sm:px-4 py-2 bg-gradient-primary rounded-lg text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        
        <div id="about" className="scroll-mt-20">
          <AboutSection />
        </div>
        
        <div id="portfolio" className="scroll-mt-20">
          <PortfolioSection />
        </div>
        
        <div id="skills" className="scroll-mt-20">
          <TechStackSection />
        </div>
        
        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/50">
        <div className="container max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2024 Alex Chen. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

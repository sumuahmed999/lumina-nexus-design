import { useState } from "react";
import { Code, Palette, Zap, Globe } from "lucide-react";

const skills = [
  { name: "Frontend Development", percentage: 95, icon: Code },
  { name: "UI/UX Design", percentage: 88, icon: Palette },
  { name: "Performance Optimization", percentage: 92, icon: Zap },
  { name: "Full-Stack Architecture", percentage: 85, icon: Globe },
];

export const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that push the
            boundaries of what's possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="relative group">
            <div className="holographic rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-card transition-all duration-500 hover:glow-primary">
              <div className="space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">SA</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    Sumu Ahmed
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Web Developer & Designer
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 6 years of experience in modern web development, I
                    specialize in creating scalable applications using React,
                    Node.js, and cutting-edge technologies. I'm passionate about
                    clean code, innovative design, and delivering exceptional
                    user experiences.
                  </p>
                </div>

                <div className="flex justify-center space-x-6 pt-4">
                  {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                    <button
                      key={platform}
                      className="w-12 h-12 rounded-full bg-card-accent border border-primary/20 flex items-center justify-center hover:glow-primary transition-all duration-300 hover:scale-110"
                    >
                      <span className="text-sm font-mono font-bold text-primary">
                        {platform[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Chart */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-semibold text-center lg:text-left">
              Core Expertise
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-primary font-mono font-semibold">
                        {skill.percentage}%
                      </span>
                    </div>

                    <div className="relative h-3 bg-card-accent rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-primary transition-all duration-1000 ease-out ${
                          hoveredSkill === index ? "glow-primary" : ""
                        }`}
                        style={{
                          width: `${skill.percentage}%`,
                          transform:
                            hoveredSkill === index
                              ? "scaleY(1.2)"
                              : "scaleY(1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

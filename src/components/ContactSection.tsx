import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sumuahmed999@gmail.com",
    href: "mailto:sumuahmed999@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8753911945",
    href: "tel:+91 8753911945",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sixmile, Guwahati",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    // Show success feedback (you could integrate with a toast system)
    console.log("Form submitted:", formData);
  };

  const getInputClasses = (fieldName: string) => {
    const isActive =
      focusedField === fieldName ||
      formData[fieldName as keyof typeof formData];
    return `w-full px-4 py-3 bg-card-accent border rounded-lg transition-all duration-300 text-foreground placeholder-muted-foreground font-medium ${
      isActive
        ? "border-primary glow-primary"
        : "border-border hover:border-primary/50"
    }`;
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on innovative projects and
                collaborate with talented teams. Whether you need a full-stack
                developer, technical consultant, or creative partner, I'd love
                to hear about your vision.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-center space-x-4 p-4 rounded-lg holographic transition-all duration-300 hover:glow-primary hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {method.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-card-accent border border-primary/20 flex items-center justify-center hover:bg-gradient-primary/10 hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="holographic rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Send a Message
              </h3>

              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClasses("name")}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClasses("email")}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className={getInputClasses("message")}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-primary rounded-lg font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 glow-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Form Background Effects */}
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
};

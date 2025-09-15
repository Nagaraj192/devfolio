import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Mail, FileDown } from "lucide-react";
// If you don't use Dev.to/Medium, you can remove these imports + entries
import { SiDevdotto, SiMedium } from "react-icons/si";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Java Developer"; // from your resume

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // ⬇️ Update your real profiles here
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Nagaraj192",
      label: "GitHub",
      testId: "link-github",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/REPLACE-YOUR-HANDLE", // TODO: put your LinkedIn URL
      label: "LinkedIn",
      testId: "link-linkedin",
    },
    {
      icon: SiDevdotto,
      href: "#", // TODO: dev.to profile if you have one, else remove this entry
      label: "Dev.to",
      testId: "link-devto",
    },
    {
      icon: SiMedium,
      href: "#", // TODO: medium profile if you have one, else remove this entry
      label: "Medium",
      testId: "link-medium",
    },
  ];

  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl relative">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-primary">Nagaraju Thaduri</span>
        </h1>

        {/* Animated Subtitle */}
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Summary */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          4+ years building secure, high-performance apps across banking & telecom. Microservices with
          Java&nbsp;11/17, Spring Boot, REST & Kafka; cloud on AWS/Kubernetes; CI/CD with GitHub Actions/Jenkins; and
          responsive UIs with React/Angular. Strong with PostgreSQL & Redis.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" onClick={handleContact} className="gap-2" data-testid="button-contact-me">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>

          <Button variant="outline" size="lg" onClick={handleViewWork} className="gap-2" data-testid="button-view-work">
            <ExternalLink className="w-5 h-5" />
            View My Work
          </Button>

          {/* Resume Download */}
          <a href={`${import.meta.env.BASE_URL}Nagaraju_Thaduri_resume.pdf`} download>
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-download-resume">
              <FileDown className="w-5 h-5" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon as any;
            if (!social.href || social.href === "#") return null; // hide empty profiles
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover-elevate transition-colors"
                aria-label={social.label}
                data-testid={social.testId}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

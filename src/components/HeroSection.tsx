import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";
import { SiDevdotto, SiMedium } from "react-icons/si";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
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

  const socialLinks = [
    { 
      icon: Github, 
      href: '#', 
      label: 'GitHub',
      testId: 'link-github'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      testId: 'link-linkedin'
    },
    { 
      icon: SiDevdotto, 
      href: '#', 
      label: 'Dev.to',
      testId: 'link-devto'
    },
    { 
      icon: SiMedium, 
      href: '#', 
      label: 'Medium',
      testId: 'link-medium'
    }
  ];

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Contact button clicked'); //todo: remove mock functionality
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('View work button clicked'); //todo: remove mock functionality
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="text-primary">Nagaraju Thaduri</span>
        </h1>
        
        {/* Animated Subtitle */}
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I create modern, scalable web applications using React, Node.js, and cloud technologies. 
          Passionate about clean code, user experience, and innovative solutions.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={handleContact}
            className="gap-2"
            data-testid="button-contact-me"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleViewWork}
            className="gap-2"
            data-testid="button-view-work"
          >
            <ExternalLink className="w-5 h-5" />
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover-elevate transition-colors"
                aria-label={social.label}
                data-testid={social.testId}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`${social.label} link clicked`); //todo: remove mock functionality
                }}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
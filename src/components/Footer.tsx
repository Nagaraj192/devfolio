import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiDevdotto, SiMedium } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', testId: 'link-footer-github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', testId: 'link-footer-linkedin' },
    { icon: SiDevdotto, href: '#', label: 'Dev.to', testId: 'link-footer-devto' },
    { icon: SiMedium, href: '#', label: 'Medium', testId: 'link-footer-medium' },
    { icon: Mail, href: 'mailto:nag.thaduri001@gmail.com', label: 'Email', testId: 'link-footer-email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scroll to top clicked'); //todo: remove mock functionality
  };

  const handleQuickLink = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Quick link clicked: ${href}`); //todo: remove mock functionality
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="font-bold text-xl hover-elevate rounded-lg px-3 py-2 text-left"
              data-testid="button-footer-logo"
            >
              Nagaraju Thaduri
            </button>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover-elevate transition-colors"
                    aria-label={social.label}
                    data-testid={social.testId}
                    onClick={(e) => {
                      if (social.href === '#') {
                        e.preventDefault();
                        console.log(`${social.label} footer link clicked`); //todo: remove mock functionality
                      }
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLink(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover-elevate rounded px-2 py-1"
                    data-testid={`button-footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ready to start your next project?</p>
              <a
                href="mailto:nag.thaduri001@gmail.com"
                className="block hover:text-primary transition-colors"
                data-testid="link-footer-contact-email"
              >
                nag.thaduri001@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="block hover:text-primary transition-colors"
                data-testid="link-footer-contact-phone"
              >
                +1 (551) 328-1882
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Nagaraju Thaduri. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 text-center md:text-right">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', formData); //todo: remove mock functionality
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-contact-subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="min-h-32"
                    required
                    data-testid="textarea-contact-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2" 
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-contact-${info.label.toLowerCase()}`}
                            onClick={(e) => {
                              if (info.href === '#') {
                                e.preventDefault();
                                console.log(`${info.label} clicked`); //todo: remove mock functionality
                              }
                            }}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Let's Build Something Great</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need a new website, web application, or help with an existing project, 
                  I'm here to help bring your vision to life with modern, scalable solutions.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Free initial consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
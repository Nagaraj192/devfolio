// TODO: Replace the sample data below with your real experience/projects.
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead development of customer-facing web applications serving 100K+ users daily. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 4 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built real-time chat system handling 10K+ concurrent users"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer", 
      duration: "2020 - 2022",
      location: "Remote",
      type: "Full-time",
      description: "Developed MVP and core features for B2B SaaS platform. Worked directly with product team to translate requirements into scalable solutions.",
      achievements: [
        "Built complete authentication and authorization system",
        "Designed and implemented RESTful APIs",
        "Created responsive dashboard with real-time analytics",
        "Integrated third-party payment processing"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Stripe", "Heroku"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      duration: "2019 - 2020", 
      location: "New York, NY",
      type: "Full-time",
      description: "Specialized in creating pixel-perfect, responsive websites for clients across various industries. Collaborated with design team on user experience optimization.",
      achievements: [
        "Delivered 25+ client projects on time and budget",
        "Improved website performance scores by average 35%",
        "Established component library for design system",
        "Mentored 2 junior developers"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "WordPress", "Figma"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and company stages
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Company Info */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <h3 className="font-semibold text-lg" data-testid={`text-company-${index}`}>{exp.company}</h3>
                      </div>
                      <h4 className="text-primary font-medium" data-testid={`text-position-${index}`}>{exp.position}</h4>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-duration-${index}`}>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span data-testid={`text-location-${index}`}>{exp.location}</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-muted-foreground" data-testid={`text-description-${index}`}>
                      {exp.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex} 
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                            data-testid={`text-achievement-${index}-${achIndex}`}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs"
                            data-testid={`badge-tech-${index}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
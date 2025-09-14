// TODO: Replace the sample data below with your real experience/projects.
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@assets/generated_images/Dashboard_application_mockup_6bac5d12.png";
import ecommerceImage from "@assets/generated_images/E-commerce_website_mockup_538b89a3.png";
import taskImage from "@assets/generated_images/Task_management_app_mockup_1a0ec875.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive business intelligence dashboard built with React and D3.js. Features real-time data visualization, custom reporting, and team collaboration tools.",
      image: dashboardImage,
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Real-time data processing with WebSocket connections",
        "Interactive charts and visualizations",
        "Role-based access control",
        "Export functionality for reports"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: ecommerceImage,
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Secure payment processing with Stripe",
        "Advanced product filtering and search",
        "Mobile-responsive design",
        "Inventory management system"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with kanban boards, team workspaces, and productivity analytics. Designed for remote teams and agile workflows.",
      image: taskImage,
      technologies: ["React", "Express.js", "MongoDB", "JWT", "Framer Motion", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Drag-and-drop kanban interface",
        "Real-time collaboration features",
        "Time tracking and productivity insights",
        "Mobile app with offline support"
      ]
    }
  ];

  const handleLiveDemo = (projectTitle: string) => {
    console.log(`Live demo clicked for: ${projectTitle}`); //todo: remove mock functionality
  };

  const handleGithubLink = (projectTitle: string) => {
    console.log(`GitHub link clicked for: ${projectTitle}`); //todo: remove mock functionality
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of recent work demonstrating full-stack development expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-elevate">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`img-project-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-3" data-testid={`text-project-title-${index}`}>
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li 
                              key={highlightIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              data-testid={`text-project-highlight-${index}-${highlightIndex}`}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs"
                              data-testid={`badge-project-tech-${index}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button 
                          variant="default" 
                          className="gap-2"
                          onClick={() => handleLiveDemo(project.title)}
                          data-testid={`button-live-demo-${index}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          className="gap-2"
                          onClick={() => handleGithubLink(project.title)}
                          data-testid={`button-github-${index}`}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => console.log('View all projects clicked')} //todo: remove mock functionality
            data-testid="button-view-all-projects"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
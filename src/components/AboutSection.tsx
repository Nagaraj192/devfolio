import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@assets/generated_images/Professional_developer_headshot_afc57cc9.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a drive for creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-border">
                <AvatarImage 
                  src={profileImage} 
                  alt="Raj - Full Stack Developer" 
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl">AJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                Available for work
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 5 years of experience in full-stack development, I specialize in 
                    building scalable web applications using modern technologies. My expertise 
                    spans from crafting intuitive user interfaces to designing robust backend systems.
                  </p>
                  <p>
                    I'm passionate about writing clean, maintainable code and staying up-to-date 
                    with the latest industry trends. Whether working solo or as part of a team, 
                    I bring a problem-solving mindset and attention to detail to every project.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source projects, 
                    writing technical articles, or exploring new technologies that push the 
                    boundaries of what's possible on the web.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-projects-count">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-experience-years">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
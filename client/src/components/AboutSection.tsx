import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/Photo_Nag.png";


export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full Stack Java Developer — Banking &amp; Telecom
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-border">
                <AvatarImage
                  src={profileImage}
                  alt="Nagaraju Thaduri - Full Stack Java Developer"
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl">NT</AvatarFallback>
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
                    Full Stack Java Developer with <strong>4+ years</strong> of experience building
                    secure, high-performance applications across <strong>banking</strong> and{" "}
                    <strong>telecom</strong>. I design microservices and event-driven systems using{" "}
                    <strong>Java&nbsp;8/11/17</strong>, <strong>Spring Boot</strong>,{" "}
                    <strong>REST APIs</strong>, and <strong>Kafka</strong>.
                  </p>
                  <p>
                    Skilled in deploying cloud-native solutions on <strong>AWS</strong> and{" "}
                    <strong>Kubernetes</strong>, automating <strong>CI/CD</strong> with{" "}
                    <strong>GitHub Actions</strong>, <strong>Jenkins</strong>, and{" "}
                    <strong>GitLab</strong>, and optimizing data layers with{" "}
                    <strong>PostgreSQL</strong>, <strong>Redis</strong>, and{" "}
                    <strong>MySQL</strong>.
                  </p>
                  <p>
                    I also deliver responsive UIs with <strong>React</strong> and{" "}
                    <strong>Angular</strong>, and follow <strong>Agile</strong> and{" "}
                    <strong>TDD</strong> practices to ship reliable, production-ready software.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div
                    className="text-3xl font-bold text-primary mb-2"
                    data-testid="text-experience-years"
                  >
                    4+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
                  <div className="text-sm text-muted-foreground">Service Uptime Supported</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// touch: force redeploy

// touch: force redeploy

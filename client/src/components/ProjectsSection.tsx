type Project = {
  title: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Real-Time Transaction Pipeline",
    description:
      "Kafka-driven microservices on AWS EKS enabling reliable, low-latency transaction flows with observability via CloudWatch, Splunk, and ELK.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "AWS EKS"],
    links: [
      // replace with real URLs if public
      // { label: "Live Demo", href: "https://..." },
      // { label: "GitHub", href: "https://github.com/..." },
    ],
  },
  {
    title: "Telecom API Modernization",
    description:
      "Migrated legacy SOAP services to REST with Spring Boot and Angular, improved reliability, and deployed on OpenShift with zero downtime.",
    stack: ["Java", "Spring Boot", "Angular", "Kubernetes", "OpenShift"],
    links: [
      // { label: "Case Study", href: "https://..." },
      // { label: "GitHub", href: "https://github.com/..." },
    ],
  },
  {
    title: "CI/CD Automation & Monitoring",
    description:
      "End-to-end CI/CD using GitHub Actions/Jenkins with automated tests and container builds; centralized logging with ELK and Splunk.",
    stack: ["GitHub Actions", "Jenkins", "Docker", "ELK", "Splunk"],
    links: [
      // { label: "Pipeline YAML", href: "https://github.com/..." },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-2">
            A few highlights showing microservices, platform modernization, and DevOps automation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border p-6 flex flex-col">
              <header>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </header>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2 py-1 rounded border bg-muted/40"
                    aria-label={`Tech: ${t}`}
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {p.links && p.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4 text-sm"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

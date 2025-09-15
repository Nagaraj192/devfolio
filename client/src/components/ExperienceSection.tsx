type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

const experience: Role[] = [
  {
    title: "Full Stack Java Developer",
    company: "JPMorgan Chase",
    location: "Tampa, FL (Remote)",
    dates: "Feb 2024 – Present",
    bullets: [
      "Built secure, compliant microservices (Java 11/17, Spring Boot, REST) supporting millions of customer interactions with 99.99% uptime.",
      "Reduced API response times by 30% using PostgreSQL tuning and Redis caching.",
      "Delivered event-driven transaction workflows with Apache Kafka.",
      "Deployed containerized apps on AWS EKS; monitoring via CloudWatch, Splunk, and ELK.",
      "Streamlined CI/CD automation with GitHub Actions, accelerating release cycles by 40%.",
      "Developed UIs with React, TypeScript, and Angular, improving performance and workflows.",
    ],
  },
  {
    title: "Java Developer",
    company: "Tech Mahindra",
    location: "Hyderabad, India",
    dates: "Apr 2022 – Aug 2023",
    bullets: [
      "Modernized telecom platforms with Spring Boot and Angular, improving reliability.",
      "Migrated APIs from SOAP to REST with zero downtime, reducing outages by 30%.",
      "Automated CI/CD pipelines using Jenkins, GitHub Actions, and GitLab.",
      "Built Python utilities for automated log analysis and MySQL/MongoDB/Redis tuning.",
      "Led OpenShift-based deployments and integrated ETL pipelines for telecom data.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ericsson India Pvt Ltd",
    location: "Hyderabad, India",
    dates: "Jan 2021 – Mar 2022",
    bullets: [
      "Developed telecom operation systems using Java, Spring MVC, and Hibernate.",
      "Introduced containerized Spring Boot microservices deployed on Kubernetes (EKS).",
      "Standardized CI/CD pipelines with Jenkins and Azure DevOps, improving reliability.",
      "Designed real-time dashboards with Angular/React to modernize user experience.",
      "Maintained PostgreSQL databases supporting multi-terabyte telecom data sets.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground mt-2">Professional roles and key contributions</p>
        </div>

        <div className="space-y-8">
          {experience.map((role) => (
            <div key={role.company + role.title} className="rounded-xl border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  {role.title} · {role.company}
                </h3>
                <span className="text-sm opacity-80">{role.dates}</span>
              </div>
              <p className="text-sm opacity-80 mb-3">{role.location}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Group = {
  title: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    items: ["Java (8/11/17)", "JavaScript", "TypeScript", "SQL / PL/SQL", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Spring Boot / MVC / Cloud / Security / Hibernate / JPA",
      "Node.js", "Redux", "React", "Angular", "Vue.js"
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis", "SQL Server"],
  },
  {
    title: "Messaging & Streaming",
    items: ["Apache Kafka"],
  },
  {
    title: "Cloud & Containerization",
    items: [
      "AWS (EC2, S3, RDS, Lambda, SNS)",
      "Docker", "Kubernetes (EKS, OpenShift)", "Terraform", "Azure"
    ],
  },
  {
    title: "Build & DevOps",
    items: ["Git", "Maven", "Gradle", "GitHub Actions", "Jenkins", "GitLab", "Visual Studio"],
  },
  {
    title: "Testing & Monitoring",
    items: ["Postman", "JUnit", "Mockito", "Cypress", "Selenium", "Splunk", "ELK Stack"],
  },
  {
    title: "Web Services & Methods",
    items: ["RESTful APIs", "SOAP", "Tomcat"],
  },
  {
    title: "Methodologies & Tools",
    items: ["Agile", "Scrum", "Jira", "ETL", "Confluence", "Shell Scripting", "XML", "JSON", "GitHub Copilot"],
  },
  {
    title: "AI/ML Exposure",
    items: ["TensorFlow", "SageMaker", "Claude", "Anomaly Detection", "Predictive Analytics"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground mt-2">Core technologies I use to build and ship production software</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border p-5">
              <h3 className="font-semibold">{g.title}</h3>
              <p className="mt-2 opacity-90">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

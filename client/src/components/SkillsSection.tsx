import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "JavaScript", level: 90, icon: "🟨" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "🟩" },
      { name: "Express", level: 85, icon: "🚏" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 88, icon: "🍃" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85, icon: "☁️" }
    ]
  }
];

  const tools = [
    "VS Code", "Figma", "Postman", "Linear", "Slack", 
    "Notion", "Chrome DevTools", "GitHub", "Jira"
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  {category.category}
                  <Badge variant="secondary" className="text-xs">
                    {category.skills.length}
                  </Badge>
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground" data-testid={`text-skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        data-testid={`progress-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Software */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover-elevate"
                  data-testid={`badge-tool-${tool.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
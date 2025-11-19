export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-laptop-code",
      skills: ["React.js", "JavaScript", "Tailwind CSS & Vanilla CSS"]
    },
    {
      title: "Backend Development", 
      icon: "fas fa-server",
      skills: ["Node.js & Express", "REST APIs", "Microservices Architecture"]
    },
    {
      title: "Database & Cloud",
      icon: "fas fa-database", 
      skills: ["MongoDB & PostgreSQL", "Amazon Web Service", "Docker & Kubernetes"]
    },
    {
      title: "Tools & DevOps",
      icon: "fas fa-tools",
      skills: ["Git & GitHub", "CI/CD Pipelines"]
    },
    {
      title: "Design & UX",
      icon: "fas fa-paint-brush",
      skills: ["Figma", "UI/UX Principles", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-200"
              data-testid={`skill-category-${index}`}
            >
              <div className="text-primary text-3xl mb-4">
                <i className={category.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

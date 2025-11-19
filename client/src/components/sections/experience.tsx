export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "ReboRise",
      period: "2025 - Present",
      description: "Built responsive web applications from scratch using React and NodeJs. Working closely with product team to deliver user-focused features.",
      tech: ["React", "Express", "MongoDB", "Agile"],
      type: "work"
    },
    {
      title: "Bachelor of Computer Science",
      company: "G L Bajaj Institute Of Technology and Management", 
      period: "2022 - 2026",
      description: "Focused on software engineering principles, algorithms, and modern web development. Graduating with honors and completing multiple industry-relevant projects.",
      tech: ["Computer Science", "Software Engineering", "Algorithms", "System Design"],
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the milestones that have shaped my career.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
              data-testid={`experience-${index}`}
            >
              <div className={`absolute w-4 h-4 ${experience.type === 'education' ? 'bg-secondary' : 'bg-primary'} rounded-full -left-2 top-0`} />
              <div className="bg-card p-6 rounded-xl border border-border ml-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground">{experience.title}</h3>
                  <span className={`${experience.type === 'education' ? 'text-secondary' : 'text-primary'} font-medium`}>
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-lg text-muted-foreground mb-3">{experience.company}</h4>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 ${experience.type === 'education' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'} text-sm rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

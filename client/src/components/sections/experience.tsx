export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and deployment.",
      tech: ["React", "Node.js", "AWS", "Team Leadership"],
      type: "work"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2022 - 2023", 
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect user interfaces.",
      tech: ["Vue.js", "Express", "MongoDB", "UI/UX"],
      type: "work"
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built responsive web applications from scratch using React and TypeScript. Worked closely with product team to deliver user-focused features.",
      tech: ["React", "TypeScript", "SCSS", "Agile"],
      type: "work"
    },
    {
      title: "Bachelor of Computer Science",
      company: "University of Technology", 
      period: "2018 - 2021",
      description: "Focused on software engineering principles, algorithms, and modern web development. Graduated with honors and completed multiple industry-relevant projects.",
      tech: ["Computer Science", "Software Engineering", "Algorithms", "Honors"],
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

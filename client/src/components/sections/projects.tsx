import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Chatguard AI",
      description: "Engineered a real-time, secure video conferencing platform using WebRTC and Socket.io, featuring AI-powered moderation with Perspective API to automatically blur toxic messages.",
      image: "chatguard.png",
      tech: ["WebRTC", "Socket.io", "Bcrypt", "Perspective API", "AWS"],
      demoUrl: "https://chatguardai.online/",
      codeUrl: "https://github.com/UjjwalAmrit/Chatguard-AI"
    },
    {
      title: "WanderLust",
      description: "Architected a robust MVC-based travel marketplace using Node.js/Express.js, implementing secure JWT authentication, optimized MongoDB schemas, and integrated Cloudinary for image storage.",
      image: "wanderlust.png",
      tech: ["MVC Framwork", "JWT", "Cloudinary", "Mongo Atlas"],
      demoUrl: "https://first-major-project.onrender.com/listings",
      codeUrl: "https://github.com/UjjwalAmrit/First_major_project"
    },
    {
      title: "Contest platform for MBA Students",
      description: "Engineered a high-performance, fully responsive user interface using React.js and Vite, centralizing global state management with Redux Toolkit and implementing secure client-side routing.",
      image: "contest.png",
      tech: ["React.js", "Vite", "Redux Toolkit", "Tailwind CSS"],
      demoUrl: "https://mba-contest-platform.vercel.app/",
      codeUrl: "https://github.com/UjjwalAmrit/Management"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and approaches.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              data-testid={`project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid={`project-demo-${index}`}
                    >
                      <i className="fas fa-external-link-alt mr-2" />
                      Demo
                    </Button>
                    <Button 
                      size="sm"
                      variant="secondary"
                      data-testid={`project-code-${index}`}
                    >
                      <i className="fab fa-github mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="btn-view-all-projects"
          >
            View All Projects
            <i className="fas fa-arrow-right" />
          </Button>
        </div>
      </div>
    </section>
  );
}

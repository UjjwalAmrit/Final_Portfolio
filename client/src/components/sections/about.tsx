export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my journey, passion, and the technologies I work with.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Developer at work image */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Developer working on multiple monitors with code" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate full stack developer with over 3 years of experience in creating 
                robust web applications. My journey started with curiosity about how websites work, 
                and it has evolved into a deep passion for building scalable, user-friendly solutions.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, particularly React and Node.js, 
                and I'm always eager to learn new technologies. I believe in writing clean, 
                maintainable code and following best practices in software development.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

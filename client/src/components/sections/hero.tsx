import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentRole];
      
      if (isDeleting) {
        setTypingText(current.substring(0, currentChar - 1));
        setCurrentChar(currentChar - 1);
      } else {
        setTypingText(current.substring(0, currentChar + 1));
        setCurrentChar(currentChar + 1);
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentChar === current.length) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentChar === 0) {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
        typeSpeed = 500;
      }

      return () => clearTimeout(timeout);
    }, isDeleting ? 50 : currentChar === roles[currentRole].length ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [currentChar, currentRole, isDeleting, roles]);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Professional developer portrait */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
              alt="Ujjwal Amrit - Professional Developer Portrait" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Ujjwal Amrit</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 h-8">
            <span className="typing-animation">{typingText}</span>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            I build scalable applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("#projects")} 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
              data-testid="btn-view-work"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("#contact")}
              data-testid="btn-get-in-touch"
            >
              Get In Touch
            </Button>
            <Button 
              variant="ghost" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
              data-testid="btn-download-cv"
            >
              <i className="fas fa-download" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-2xl"
              data-testid="social-github"
            >
              <i className="fab fa-github" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-2xl"
              data-testid="social-linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-2xl"
              data-testid="social-twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-2xl"
              data-testid="social-email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <i className="fas fa-chevron-down text-primary text-2xl" />
        </div>
      </div>
    </section>
  );
}

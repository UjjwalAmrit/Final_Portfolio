export default function Footer() {
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
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Ujjwal Amrit</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("#about")}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("#projects")}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("#experience")}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("#contact")}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>ujjwal.amrit@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Ujjwal Amrit. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}

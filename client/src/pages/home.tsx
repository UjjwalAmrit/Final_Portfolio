import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-200 z-40 ${
          showBackToTop 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-2'
        }`}
        data-testid="btn-back-to-top"
      >
        <i className="fas fa-chevron-up" />
      </Button>
    </div>
  );
}

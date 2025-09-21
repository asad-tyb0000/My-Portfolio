import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Web Developer | Creative Problem Solver";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <div className="mb-8 animate-fadeInUp">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary to-accent-light flex items-center justify-center shadow-2xl border-4 border-background">
              <span className="text-4xl md:text-5xl font-bold text-primary-foreground">MA</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Muhammad Asad
          </h1>
          
          <div className="hero-subtitle">
            <span className="inline-block min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={scrollToAbout}
            >
              Learn More About Me
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://github.com/asad-tyb0000", "_blank")}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://linkedin.com/in/asad-tayyab-a1870b290", "_blank")}
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              size={32} 
              className="text-primary cursor-pointer hover:text-primary-hover transition-colors duration-300"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
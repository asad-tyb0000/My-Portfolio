import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import cookingAppImage from "@/assets/cooking-app.jpg";
import solitaireGameImage from "@/assets/solitaire-game.jpg";
import cryptoTradingImage from "@/assets/crypto-trading.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Cooking Guide & Grocery App",
      description: "A comprehensive mobile application that provides step-by-step cooking guides and automatically generates grocery lists based on selected recipes. Features include recipe search, meal planning, and smart shopping lists.",
      image: cookingAppImage,
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/asad-tyb0000",
    },
    {
      id: 2,
      title: "Solitaire Card Game",
      description: "A classic Solitaire card game built with modern web technologies. Features smooth animations, multiple game modes, score tracking, and responsive design for seamless gameplay across all devices.",
      image: solitaireGameImage,
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      githubUrl: "https://github.com/asad-tyb0000",
    },
    {
      id: 3,
      title: "Crypto Yard Trading Platform",
      description: "A professional cryptocurrency trading platform with real-time market data, advanced charting tools, portfolio management, and secure transaction handling. Designed for both beginners and experienced traders.",
      image: cryptoTradingImage,
      technologies: ["React", "TypeScript", "WebSocket", "Chart.js"],
      githubUrl: "https://github.com/asad-tyb0000",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://github.com/asad-tyb0000", "_blank")}
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
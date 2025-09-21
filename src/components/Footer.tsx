import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/asad-tyb0000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            
            <a
              href="https://linkedin.com/in/asad-tayyab-a1870b290"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground mb-2">
              © 2025 Muhammad Asad. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
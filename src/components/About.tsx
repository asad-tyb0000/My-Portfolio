import { useEffect, useRef, useState } from "react";
import { Code, Database, Palette, Zap } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "Frontend Development", level: 90, icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript/TypeScript", level: 85, icon: <Zap className="w-6 h-6" /> },
    { name: "React & Modern Frameworks", level: 88, icon: <Palette className="w-6 h-6" /> },
    { name: "Database Design", level: 75, icon: <Database className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-hero-bg" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Muhammad Asad, a passionate web developer based in Lahore, Pakistan. 
                I specialize in creating modern, responsive web applications that solve 
                real-world problems with clean, efficient code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development started with a curiosity about how things work 
                on the web. Today, I focus on building user-centric applications using 
                modern technologies like React, TypeScript, and various backend frameworks.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the developer community.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>📍 Based in Lahore, Pakistan</li>
                  <li>🎓 Computer Science Student</li>
                  <li>💻 Full-Stack Developer</li>
                  <li>🚀 Open Source Enthusiast</li>
                </ul>
              </div>
            </div>

            <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div
                      className={`skill-fill ${isVisible ? 'w-full' : 'w-0'}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200 + 400}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
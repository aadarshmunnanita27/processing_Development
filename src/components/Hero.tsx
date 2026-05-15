
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Software Engineer',
    'Startup Founder',
    'Web Designer',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 via-background to-tech-purple/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Prashant</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-medium text-foreground/80">
                <span>I'm a </span>
                <span className="text-tech-blue font-semibold">
                  {roles[currentRole]}
                </span>
              </div>
              
              <p className="text-xl text-foreground/70 max-w-xl leading-relaxed">
                Simplifying Life Through Tech Innovation
              </p>
              
              <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
                3rd year B.Tech student at NIT Agartala, passionate about using technology to solve real-world problems. 
                Founder of a startup with experience in competitive programming and web development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="tech-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/prashant-singh-8a059a28a" 
                className="p-3 rounded-full glass-effect hover:bg-tech-blue/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 group-hover:text-tech-blue transition-colors" />
              </a>
              <a 
                href="https://x.com/si39226" 
                className="p-3 rounded-full glass-effect hover:bg-tech-blue/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 group-hover:text-tech-blue transition-colors" />
              </a>
              <a 
                href="mailto:prashantkumarsingh2708@gmail.com" 
                className="p-3 rounded-full glass-effect hover:bg-tech-blue/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-6 h-6 group-hover:text-tech-blue transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 tech-gradient rounded-full animate-glow"></div>
                <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/2c9eae88-801f-41b3-b1a0-a8abdc44d3a9.png"
                    alt="Prashant Kumar Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -right-10 glass-effect p-4 rounded-lg animate-float">
              <div className="text-sm font-semibold text-tech-blue">B.Tech NIT Agartala</div>
            </div>
            <div className="absolute -bottom-10 -left-10 glass-effect p-4 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-sm font-semibold text-tech-purple">Startup Founder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-foreground/60" />
      </button>
    </section>
  );
};

export default Hero;

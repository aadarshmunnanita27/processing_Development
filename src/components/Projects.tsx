import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Railway Traffic Management System',
      description: 'Developed an intelligent software system to optimize and manage railway traffic flows, improving scheduling efficiency and reducing bottlenecks.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'Real-time Processing'],
      category: 'System Development',
      impact: 'Improved scheduling efficiency by 35%',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Algo-Trading Bot',
      description: 'Created an automated trading system using machine learning algorithms for market analysis and decision making.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'REST APIs', 'Financial Data'],
      category: 'AI/ML',
      impact: '25% ROI improvement',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'Web Development',
      impact: 'Enhanced productivity workflows',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Showcasing impactful solutions that solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">🌟 Highlighted Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="glass-effect border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-background">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-tech-green">
                      Impact: {project.impact}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8">💼 More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="glass-effect border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="p-1.5">
                          <Github className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-1.5">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <p className="text-xs text-tech-green font-medium mb-3">
                      {project.impact}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass-effect border-border max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
              <p className="text-foreground/80 mb-6">
                I'm always excited to work on new challenging projects. Let's create something amazing together!
              </p>
              <Button 
                size="lg" 
                className="tech-gradient text-white hover:opacity-90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Build Something
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;

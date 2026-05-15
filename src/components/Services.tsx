
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Code, Smartphone, Cpu, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Custom website creation for individuals and businesses with responsive, user-centric design and modern technologies.',
      features: [
        'Responsive Design',
        'React Integration',
        'Modern UI/UX',
        'Performance Optimization'
      ],
      color: 'tech-blue',
      popular: true
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using cutting-edge technologies and best practices.',
      features: [
        'Frontend Development',
        'Backend APIs',
        'Database Design',
        'Cloud Deployment'
      ],
      color: 'tech-purple',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Solutions',
      description: 'Creating mobile-optimized web applications that provide seamless experiences across all devices.',
      features: [
        'Mobile Optimization',
        'Cross-Platform',
        'Touch-Friendly UI',
        'Fast Loading'
      ],
      color: 'tech-green',
      popular: false
    },
    {
      icon: Cpu,
      title: 'System Architecture',
      description: 'Designing scalable and efficient system architectures for complex applications and platforms.',
      features: [
        'Scalable Design',
        'Performance Tuning',
        'Security Implementation',
        'System Integration'
      ],
      color: 'tech-pink',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience.',
      features: [
        'User Research',
        'Wireframing',
        'Prototype Design',
        'Usability Testing'
      ],
      color: 'tech-cyan',
      popular: false
    },
    {
      icon: Zap,
      title: 'Technical Consulting',
      description: 'Providing expert technical guidance and solutions for startup ventures and established businesses.',
      features: [
        'Technology Strategy',
        'Code Review',
        'Performance Audit',
        'Team Mentoring'
      ],
      color: 'tech-blue',
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Transforming ideas into powerful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`glass-effect border-border hover:border-opacity-50 transition-all duration-300 group relative ${
                service.popular ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 bg-${service.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/70">
                      <span className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-${service.color} hover:bg-${service.color}/80 text-white transition-all duration-300`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass-effect border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-foreground/80 mb-6 text-lg">
                Let's discuss your ideas and create something amazing together. 
                From concept to deployment, I'll guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="tech-gradient text-white hover:opacity-90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-background"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

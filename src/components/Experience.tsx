
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Users, Instagram } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Instagram,
      company: 'Social Media Development',
      position: 'Instagram Channel Builder',
      duration: '2023 - Present',
      description: 'Successfully built and manage a thriving Instagram channel with over 500K followers, demonstrating expertise in content strategy, audience engagement, and digital marketing.',
      color: 'tech-purple',
      achievements: [
        'Built following to 500K+ organically',
        'Developed viral content strategies',
        'Created strong community engagement'
      ]
    },
    {
      icon: Rocket,
      company: 'Networking Import-Export Trade',
      position: 'Founder & CEO',
      duration: '2023 - Present',
      description: 'Founded and successfully launched a technology startup focused on networking solutions for import-export trade, creating innovative platforms that connect businesses globally.',
      color: 'tech-blue',
      achievements: [
        'Founded networking trade startup',
        'Developed B2B connection platform',
        'Built international trade network'
      ]
    },
    {
      icon: Users,
      company: 'Leadership Experience',
      position: 'Tech Entrepreneur',
      duration: '2023 - Present',
      description: 'Demonstrated leadership in various technical projects and initiatives, with a focus on innovation and collaborative problem-solving.',
      color: 'tech-green',
      achievements: [
        'Led technical innovation projects',
        'Mentored development teams',
        'Delivered impactful solutions'
      ]
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Building innovative solutions and leading teams to success
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-effect border-border hover:border-opacity-50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Icon & Company */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-${exp.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                        <p className="text-foreground/60">{exp.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Position & Description */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-medium text-primary mb-3">{exp.position}</h4>
                    <p className="text-foreground/80 leading-relaxed mb-4">{exp.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-1">
                    <h5 className="font-medium text-foreground mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start">
                          <span className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 mr-2 flex-shrink-0`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Quote */}
        <div className="mt-16 text-center">
          <Card className="glass-effect border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground/90 italic mb-4">
                "Innovation distinguishes between a leader and a follower. I believe in building 
                technology that doesn't just solve problems, but transforms the way we live and work."
              </blockquote>
              <p className="text-foreground/60">- Prashant Kumar Singh</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

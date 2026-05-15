import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Globe, Trophy } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'tech-blue',
      skills: [
        { name: 'C++', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      color: 'tech-purple',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      icon: Cpu,
      title: 'Technical Skills',
      color: 'tech-green',
      skills: [
        { name: 'Data Structures', level: 95 },
        { name: 'Algorithms', level: 93 },
        { name: 'System Design', level: 80 },
        { name: 'Database Design', level: 85 },
        { name: 'Git/Version Control', level: 90 }
      ]
    },
    {
      icon: Trophy,
      title: 'Specializations',
      color: 'tech-pink',
      skills: [
        { name: 'Competitive Programming', level: 95 },
        { name: 'Algo-Trading', level: 85 },
        { name: 'Problem Solving', level: 98 },
        { name: 'Web Design', level: 88 },
        { name: 'Startup Strategy', level: 85 }
      ]
    }
  ];

  const codingProfiles = [
    {
      platform: 'Codeforces',
      rank: 'Pupil',
      badge: 'bg-tech-blue',
      url: '#'
    },
    {
      platform: 'CodeChef',
      rank: '3-Star',
      badge: 'bg-tech-purple',
      url: '#'
    },
    {
      platform: 'LeetCode',
      rank: 'Knight',
      badge: 'bg-tech-green',
      url: '#'
    }
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Git', 'Linux', 'Docker', 'AWS', 
    'MongoDB', 'PostgreSQL', 'Redis', 'Figma', 'Postman', 'Jupyter'
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Mastering the art of problem-solving through technology
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-border hover:border-opacity-50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 bg-${category.color}/20 rounded-lg`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`bg-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Coding Profiles</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {codingProfiles.map((profile, index) => (
              <Card key={index} className="glass-effect border-border hover:border-opacity-50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${profile.badge} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{profile.platform}</h4>
                  <Badge variant="secondary" className="text-primary">
                    {profile.rank}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <Card className="glass-effect border-border">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-background transition-colors duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

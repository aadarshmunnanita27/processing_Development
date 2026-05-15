
import { Card, CardContent } from '@/components/ui/card';
import { User, Code, Book, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Prashant Kumar Singh</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a 3rd year B.Tech student at the National Institute of Technology Agartala with a CGPA of 9.4++, 
                driven by a passion for using technology to simplify everyday life. As a founder of a startup 
                in networking import-export trade, I've gained valuable experience in business strategy and product development.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in competitive programming has sharpened my problem-solving skills, and I'm 
                proud to be qualified for the International Science Olympiad. I also built and manage a 500K+ Instagram 
                channel, demonstrating my expertise in digital marketing and content strategy.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="glass-effect border-border hover:border-tech-blue/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-tech-blue/20 rounded-lg">
                      <Users className="w-5 h-5 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Instagram Builder</h4>
                      <p className="text-sm text-foreground/60">500K+ Followers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border hover:border-tech-purple/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-tech-purple/20 rounded-lg">
                      <Code className="w-5 h-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Startup Founder</h4>
                      <p className="text-sm text-foreground/60">Import-Export Trade</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-tech-blue/20 rounded-lg">
                    <Book className="w-6 h-6 text-tech-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">Education & Achievements</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground">B.Tech - Computer Science</h4>
                        <p className="text-foreground/60">National Institute of Technology Agartala</p>
                        <p className="text-sm text-tech-green font-medium">CGPA: 9.4++</p>
                        <p className="text-sm text-foreground/50">Expected Graduation: 2027</p>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-medium text-tech-green mb-2">Academic Excellence</h4>
                        <div className="space-y-1">
                          <p className="text-sm text-foreground/70">• JEE Advanced - Rank 13K</p>
                          <p className="text-sm text-foreground/70">• JEE Mains - Rank 16K</p>
                          <p className="text-sm text-foreground/70">• Top 1% in Board Examinations</p>
                          <p className="text-sm text-foreground/70">• National Exam Qualifier</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-medium text-tech-green">International Science Olympiad Qualifier</h4>
                        <p className="text-sm text-foreground/60">Recognized for excellence in scientific problem-solving</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop"
                alt="Innovation in Technology"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-semibold text-white">Innovation Mindset</h4>
                <p className="text-white/80">Turning ideas into reality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

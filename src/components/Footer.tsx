
import { Linkedin, Mail, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/prashant-singh-8a059a28a',
      color: 'hover:text-tech-purple'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com/si39226',
      color: 'hover:text-tech-blue'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:prashantkumarsingh2708@gmail.com',
      color: 'hover:text-tech-green'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="font-space font-bold text-2xl text-gradient">
              Prashant Kumar Singh
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Software Engineer, Tech Entrepreneur & Problem Solver. 
              Passionate about creating innovative solutions that simplify life through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg glass-effect transition-all duration-300 ${social.color} group`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Get In Touch</h3>
            <div className="space-y-3 text-foreground/70">
              <p>Ready to start your next project?</p>
              <a 
                href="mailto:prashantkumarsingh2708@gmail.com"
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                prashantkumarsingh2708@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Prashant Kumar Singh. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Linkedin, Loader2, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_0h7bmxj', // Your service ID
        'template_ikexnj6', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          to_name: 'Prashant Kumar Singh',
        },
        'g1ep80Wub0JNWqryn' // Your public key
      );

      console.log('EmailJS result:', result);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prashantkumarsingh2708@gmail.com',
      href: 'mailto:prashantkumarsingh2708@gmail.com',
      color: 'tech-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NIT Campus, India',
      href: '#',
      color: 'tech-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/prashant-singh-8a059a28a',
      color: 'tech-purple'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com/si39226',
      color: 'tech-green'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:prashantkumarsingh2708@gmail.com',
      color: 'tech-blue'
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss your ideas and bring them to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-background/50 border-border focus:border-primary"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full tech-gradient text-white hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-effect border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors"
                    >
                      <div className={`p-3 bg-${info.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-5 h-5 text-${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.label}</h4>
                        <p className="text-foreground/70">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-4 bg-${social.color}/20 rounded-lg hover:bg-${social.color}/30 transition-all duration-300 group`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className={`w-6 h-6 text-${social.color} group-hover:scale-110 transition-transform duration-300`} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-effect border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                    <span className="text-foreground/80">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tech-purple rounded-full"></div>
                    <span className="text-foreground/80">Open to collaborations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

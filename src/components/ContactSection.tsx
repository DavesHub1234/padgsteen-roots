import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import vineBorder from '@/assets/vine-border.png';
import logo from '@/assets/padgsteen-logo.png';

const ContactSection = () => {
  return <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-wood-texture opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-caramel font-sans uppercase tracking-[0.2em] text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Let's <span className="text-gradient italic">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're interested in a custom guitar, need repair work, or want to 
            book Roger for a show, we'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-card rounded-xl p-8 border border-border shadow-soft">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Workshop Info
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Southeast Appalachian Region</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call or Text</p>
                    <p className="text-foreground text-2xl md:text-3xl font-bold tracking-wide">(980) 525-1991</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                  </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Workshop Hours</p>
                    <p className="text-muted-foreground">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Note */}
            <div className="bg-caramel/10 rounded-xl p-6 border border-caramel/20">
              <p className="text-foreground text-sm italic">
                <strong>Note:</strong> Custom guitar builds typically have a 6-8 month lead time. 
                For repairs and setups, turnaround is usually 1-2 weeks depending on the work required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// Footer Component
const Footer = () => {
  return <footer className="bg-navy py-12 relative overflow-hidden">
      {/* Vine border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-contain bg-repeat-x opacity-30" style={{
      backgroundImage: `url(${vineBorder})`
    }} />
      
      <div className="container mx-auto px-4 relative pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Padgsteen Guitars" className="h-10 w-10 rounded-full" />
            <span className="font-display text-lg text-cream">
              Padgsteen Guitars
            </span>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#about" className="text-cream/60 hover:text-caramel transition-colors">
              About
            </a>
            <a href="#gallery" className="text-cream/60 hover:text-caramel transition-colors">
              Guitars
            </a>
            <a href="#services" className="text-cream/60 hover:text-caramel transition-colors">
              Services
            </a>
            <a href="#music" className="text-cream/60 hover:text-caramel transition-colors">
              Music
            </a>
            <a href="#contact" className="text-cream/60 hover:text-caramel transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Padgsteen Guitars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};

export { ContactSection, Footer };
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWorkshop from '@/assets/hero-workshop.jpg';
import vineBorder from '@/assets/vine-border.png';
import padgsteenLogo from '@/assets/padgsteen-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWorkshop})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Vine Border Top */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-contain bg-repeat-x opacity-40"
        style={{ backgroundImage: `url(${vineBorder})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up relative">
          {/* Background Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-20 lg:-top-24 opacity-15 pointer-events-none">
            <img
              src={padgsteenLogo}
              alt=""
              className="w-48 md:w-64 lg:w-80 h-auto"
              aria-hidden="true"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-caramel font-sans uppercase tracking-[0.3em] text-sm mb-6 opacity-0 animate-fade-in relative z-10" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Musician • Luthier • Craftsman
          </p>
          
          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight relative z-10">
            Roger <span className="text-gradient italic">Padgett</span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-sans text-xl md:text-2xl text-cream/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Handcrafted guitars & soulful Southern music from the heart of Appalachia
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#gallery">View Guitars</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#music">Listen Now</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Vine Border Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-contain bg-repeat-x opacity-40 rotate-180"
        style={{ backgroundImage: `url(${vineBorder})` }}
      />
      
      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-caramel transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;

import rogerPortrait from '@/assets/roger-portrait.jpg';
import rogerMotorcycle from '@/assets/roger-motorcycle.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-wood-texture opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Column */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main portrait */}
              <div className="relative rounded-lg overflow-hidden shadow-deep hover-lift">
                <img
                  src={rogerPortrait}
                  alt="Roger Padgett - Master luthier and musician in his guitar workshop"
                  className="w-full h-auto object-cover aspect-square"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              
              {/* Motorcycle illustration - below portrait */}
              <figure className="mt-8 flex justify-center">
                <img
                  src={rogerMotorcycle}
                  alt="Artistic illustration of Roger Padgett riding motorcycle with guitar"
                  loading="lazy"
                  className="w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                />
              </figure>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-caramel/30 rounded-lg" />
          </div>
          
          {/* Content Column */}
          <div className="lg:pl-8">
            <p className="text-caramel font-sans uppercase tracking-[0.2em] text-sm mb-4">
              About Roger
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Where <span className="text-gradient italic">Music</span> Meets
              <br />Craftsmanship
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, Roger Padgett has been creating soulful music 
                and handcrafting exceptional guitars in the heart of the Southeast. 
                His journey began in the Appalachian foothills, where the traditions 
                of folk, blues, and Southern rock shaped his distinctive sound.
              </p>
              
              <p>
                As a master luthier, Roger brings the same passion and attention to 
                detail to every guitar he builds. Each instrument is a labor of love, 
                crafted from the finest tonewoods and designed to become a cherished 
                companion for musicians at every level.
              </p>
              
              <p>
                Whether he's on stage sharing his music or in the workshop bringing 
                a new guitar to life, Roger's commitment to authenticity and quality 
                shines through in everything he does.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-3xl text-caramel">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Playing</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-caramel">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Guitars Built</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-caramel">1000+</p>
                <p className="text-sm text-muted-foreground mt-1">Shows Played</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

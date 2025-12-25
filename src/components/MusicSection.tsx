import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rogerCharacter from '@/assets/roger-character.jpg';

const MusicSection = () => {
  // Placeholder Spotify embed - replace with actual artist ID
  const spotifyArtistId = '0fNbHjHPNJVpMpnqxlkqRH'; // Example ID

  return (
    <section id="music" className="py-24 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wood-texture opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-wood-dark/50 to-navy" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div>
            <p className="text-caramel font-sans uppercase tracking-[0.2em] text-sm mb-4">
              The Music
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
              Soulful <span className="text-gradient italic">Southern</span> Sound
            </h2>
            
            <p className="text-cream/70 leading-relaxed mb-6">
              Roger's music draws from the deep wells of Southern tradition—blues, 
              folk, country, and rock all woven together with his distinctive voice 
              and guitar work. His songs tell stories of life in the South, 
              capturing the beauty, heartache, and resilience of the region.
            </p>
            
            <p className="text-cream/70 leading-relaxed mb-8">
              From intimate acoustic performances to full-band shows, Roger brings 
              an authentic energy that connects with audiences everywhere he plays.
            </p>
            
            {/* Spotify Player Embed */}
            <div className="bg-wood-dark/50 rounded-xl p-6 backdrop-blur-sm border border-cream/10 mb-8">
              <p className="text-cream/60 text-sm mb-4 uppercase tracking-wider">
                Listen on Spotify
              </p>
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/artist/${spotifyArtistId}?utm_source=generator&theme=0`}
                width="100%"
                height="180"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="opacity-90"
              />
            </div>
            
            {/* Music Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://open.spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Full Spotify Profile
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Book a Show
                </a>
              </Button>
            </div>
          </div>
          
          {/* Character Illustration Column */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img
                src={rogerCharacter}
                alt="Roger Padgett character illustration with guitar"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-caramel/30 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-muscadine/20 rounded-xl -z-10" />
            
            {/* Quote overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-center bg-navy/80 backdrop-blur-sm rounded-lg py-4 px-6">
              <p className="font-display text-cream italic text-lg">
                "Every song tells a story, every guitar has a soul."
              </p>
              <p className="text-caramel text-sm mt-2">— Roger Padgett</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

import { useState } from 'react';
import galleryAcoustic1 from '@/assets/gallery-acoustic-1.jpg';
import galleryAcoustic2 from '@/assets/gallery-acoustic-2.jpg';
import galleryElectric1 from '@/assets/gallery-electric-1.jpg';
import galleryElectric2 from '@/assets/gallery-electric-2.jpg';

interface GuitarItem {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
}

const guitars: GuitarItem[] = [
  {
    id: 1,
    name: 'The Carolina',
    type: 'Acoustic',
    description: 'Rich mahogany body with mother of pearl inlays. Warm, resonant tone perfect for fingerpicking.',
    image: galleryAcoustic1,
  },
  {
    id: 2,
    name: 'Sunburst Heritage',
    type: 'Electric',
    description: 'Quilted maple top with vintage sunburst finish. Classic rock tone with modern playability.',
    image: galleryElectric1,
  },
  {
    id: 3,
    name: 'The Appalachian',
    type: 'Acoustic',
    description: 'Spruce top with rosewood back and sides. Crystal clear projection for stage performers.',
    image: galleryAcoustic2,
  },
  {
    id: 4,
    name: 'Midnight Blues',
    type: 'Electric',
    description: 'Deep blue finish on alder body. Built for blues, rock, and everything in between.',
    image: galleryElectric2,
  },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-wood-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-caramel font-sans uppercase tracking-[0.2em] text-sm mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Handcrafted <span className="text-gradient italic">Guitars</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Each guitar is a unique piece of art, crafted with precision and passion.
            Browse our collection of custom builds and find your perfect instrument.
          </p>
        </div>
        
        {/* Guitar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guitars.map((guitar) => (
            <article
              key={guitar.id}
              className="group relative rounded-lg overflow-hidden bg-wood-dark cursor-pointer hover-lift"
              onMouseEnter={() => setHoveredId(guitar.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <figure className="aspect-square overflow-hidden">
                <img
                  src={guitar.image}
                  alt={`${guitar.name} - ${guitar.type} guitar handcrafted by Padgsteen Guitars`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent transition-opacity duration-300 ${
                  hoveredId === guitar.id ? 'opacity-100' : 'opacity-80'
                }`}
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-caramel text-xs uppercase tracking-wider">
                  {guitar.type}
                </span>
                <h3 className="font-display text-xl text-cream mt-1 mb-2">
                  {guitar.name}
                </h3>
                <p
                  className={`text-cream/70 text-sm transition-all duration-300 ${
                    hoveredId === guitar.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {guitar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-cream/60 mb-4">
            Interested in a custom build? Let's create your dream guitar.
          </p>
          <a
            href="#contact"
            className="inline-block text-caramel border-b-2 border-caramel/50 hover:border-caramel transition-colors font-display text-lg"
          >
            Commission a Guitar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

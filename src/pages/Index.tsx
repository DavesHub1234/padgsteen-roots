import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';
import MusicSection from '@/components/MusicSection';
import { ContactSection, Footer } from '@/components/ContactSection';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Padgsteen Guitars",
    "description": "Handcrafted custom guitars and expert luthier services from master craftsman Roger Padgett.",
    "url": "https://padgsteenguitars.com",
    "telephone": "(980) 525-1991",
    "areaServed": {
      "@type": "Place",
      "name": "Southeast Appalachian Region"
    },
    "founder": {
      "@type": "Person",
      "name": "Roger Padgett",
      "jobTitle": "Master Luthier & Musician"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Guitar Builds",
          "description": "Personalized handcrafted guitars built to your specifications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guitar Repair & Restoration",
          "description": "Expert repair services including fret work, neck resets, and crack repairs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guitar Setup & Adjustment",
          "description": "Professional setups to optimize playability and tone"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Live Music Performance",
          "description": "Soulful Southern music performances for events and venues"
        }
      }
    ],
    "sameAs": [
      "https://open.spotify.com"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Padgsteen Guitars | Roger Padgett - Custom Handcrafted Guitars & Luthier Services</title>
        <meta 
          name="description" 
          content="Handcrafted custom guitars and expert luthier services from master craftsman Roger Padgett. Custom builds, guitar repair, setups, and live Southern music performances. Call (980) 525-1991." 
        />
        <meta name="keywords" content="custom guitars, luthier, guitar repair, handcrafted guitars, Southern music, Roger Padgett, Padgsteen, Appalachian, guitar builder, acoustic guitars, electric guitars, guitar setup" />
        <link rel="canonical" href="https://padgsteenguitars.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <MusicSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

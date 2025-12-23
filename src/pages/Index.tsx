import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';
import MusicSection from '@/components/MusicSection';
import { ContactSection, Footer } from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Padgsteen Guitars | Roger Padgett - Musician & Master Luthier</title>
        <meta 
          name="description" 
          content="Handcrafted guitars and soulful Southern music from master luthier Roger Padgett. Custom builds, repairs, and live performances from the heart of Appalachia." 
        />
        <meta name="keywords" content="custom guitars, luthier, guitar repair, handcrafted guitars, Southern music, Roger Padgett, Padgsteen" />
        <link rel="canonical" href="https://padgsteenguitars.com" />
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

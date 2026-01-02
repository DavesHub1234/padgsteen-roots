import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/padgsteen-logo.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Guitars' },
  { href: '#services', label: 'Services' },
  { href: '#music', label: 'Music' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-deep py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Padgsteen Guitars"
              className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-xl text-cream hidden sm:block">
              Padgsteen Guitars
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-caramel font-sans tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-caramel after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="warmGhost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-caramel font-sans tracking-wide transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

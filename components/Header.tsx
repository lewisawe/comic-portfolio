
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../constants';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'superpowers', 'secret-weapons', 'missions', 'villain-gallery', 'accolades', 'collectibles', 'easter-eggs', 'dispatches'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Origin', href: 'hero' },
    { name: 'Powers', href: 'superpowers' },
    { name: 'Weapons', href: 'secret-weapons' },
    { name: 'Missions', href: 'missions' },
    { name: 'Villains', href: 'villain-gallery' },
    { name: 'Awards', href: 'accolades' },
    { name: 'Stats', href: 'collectibles' },
    { name: 'Secrets', href: 'easter-eggs' },
    { name: 'Blog', href: 'dispatches' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-comic-dark/95 backdrop-blur-sm shadow-lg border-b-4 border-comic-yellow' 
        : 'bg-comic-dark/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <button 
          onClick={() => scrollToSection('hero')}
          className="font-bangers text-3xl text-comic-yellow tracking-widest hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          {portfolioData.name}
        </button>
        
        <nav className="hidden lg:flex space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`font-bangers text-sm xl:text-lg px-2 xl:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                activeSection === link.href
                  ? 'bg-comic-yellow text-comic-dark border-2 border-comic-dark shadow-md'
                  : 'text-white hover:bg-comic-yellow hover:text-comic-dark border-2 border-transparent'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
        
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white p-2 hover:text-comic-yellow transition-colors" 
            aria-label="Open menu"
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      <div className={`fixed inset-0 bg-comic-dark/95 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-6 right-4 text-white p-2 hover:text-comic-yellow transition-colors" 
          aria-label="Close menu"
        >
          <XIcon className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 px-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`font-bangers text-3xl transition-all duration-300 transform hover:scale-110 w-full text-center py-2 ${
                activeSection === link.href
                  ? 'text-comic-yellow'
                  : 'text-white hover:text-comic-yellow'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
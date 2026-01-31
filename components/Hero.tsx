
import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const blueBlobRef = useRef<HTMLDivElement>(null);
  const redBlobRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after a short delay
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (blueBlobRef.current) {
        blueBlobRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (redBlobRef.current) {
        redBlobRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
      sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };


  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative text-center py-20 md:py-32 overflow-hidden"
    >
        <div className="absolute inset-0 bg-halftone bg-halftone opacity-50 -z-10 interactive-halftone"></div>
        <div ref={blueBlobRef} className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-comic-blue rounded-full opacity-20 filter blur-3xl will-change-transform blob-pulse" style={{ animationDelay: '2s' }}></div>
        <div ref={redBlobRef} className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-comic-red rounded-full opacity-20 filter blur-3xl will-change-transform blob-pulse"></div>

        <div className="relative z-10">
            <h1 className={`font-bangers text-6xl md:text-9xl text-comic-dark tracking-widest drop-shadow-lg ${isAnimated ? 'hero-title-animate' : 'opacity-0'}`}>
                {portfolioData.name}
            </h1>
            <h2 className={`font-bangers text-3xl md:text-5xl text-comic-blue mt-2 md:mt-4 tracking-wide ${isAnimated ? 'hero-title-animate' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                {portfolioData.title}
            </h2>
            <div className="max-w-3xl mx-auto mt-8">
                 <div className={`bg-white/80 border-4 border-comic-dark p-6 text-xl md:text-2xl shadow-lg relative -rotate-1 ${isAnimated ? 'hero-panel-animate' : 'opacity-0'}`}>
                    <span className="absolute -top-4 -left-4 font-bangers text-2xl bg-comic-yellow text-comic-dark px-3 py-1 border-2 border-comic-dark rotate-[-6deg]">
                        ORIGIN STORY
                    </span>
                    {portfolioData.bio}
                </div>
            </div>
      </div>
    </section>
  );
};

export default Hero;
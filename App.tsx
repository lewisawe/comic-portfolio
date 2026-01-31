
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SecretWeapons from './components/SecretWeapons';
import VillainGallery from './components/VillainGallery';
import EasterEggs from './components/EasterEggs';
import Collectibles from './components/Collectibles';
import Certifications from './components/Certifications';
import Blog from './components/Blog';

import KonamiCode from './components/KonamiCode';
import FloatingParticles from './components/FloatingParticles';
import ClickCombo from './components/ClickCombo';
import { portfolioData, socialLinks } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-comic-bg font-sans text-comic-dark min-h-screen relative">
      <FloatingParticles />
      <Header />
      <main className="pt-20 relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <div id="superpowers">
            <Skills skills={portfolioData.skills} />
          </div>
          
          {portfolioData.secretWeapons && (
            <div id="secret-weapons">
              <SecretWeapons weapons={portfolioData.secretWeapons} />
            </div>
          )}
          
          <div id="missions">
            <Projects projects={portfolioData.projects} />
          </div>
          
          {portfolioData.villainGallery && (
            <div id="villain-gallery">
              <VillainGallery villains={portfolioData.villainGallery} />
            </div>
          )}
          
          <div id="accolades">
            <Certifications certifications={portfolioData.certifications} />
          </div>
          
          {portfolioData.collectibles && (
            <div id="collectibles">
              <Collectibles collectibles={portfolioData.collectibles} />
            </div>
          )}
          
          {portfolioData.easterEggs && (
            <div id="easter-eggs">
              <EasterEggs eggs={portfolioData.easterEggs} />
            </div>
          )}
          
          <div id="dispatches">
            <Blog blogPosts={portfolioData.blogPosts} />
          </div>
          
          <footer className="text-center py-12">
            <h2 className="font-bangers text-4xl md:text-5xl text-comic-dark tracking-wider mb-4">SUMMON THE CRUSADER!</h2>
            <p className="text-lg mb-6">Ready to build the future? Get in touch.</p>
            <div className="flex justify-center space-x-6">
               {socialLinks.map((link) => (
                 <div key={link.name} className="relative group">
                   <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-bangers text-xl bg-comic-yellow text-comic-dark px-2 py-0.5 border-2 border-comic-dark rounded-md transition-all duration-300 scale-0 group-hover:scale-100 origin-bottom -rotate-12 whitespace-nowrap">
                    ZAP!
                   </span>
                   <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-comic-blue hover:text-comic-red transition-all duration-300 hover:scale-110 block transform">
                     <link.icon className="w-8 h-8" />
                   </a>
                 </div>
               ))}
            </div>
             <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          </footer>
        </div>
      </main>
      <KonamiCode />
      <ClickCombo />
    </div>
  );
};

export default App;
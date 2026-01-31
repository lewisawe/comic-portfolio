import React, { useState } from 'react';
import { Villain } from '../types';
import Section from './Section';

interface VillainGalleryProps {
  villains: Villain[];
}

const VillainGallery: React.FC<VillainGalleryProps> = ({ villains }) => {
  const [hoveredVillain, setHoveredVillain] = useState<number | null>(null);

  return (
    <Section title="VILLAIN GALLERY" subtitle="Challenges I've defeated in epic battles!">
      <div className="space-y-8">
        {villains.map((villain, index) => (
          <div 
            key={index} 
            className={`bg-white border-4 border-comic-dark rounded-lg p-6 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${
              hoveredVillain === index ? 'shadow-2xl' : 'hover:shadow-comic'
            }`}
            onMouseEnter={() => setHoveredVillain(index)}
            onMouseLeave={() => setHoveredVillain(null)}
          >
            {/* Animated background effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-red-50 to-blue-50 transition-opacity duration-500 ${
              hoveredVillain === index ? 'opacity-100' : 'opacity-0'
            }`}></div>
            
            {villain.defeated && (
              <div className={`absolute top-4 right-4 bg-comic-red text-white px-3 py-1 rounded-full font-bangers text-sm transform transition-all duration-300 ${
                hoveredVillain === index ? 'rotate-12 scale-110 animate-pulse' : 'rotate-12'
              }`}>
                DEFEATED!
              </div>
            )}
            
            {/* Battle scars effect */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-comic-red via-comic-yellow to-comic-red transition-all duration-500 ${
              hoveredVillain === index ? 'opacity-100' : 'opacity-0'
            }`}></div>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div>
                <h3 className={`font-bangers text-3xl text-comic-red mb-2 transition-all duration-300 ${
                  hoveredVillain === index ? 'text-4xl' : ''
                }`}>
                  {villain.name}
                </h3>
                <div className="mb-4">
                  <h4 className="font-bangers text-lg text-comic-dark mb-2 flex items-center">
                    THE CHALLENGE:
                    <span className={`ml-2 text-2xl transition-all duration-300 ${
                      hoveredVillain === index ? 'animate-bounce' : ''
                    }`}>⚔️</span>
                  </h4>
                  <p className={`text-gray-700 bg-red-50 p-3 rounded border-l-4 border-comic-red transition-all duration-300 ${
                    hoveredVillain === index ? 'bg-red-100 transform translate-x-2' : ''
                  }`}>
                    {villain.challenge}
                  </p>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h4 className="font-bangers text-lg text-comic-blue mb-2 flex items-center">
                    MY SOLUTION:
                    <span className={`ml-2 text-2xl transition-all duration-300 ${
                      hoveredVillain === index ? 'animate-spin' : ''
                    }`}>🛡️</span>
                  </h4>
                  <p className={`text-gray-700 bg-blue-50 p-3 rounded border-l-4 border-comic-blue transition-all duration-300 ${
                    hoveredVillain === index ? 'bg-blue-100 transform translate-x-2' : ''
                  }`}>
                    {villain.solution}
                  </p>
                </div>
                
                <div className={`bg-green-50 p-3 rounded border-l-4 border-green-500 transition-all duration-300 ${
                  hoveredVillain === index ? 'bg-green-100 transform translate-x-2' : ''
                }`}>
                  <h4 className="font-bangers text-lg text-green-600 mb-2 flex items-center">
                    VICTORY IMPACT:
                    <span className={`ml-2 text-2xl transition-all duration-300 ${
                      hoveredVillain === index ? 'animate-pulse' : ''
                    }`}>🏆</span>
                  </h4>
                  <p className="text-gray-700">{villain.impact}</p>
                </div>
              </div>
            </div>

            {/* Comic effect on hover */}
            {hoveredVillain === index && (
              <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bangers text-6xl text-comic-yellow opacity-20 animate-pulse pointer-events-none">
                  BOOM!
                </div>
                <div className="absolute -bottom-2 -right-2 font-bangers text-xl text-comic-blue transform rotate-12 animate-bounce">
                  VICTORY!
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default VillainGallery;

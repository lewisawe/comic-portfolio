import React, { useState, useEffect } from 'react';
import { SecretWeapon } from '../types';
import Section from './Section';

interface SecretWeaponsProps {
  weapons: SecretWeapon[];
}

const SecretWeapons: React.FC<SecretWeaponsProps> = ({ weapons }) => {
  const [visibleWeapons, setVisibleWeapons] = useState<boolean[]>(new Array(weapons.length).fill(false));
  const [hoveredWeapon, setHoveredWeapon] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleWeapons(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const weaponElements = document.querySelectorAll('.weapon-card');
    weaponElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Section title="SECRET WEAPONS" subtitle="My arsenal of tech superpowers!">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weapons.map((weapon, index) => (
          <div 
            key={index} 
            data-index={index}
            className={`weapon-card bg-white border-4 border-comic-dark rounded-lg p-6 transform transition-all duration-500 hover:shadow-comic relative overflow-hidden ${
              visibleWeapons[index] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            } ${hoveredWeapon === index ? 'scale-105 -rotate-1' : ''}`}
            onMouseEnter={() => setHoveredWeapon(index)}
            onMouseLeave={() => setHoveredWeapon(null)}
          >
            {/* Glowing effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-comic-yellow/20 to-comic-red/20 rounded-lg transition-opacity duration-300 ${
              hoveredWeapon === index ? 'opacity-100' : 'opacity-0'
            }`}></div>
            
            {/* Power level indicator */}
            <div className={`absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-comic-dark flex items-center justify-center font-bangers text-sm transition-all duration-300 ${
              weapon.powerLevel >= 90 ? 'bg-red-500 text-white animate-pulse' :
              weapon.powerLevel >= 80 ? 'bg-yellow-500 text-comic-dark' :
              'bg-blue-500 text-white'
            }`}>
              {Math.floor(weapon.powerLevel / 10)}
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                {weapon.icon && (
                  <div className={`transition-transform duration-300 ${hoveredWeapon === index ? 'scale-110 rotate-12' : ''}`}>
                    <weapon.icon className="w-12 h-12 mr-4" />
                  </div>
                )}
                <div>
                  <h3 className="font-bangers text-2xl text-comic-dark">{weapon.name}</h3>
                  <p className="text-comic-blue font-semibold">{weapon.category}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bangers text-lg">POWER LEVEL</span>
                  <span className="font-bangers text-xl text-comic-red">{weapon.powerLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-comic-dark overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r from-comic-yellow to-comic-red h-full rounded-full transition-all duration-1000 ease-out relative ${
                      visibleWeapons[index] ? '' : 'w-0'
                    }`}
                    style={{ width: visibleWeapons[index] ? `${weapon.powerLevel}%` : '0%' }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{weapon.description}</p>
              
              {/* Comic effect on hover */}
              {hoveredWeapon === index && (
                <div className="absolute -top-4 -right-4 font-bangers text-2xl text-comic-red transform rotate-12 animate-bounce">
                  POW!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SecretWeapons;

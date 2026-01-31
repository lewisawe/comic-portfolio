import React, { useState, useEffect } from 'react';
import { EasterEgg } from '../types';
import Section from './Section';

interface EasterEggsProps {
  eggs: EasterEgg[];
}

const EasterEggs: React.FC<EasterEggsProps> = ({ eggs }) => {
  const [clickedEggs, setClickedEggs] = useState<boolean[]>(new Array(eggs.length).fill(false));
  const [hoveredEgg, setHoveredEgg] = useState<number | null>(null);

  const handleEggClick = (index: number) => {
    setClickedEggs(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Section title="EASTER EGGS" subtitle="Fun facts and hidden secrets about me!">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eggs.map((egg, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br from-comic-yellow to-yellow-300 border-4 border-comic-dark rounded-lg p-6 transform transition-all duration-500 cursor-pointer relative overflow-hidden ${
              clickedEggs[index] ? 'scale-110 rotate-3 shadow-2xl' : 'hover:scale-105 hover:shadow-comic'
            } ${hoveredEgg === index ? 'animate-pulse' : ''}`}
            onClick={() => handleEggClick(index)}
            onMouseEnter={() => setHoveredEgg(index)}
            onMouseLeave={() => setHoveredEgg(null)}
          >
            {/* Sparkle effect */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              clickedEggs[index] ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="text-center relative z-10">
              <div className={`text-6xl mb-4 transition-all duration-500 ${
                clickedEggs[index] ? 'animate-bounce scale-125' : hoveredEgg === index ? 'animate-pulse' : ''
              }`}>
                {egg.emoji}
              </div>
              <h3 className={`font-bangers text-2xl text-comic-dark mb-3 transition-all duration-300 ${
                clickedEggs[index] ? 'text-3xl' : ''
              }`}>
                {egg.title}
              </h3>
              <p className={`text-gray-800 font-medium transition-all duration-300 ${
                clickedEggs[index] ? 'text-lg font-bold' : ''
              }`}>
                {egg.fact}
              </p>
            </div>

            {/* Click indicator */}
            <div className={`absolute bottom-2 right-2 text-xs font-bangers text-comic-dark transition-opacity duration-300 ${
              hoveredEgg === index && !clickedEggs[index] ? 'opacity-100' : 'opacity-0'
            }`}>
              CLICK ME!
            </div>

            {/* Cracked effect when clicked */}
            {clickedEggs[index] && (
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                  <path d="M20,30 Q50,10 80,30" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                  <path d="M30,50 Q60,40 90,60" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                  <path d="M10,70 Q40,60 70,80" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="font-bangers text-lg text-comic-dark">
          🥚 {clickedEggs.filter(Boolean).length} / {eggs.length} EGGS CRACKED! 🥚
        </p>
      </div>
    </Section>
  );
};

export default EasterEggs;

import React from 'react';
import { Collectible } from '../types';
import Section from './Section';

interface CollectiblesProps {
  collectibles: Collectible[];
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'from-yellow-400 to-orange-500';
    case 'epic': return 'from-purple-400 to-pink-500';
    case 'rare': return 'from-blue-400 to-cyan-500';
    default: return 'from-gray-400 to-gray-500';
  }
};

const getRarityBorder = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'border-yellow-500';
    case 'epic': return 'border-purple-500';
    case 'rare': return 'border-blue-500';
    default: return 'border-gray-500';
  }
};

const Collectibles: React.FC<CollectiblesProps> = ({ collectibles }) => {
  return (
    <Section title="COLLECTIBLES" subtitle="Achievements, stats, and rare drops from my journey!">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectibles.map((item, index) => (
          <div key={index} className={`bg-gradient-to-br ${getRarityColor(item.rarity)} border-4 ${getRarityBorder(item.rarity)} rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-comic`}>
            <div className="bg-white bg-opacity-90 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bangers text-xl text-comic-dark">{item.name}</h3>
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                  item.rarity === 'legendary' ? 'bg-yellow-200 text-yellow-800' :
                  item.rarity === 'epic' ? 'bg-purple-200 text-purple-800' :
                  item.rarity === 'rare' ? 'bg-blue-200 text-blue-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {item.rarity}
                </span>
              </div>
              
              <div className="text-center mb-3">
                <div className="text-4xl font-bangers text-comic-red">{item.value}</div>
                <div className="text-sm text-gray-600 uppercase font-semibold">{item.type}</div>
              </div>
              
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Collectibles;

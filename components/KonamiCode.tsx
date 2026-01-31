import React, { useEffect, useState } from 'react';

const KonamiCode: React.FC = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, event.code].slice(-konamiCode.length);
        
        if (newSequence.join(',') === konamiCode.join(',')) {
          setActivated(true);
          // Reset after 5 seconds
          setTimeout(() => setActivated(false), 5000);
          return [];
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!activated) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 animate-pulse"></div>
      
      {/* Main effect */}
      <div className="relative z-10 text-center animate-bounce">
        <div className="font-bangers text-8xl text-comic-yellow mb-4 animate-pulse">
          🎮 CHEAT CODE ACTIVATED! 🎮
        </div>
        <div className="font-bangers text-4xl text-white mb-4">
          30 LIVES GRANTED!
        </div>
        <div className="font-bangers text-2xl text-comic-red">
          INFINITE COFFEE MODE: ON
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-comic-yellow rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          />
        ))}
      </div>

      {/* Matrix-style code rain */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400 font-mono text-sm animate-pulse"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {['01001000', '01100101', '01101100', '01101100', '01101111'].map((code, j) => (
              <div key={j} className="mb-2">{code}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KonamiCode;

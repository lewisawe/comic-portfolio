import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  emoji: string;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const emojis = ['⚡', '💻', '🚀', '⭐', '💡', '🔧', '🎯', '🏆'];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Reduce particles on mobile
    const particleCount = isMobile ? 5 : 15;
    
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: isMobile ? Math.random() * 15 + 8 : Math.random() * 20 + 10,
      speedX: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
      speedY: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));

    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Wrap around screen edges
        if (newX > window.innerWidth) newX = 0;
        if (newX < 0) newX = window.innerWidth;
        if (newY > window.innerHeight) newY = 0;
        if (newY < 0) newY = window.innerHeight;
        
        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animateParticles, isMobile ? 100 : 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on very small screens
  if (isMobile && window.innerWidth < 480) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute opacity-10 md:opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            fontSize: particle.size,
            transform: 'translate(-50%, -50%)',
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingParticles;

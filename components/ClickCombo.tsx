import React, { useState, useEffect } from 'react';

const ClickCombo: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [comboText, setComboText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      // Disable on mobile for performance
      if (isMobile) return;
      
      setClicks(prev => {
        const newClicks = prev + 1;
        
        // Reset combo after 2 seconds of no clicks
        setTimeout(() => {
          setClicks(0);
          setShowCombo(false);
        }, 2000);

        // Trigger different effects based on click count
        if (newClicks === 5) {
          setComboText('COMBO x5! 🔥');
          setShowCombo(true);
          triggerScreenShake();
        } else if (newClicks === 10) {
          setComboText('MEGA COMBO x10! ⚡');
          setShowCombo(true);
          triggerRainbowEffect();
        } else if (newClicks === 15) {
          setComboText('ULTRA COMBO x15! 💥');
          setShowCombo(true);
          triggerMatrixEffect();
        }

        return newClicks;
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMobile]);

  const triggerScreenShake = () => {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 500);
  };

  const triggerRainbowEffect = () => {
    document.body.style.filter = 'hue-rotate(0deg)';
    let hue = 0;
    const interval = setInterval(() => {
      hue += 10;
      document.body.style.filter = `hue-rotate(${hue}deg)`;
      if (hue >= 360) {
        clearInterval(interval);
        document.body.style.filter = '';
      }
    }, 50);
  };

  const triggerMatrixEffect = () => {
    const matrix = document.createElement('div');
    matrix.className = 'fixed inset-0 z-[9998] pointer-events-none';
    matrix.innerHTML = `
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="absolute inset-0 text-green-400 font-mono text-xs overflow-hidden">
        ${Array.from({ length: 50 }, () => 
          `<div class="absolute animate-pulse" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 2}s;">
            ${Math.random().toString(2).substr(2, 8)}
          </div>`
        ).join('')}
      </div>
    `;
    document.body.appendChild(matrix);
    setTimeout(() => document.body.removeChild(matrix), 3000);
  };

  if (!showCombo) return null;

  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none">
        <div className="font-bangers text-6xl text-comic-yellow animate-bounce text-center">
          {comboText}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
      `}</style>
    </>
  );
};

export default ClickCombo;

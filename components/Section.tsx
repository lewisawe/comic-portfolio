
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t-4 border-comic-dark ${className}`}>
      <div className="text-center mb-12">
        <h2 className="font-bangers text-5xl md:text-7xl text-comic-dark tracking-wider">{title}</h2>
        <p className="text-lg md:text-xl text-gray-600 mt-2">{subtitle}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;

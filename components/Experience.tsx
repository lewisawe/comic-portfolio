
import React, { useRef, useEffect } from 'react';
import { Experience as ExperienceType } from '../types';
import Section from './Section';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const ExperienceItem: React.FC<{ item: ExperienceType, isLeft: boolean }> = ({ item, isLeft }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!itemRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className={`mb-8 flex md:justify-between items-center w-full animate-on-scroll ${isLeft ? 'md:flex-row-reverse' : 'flex-row'}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-comic-red shadow-xl w-8 h-8 rounded-full"></div>
      <div className={`order-1 bg-white border-2 border-comic-dark rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${!isLeft ? 'md:ml-0 ml-10' : 'md:mr-0 mr-10' }`}>
        <h3 className="font-bold text-comic-blue text-xl">{item.role}</h3>
        <p className="text-sm font-semibold text-gray-800 mb-2">{item.company} | {item.period}</p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {item.description.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        container.classList.add('is-drawing');
        observer.unobserve(container);
      }
    }, { threshold: 0.1, rootMargin: "-200px 0px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="chronicles" title="THE CHRONICLES" subtitle="A Hero's Journey Through Time">
      <div className="container mx-auto w-full h-full">
        <div ref={timelineContainerRef} className="relative wrap overflow-hidden p-4 md:p-10 h-full timeline-container">
          {/* The line is now a ::before pseudo-element animated by CSS */}
          {experiences.map((item, index) => (
            <ExperienceItem key={index} item={item} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
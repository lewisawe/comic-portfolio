
import React, { useRef, useEffect } from 'react';
import { Certification } from '../types';
import Section from './Section';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationCard: React.FC<{ cert: Certification, index: number }> = ({ cert, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        if (!cardRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={cardRef} className="bg-white border-2 border-comic-dark p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style={{ animationDelay: `${index * 100}ms`}}>
            <cert.icon className="w-16 h-16 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-lg text-comic-blue">{cert.name}</h3>
                <p className="text-sm font-semibold text-gray-700">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
        </div>
    )
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Section id="accolades" title="ACCOLADES & HONORS" subtitle="Official Recognition of Heroic Prowess" className="bg-comic-yellow/10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;

import React, { useRef, useEffect } from 'react';
import { Project } from '../types';
import Section from './Section';
import { GithubIcon, ExternalLinkIcon } from '../constants';


interface ProjectsProps {
  projects: Project[];
}

const ZapHoverLink: React.FC<{ href: string; children: React.ReactNode; text: string; className?: string }> = ({ href, children, text, className }) => (
    <div className="relative group">
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-bangers text-lg bg-comic-yellow text-comic-dark px-2 py-0.5 border-2 border-comic-dark rounded-md transition-all duration-300 scale-0 group-hover:scale-100 origin-top rotate-6 whitespace-nowrap z-10">
            {text}
        </span>
        <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-bold ${className}`}>
            {children}
        </a>
    </div>
);

const TechStackVisual: React.FC<{ tags: string[] }> = ({ tags }) => {
  const colors = ['bg-comic-blue', 'bg-comic-red', 'bg-comic-yellow', 'bg-green-500', 'bg-purple-500'];
  
  return (
    <div className="h-48 bg-gradient-to-br from-comic-blue/20 to-comic-red/20 p-6 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-comic-dark rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-comic-yellow border-2 border-comic-dark transform rotate-45"></div>
        <div className="absolute top-1/2 right-8 w-8 h-8 bg-comic-red border-2 border-comic-dark rounded-full"></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="font-bangers text-4xl text-comic-dark mb-2">⚡</div>
        <div className="flex flex-wrap justify-center gap-1 max-w-full">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={tag} className={`${colors[index % colors.length]} text-white text-xs font-bold px-2 py-1 rounded-full border border-comic-dark`}>
              {tag}
            </span>
          ))}
        </div>
        {tags.length > 3 && (
          <div className="mt-2 text-xs text-comic-dark font-bold">
            +{tags.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
  <div ref={cardRef} className="bg-white border-4 border-comic-dark shadow-lg group overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 h-full flex flex-col animate-on-scroll">
    <div className="absolute top-4 right-4 bg-comic-yellow text-comic-dark font-bangers text-2xl px-3 py-1 border-2 border-comic-dark -rotate-12 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-10">
        POW!
    </div>
    <TechStackVisual tags={project.tags} />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bangers text-3xl text-comic-blue tracking-wide">{project.title}</h3>
      <p className="mt-2 mb-4 text-gray-700 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-comic-yellow text-comic-dark text-xs font-bold px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
       <div className="mt-auto pt-4 flex items-center gap-6">
          {project.liveUrl && (
            <ZapHoverLink href={project.liveUrl} text="BAM!" className="text-comic-blue hover:underline">
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Live Demo</span>
            </ZapHoverLink>
          )}
          {project.repoUrl && (
             <ZapHoverLink href={project.repoUrl} text="KAPOW!" className="text-comic-dark hover:underline">
              <GithubIcon className="w-5 h-5" />
              <span>View Code</span>
            </ZapHoverLink>
          )}
      </div>
    </div>
  </div>
);
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="missions" title="MISSIONS ACCOMPLISHED" subtitle="Victories in the Digital Realm" className="bg-comic-blue/10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {projects.map((project, index) => (
          <div key={index} style={{ transform: `rotate(${index % 2 === 0 ? 1 : -1.5}deg)` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
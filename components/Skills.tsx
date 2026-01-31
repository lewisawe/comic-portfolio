
import React, { useEffect, useRef, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Skill } from '../types';
import Section from './Section';

interface SkillsProps {
  skills: Skill[];
}

interface CustomTickProps {
    x?: number;
    y?: number;
    payload?: any;
    highlightedSkill: string | null;
}

const CustomizedAxisTick: React.FC<CustomTickProps> = ({ x, y, payload, highlightedSkill }) => {
    if (!payload) return null;
    const isHighlighted = payload.value === highlightedSkill;
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={4}
                textAnchor="middle"
                fill={isHighlighted ? '#fb5607' : '#1e1e1e'}
                fontFamily="Bangers"
                fontSize={isHighlighted ? 16 : 14}
                fontWeight={isHighlighted ? 'bold' : 'normal'}
                className="transition-all duration-300"
            >
                {payload.value}
            </text>
        </g>
    );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const chartData = skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  const chartRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const observerOptions = { rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Animate skills one by one
          if (entry.target === tagsRef.current) {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, skill]);
              }, index * 150);
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const refs = [chartRef.current, tagsRef.current];
    refs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [skills]);

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { text: 'LEGENDARY!', color: 'text-yellow-500' };
    if (level >= 80) return { text: 'HEROIC!', color: 'text-comic-red' };
    if (level >= 70) return { text: 'SUPER!', color: 'text-comic-blue' };
    return { text: 'RISING!', color: 'text-green-500' };
  };

  return (
    <Section id="superpowers" title="SUPERPOWERS" subtitle="The Arsenal of a DevOps Hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Enhanced Radar Chart */}
        <div ref={chartRef} className="w-full h-80 md:h-96 animate-on-scroll">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-comic-dark transform hover:scale-105 transition-all duration-300">
            <h3 className="font-bangers text-2xl text-comic-dark text-center mb-4">POWER LEVELS</h3>
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#1e1e1e" strokeWidth={2} className="opacity-30" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={<CustomizedAxisTick highlightedSkill={highlightedSkill} />} 
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const skill = skills.find(s => s.name === payload[0].payload.subject);
                      const levelInfo = getSkillLevel(payload[0].value as number);
                      return (
                        <div className="bg-comic-yellow border-2 border-comic-dark rounded-lg p-3 shadow-lg">
                          <p className="font-bangers text-comic-dark text-lg">
                            {payload[0].payload.subject}: {payload[0].value}%
                          </p>
                          <p className={`font-bangers text-sm ${levelInfo.color}`}>
                            {levelInfo.text}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Radar 
                  name="Proficiency" 
                  dataKey="A" 
                  stroke="#3a86ff" 
                  fill="#3a86ff" 
                  fillOpacity={0.3}
                  strokeWidth={3}
                  dot={{ fill: '#fb5607', strokeWidth: 2, r: 6 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced Skills Tags */}
        <div ref={tagsRef} className="flex flex-wrap justify-center gap-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          {animatedSkills.map((skill, index) => {
            const isHighlighted = skill.name === highlightedSkill;
            const levelInfo = getSkillLevel(skill.level);
            return (
              <div 
                key={skill.name} 
                className={`group relative flex items-center bg-white border-2 border-comic-dark p-4 rounded-lg shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-xl ${
                  isHighlighted ? 'scale-110 bg-comic-yellow border-comic-red' : 'hover:bg-comic-yellow'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
                onMouseEnter={() => setHighlightedSkill(skill.name)}
                onMouseLeave={() => setHighlightedSkill(null)}
              >
                {/* Comic Sound Effect */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`font-bangers text-sm px-2 py-1 bg-comic-red text-white rounded border-2 border-comic-dark ${levelInfo.color}`}>
                    {levelInfo.text}
                  </span>
                </div>

                {/* Icon with animation */}
                {skill.icon && (
                  <div className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <skill.icon className="w-6 h-6 mr-3 text-comic-blue group-hover:text-comic-red transition-colors duration-300" />
                  </div>
                )}
                
                {/* Skill name and level */}
                <div className="flex flex-col">
                  <span className="font-bangers text-lg text-comic-dark group-hover:text-comic-red transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="font-bangers text-sm text-comic-blue group-hover:text-comic-red transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-comic-red rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
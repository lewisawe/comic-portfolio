// Fix: Added a type-only import for React to resolve the 'Cannot find namespace React' error.
import type * as React from 'react';

export interface Skill {
  name: string;
  level: number;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  secretWeapons?: SecretWeapon[];
  sidekicks?: Sidekick[];
  villainGallery?: Villain[];
  trainingMontage?: Training[];
  easterEggs?: EasterEgg[];
  cheatCodes?: CheatCode[];
  bossBattles?: BossBattle[];
  collectibles?: Collectible[];
}

export interface SecretWeapon {
  name: string;
  category: string;
  powerLevel: number;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Sidekick {
  name: string;
  role: string;
  testimonial: string;
  avatar?: string;
  linkedIn?: string;
}

export interface Villain {
  name: string;
  challenge: string;
  solution: string;
  impact: string;
  defeated: boolean;
}

export interface Training {
  name: string;
  provider: string;
  completedDate: string;
  skills: string[];
  certificate?: string;
}

export interface EasterEgg {
  title: string;
  fact: string;
  emoji: string;
}

export interface CheatCode {
  command: string;
  description: string;
  category: string;
}

export interface BossBattle {
  title: string;
  project: string;
  challenge: string;
  strategy: string;
  outcome: string;
  xpGained: number;
}

export interface Collectible {
  name: string;
  type: 'achievement' | 'stat' | 'award';
  value: string | number;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}
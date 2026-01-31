
import React from 'react';
import { PortfolioData } from './types';

// Helper component for Icons
const Icon: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

// Define Icons
const AwsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#FF9900" d="M100 59.3c0 22.4-23.3 35.2-40.4 35.2-12.2 0-21.7-5.1-28.8-11.8l6.3-8.8c5.4 5.4 13.1 9.5 21.6 9.5 9.7 0 20.3-5.2 20.3-21.6v-2.3h-1.2c-5.9 4.7-14.2 8.3-23.7 8.3-20 0-33.8-15.6-33.8-35.8S24.2 0 46.1 0c9.1 0 17.5 3.3 23.2 7.9h.8v-7h10.9v42.2c0 1.2 0 2 .1 2.5h-.1zM46.2 14.2c-12.7 0-22.7 10.9-22.7 25.5s10 25.5 22.7 25.5 22.7-10.9 22.7-25.5-10-25.5-22.7-25.5z"/>
  </svg>
);

const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
    <path d="M3.733 8.362l2.955-1.63a.5.5 0 01.624 0l2.956 1.63a.5.5 0 01.232.433v3.409a.5.5 0 01-.232.433l-2.956 1.63a.5.5 0 01-.624 0L3.733 12.638a.5.5 0 01-.232-.434V8.795a.5.5 0 01.232-.433zm13.578-.425L14.355 6.3a.5.5 0 00-.624 0l-2.956 1.63a.5.5 0 00-.232.434v.31h4.428a.5.5 0 01.498.45l.13 1.43a.5.5 0 01-.498.55H8.795a.5.5 0 00-.498.55l-.13 1.43a.5.5 0 00.498.45h4.428a.5.5 0 01.498.55l.13 1.43a.5.5 0 01-.498.55H9.988v.31a.5.5 0 00.232.434l2.956 1.63a.5.5 0 00.624 0l2.956-1.63a.5.5 0 00.232-.434V8.37a.5.5 0 00-.232-.433z"/>
  </svg>
);

const DockerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
    <path d="M22.152 6.323a3.615 3.615 0 00-1.077-.732c-.41-.157-1.129-.365-1.9-.533-1.09-.236-2.12-.41-2.959-.514-1.25-.157-2.316-.21-3.216-.21s-1.966.053-3.216.21c-.838.104-1.868.278-2.959.514-.77.168-1.49.376-1.9.533a3.615 3.615 0 00-1.077.732c-.463.41-.786.974-.92 1.619-.133.645-.07 1.49.199 2.457.25.913.684 1.838 1.296 2.684.612.846 1.353 1.559 2.193 2.072.292.178.584.329.876.452v5.82c0 .41.348.748.774.748h8.84c.426 0 .774-.338.774-.748v-5.82c.292-.123.584-.274.876-.452.84-.513 1.581-1.226 2.193-2.072.612-.846 1.046-1.77 1.296-2.684.269-.966.332-1.812.199-2.457a3.02 3.02 0 00-.92-1.619zM8.618 13.5c-.77 0-1.393-.612-1.393-1.366 0-.754.623-1.366 1.393-1.366s1.393.612 1.393 1.366c0 .754-.623 1.366-1.393 1.366zm3.24 0c-.77 0-1.393-.612-1.393-1.366 0-.754.623-1.366 1.393-1.366s1.393.612 1.393 1.366c0 .754-.623 1.366-1.393 1.366zm3.24 0c-.77 0-1.393-.612-1.393-1.366 0-.754.623-1.366 1.393-1.366s1.393.612 1.393 1.366c0 .754-.623 1.366-1.393 1.366zm-6.48-2.732c-.77 0-1.393-.612-1.393-1.366s.623-1.366 1.393-1.366 1.393.612 1.393 1.366-.623 1.366-1.393 1.366zm3.24 0c-.77 0-1.393-.612-1.393-1.366s.623-1.366 1.393-1.366 1.393.612 1.393 1.366-.623 1.366-1.393 1.366z"/>
  </svg>
);

const TerraformIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
    <path d="M4.5 9.5l7-4 7 4v8l-7 4-7-4v-8z"/>
    <path d="M4.5 9.5v8"/>
    <path d="M18.5 9.5v8"/>
    <path d="M11.5 5.5v13"/>
    <path d="M4.5 13.5l7 4 7-4"/>
  </svg>
);

const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path fill="#3776AB" d="M12,18H9V12h3a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3H6v5h3a1,1,0,0,1,1,1v1H6a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h6Z"/>
    <path fill="#FFD43B" d="M12,6h3V12h-3a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H18V15h-3a1,1,0,0,1-1-1v-1H18a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3H12Z"/>
  </svg>
);

const AWSCertifiedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="#232F3E" d="M50,5A45,45,0,1,0,95,50,45,45,0,0,0,50,5ZM50,86.2A36.2,36.2,0,1,1,86.2,50,36.2,36.2,0,0,1,50,86.2Z"/>
        <path fill="#FF9900" d="M39.3,65.2a2.4,2.4,0,0,1-1.7-.7L25.9,52.8a2.4,2.4,0,1,1,3.4-3.4L39.3,59.5,70.7,28.1a2.4,2.4,0,1,1,3.4,3.4L41,64.5A2.4,2.4,0,0,1,39.3,65.2Z"/>
    </svg>
);


export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 10.5z" />
  </svg>
);


export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/lewisawe', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lewisawe', icon: LinkedinIcon },
];

export const portfolioData: PortfolioData = {
  name: 'LEWIS SAWE',
  title: 'Cloud & DevOps Engineer',
  bio: 'I am LEWIS SAWE, a Cloud & DevOps Engineer with 5+ years of AWS experience. My origin story? Struck by lightning while debugging Kubernetes in Kenya, I gained the power to see through complex cloud architectures and automate anything! Mission: build scalable, heroic applications!',
  skills: [
    { name: 'AWS', level: 95, icon: AwsIcon },
    { name: 'Kubernetes', level: 90, icon: KubernetesIcon },
    { name: 'Terraform', level: 88, icon: TerraformIcon },
    { name: 'Docker', level: 92, icon: DockerIcon },
    { name: 'CI/CD Pipelines', level: 85 },
    { name: 'Python', level: 80, icon: PythonIcon },
    { name: 'Monitoring', level: 82 },
    { name: 'Linux Administration', level: 88 },
    { name: 'Network Security', level: 85 },
  ],
  projects: [
    {
      title: 'AWS Game Challenge - Serverless Puzzle Game',
      description: 'Built a serverless puzzle game using AWS Lambda, API Gateway, and S3. Implemented real-time scoring with DynamoDB and deployed using CloudFormation for infrastructure as code. BOOM! Gaming meets cloud architecture!',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation'],
      repoUrl: 'https://github.com/lewisawe',
    },
    {
      title: 'Plants vs Zombies - Redis Challenge',
      description: 'Developed a real-time multiplayer tower defense game using Redis for state management and real-time communication. Deployed on AWS ECS with Terraform for infrastructure automation. KAPOW! Zombies don\'t stand a chance!',
      tags: ['Redis', 'Node.js', 'AWS ECS', 'Terraform', 'Docker'],
      repoUrl: 'https://github.com/lewisawe',
    },
    {
      title: 'Guardian Lambda - Security Automation',
      description: 'Developed a serverless security monitoring system using AWS Lambda and API Gateway. Automated threat detection and response with real-time alerting capabilities. WHAM! Security villains beware!',
      tags: ['AWS Lambda', 'Security', 'API Gateway', 'Python', 'CloudWatch'],
      repoUrl: 'https://github.com/lewisawe',
    },
    {
      title: 'Chaos Engineering with AWS FIS',
      description: 'Implemented chaos engineering practices using AWS Fault Injection Simulator to test system resilience. Automated failure scenarios and monitoring with CloudWatch dashboards. ZAP! Making systems unbreakable!',
      tags: ['AWS FIS', 'Chaos Engineering', 'CloudWatch', 'Python', 'Terraform'],
      repoUrl: 'https://github.com/lewisawe',
    },
    {
      title: 'Threads and Ink - E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with Next.js frontend and serverless backend. Features include payment integration, inventory management, and responsive design. SWOOSH! Commerce at the speed of light!',
      tags: ['Next.js', 'React', 'AWS Lambda', 'Stripe', 'Tailwind CSS'],
      repoUrl: 'https://github.com/lewisawe',
    },
  ],
  certifications: [
      {
          name: 'AWS Certified Security - Specialty',
          issuer: 'Amazon Web Services',
          date: 'Issued 2024',
          icon: AWSCertifiedIcon
      },
      {
          name: 'AWS Certified CloudOps Engineer - Associate',
          issuer: 'Amazon Web Services',
          date: 'Issued 2024',
          icon: AWSCertifiedIcon
      },
      {
          name: 'AWS Certified Solutions Architect - Associate',
          issuer: 'Amazon Web Services',
          date: 'Issued 2023',
          icon: AWSCertifiedIcon
      },
      {
          name: 'AWS Certified Developer - Associate',
          issuer: 'Amazon Web Services',
          date: 'Issued 2023',
          icon: AWSCertifiedIcon
      },
      {
          name: 'AWS Certified Data Engineer - Associate',
          issuer: 'Amazon Web Services',
          date: 'Issued 2024',
          icon: AWSCertifiedIcon
      },
      {
          name: 'Google Certified Cloud Engineer - Associate',
          issuer: 'Google Cloud',
          date: 'Issued 2024',
          icon: AWSCertifiedIcon
      },
      {
          name: 'Cisco Certified Network Associate (CCNA)',
          issuer: 'Cisco',
          date: 'Issued 2023',
          icon: KubernetesIcon
      },
      {
          name: 'AWS Certified AI Practitioner',
          issuer: 'Amazon Web Services',
          date: 'Issued 2024',
          icon: AWSCertifiedIcon
      },
      {
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: 'Issued 2022',
          icon: AWSCertifiedIcon
      }
  ],
  blogPosts: [
      {
          title: 'Creating a Flood Awareness PSA with AWS Nova Canvas',
          date: 'Aug 15, 2024',
          excerpt: 'Learn how to leverage AWS Nova Canvas for creating impactful public service announcements and visual content for social good. HEROIC content creation with AI!',
          url: 'https://lewisawe.hashnode.dev/creating-a-flood-awareness-psa-with-aws-nova-canvas'
      },
      {
          title: 'I Built Hackerman with Amazon Q',
          date: 'Jul 28, 2024',
          excerpt: 'A deep dive into building an AI-powered assistant using Amazon Q, exploring its capabilities and practical implementation. The ultimate coding sidekick!',
          url: 'https://lewisawe.hashnode.dev/i-built-hackerman-with-amazon-q'
      },
      {
          title: 'AWS Cost Optimization: Stop Burning Money in the Cloud',
          date: 'Jun 10, 2024',
          excerpt: 'Practical strategies to reduce your AWS bill without sacrificing performance. Learn about right-sizing, reserved instances, and cost monitoring. Your wallet will thank you!',
          url: 'https://lewisawe.hashnode.dev/'
      },
  ],
  secretWeapons: [
    { name: 'AWS', category: 'Cloud Platform', powerLevel: 95, description: 'Master of the cloud realm, wielding infinite scalability!', icon: AwsIcon },
    { name: 'Kubernetes', category: 'Orchestration', powerLevel: 90, description: 'Container commander, orchestrating digital armies!', icon: KubernetesIcon },
    { name: 'Terraform', category: 'Infrastructure', powerLevel: 88, description: 'Infrastructure wizard, creating worlds with code!', icon: TerraformIcon },
    { name: 'Docker', category: 'Containerization', powerLevel: 92, description: 'Packaging master, containing chaos into order!', icon: DockerIcon },
    { name: 'Python', category: 'Programming', powerLevel: 80, description: 'Serpent of automation, striking with precision!', icon: PythonIcon },
  ],
  sidekicks: [
    {
      name: 'Sarah Chen',
      role: 'Frontend Wizard',
      testimonial: 'Lewis transformed our chaotic deployment process into a smooth, automated pipeline. His cloud expertise saved us countless hours!',
      avatar: 'https://picsum.photos/seed/sarah/150/150',
      linkedIn: 'https://linkedin.com/in/sarahchen'
    },
    {
      name: 'Mike Rodriguez',
      role: 'DevOps Ally',
      testimonial: 'Working with Lewis on the AWS migration was incredible. He made complex cloud architecture seem effortless!',
      avatar: 'https://picsum.photos/seed/mike/150/150',
      linkedIn: 'https://linkedin.com/in/mikerodriguez'
    }
  ],
  villainGallery: [
    {
      name: 'The Downtime Dragon',
      challenge: 'System outages causing 6+ hours of downtime monthly',
      solution: 'Implemented comprehensive monitoring with CloudWatch and automated failover systems',
      impact: 'Reduced downtime by 95% and achieved 99.8% uptime',
      defeated: true
    },
    {
      name: 'Cost Chaos Monster',
      challenge: 'AWS bills spiraling out of control with unused resources',
      solution: 'Deployed cost optimization strategies and automated resource cleanup',
      impact: 'Slashed cloud costs by 35% while improving performance',
      defeated: true
    },
    {
      name: 'Security Shadow',
      challenge: 'Vulnerable systems with inconsistent security practices',
      solution: 'Implemented multi-layered security framework and compliance automation',
      impact: 'Zero security incidents and full compliance achievement',
      defeated: true
    }
  ],
  trainingMontage: [
    {
      name: 'AWS Solutions Architect Bootcamp',
      provider: 'AWS Training',
      completedDate: '2023',
      skills: ['Cloud Architecture', 'Cost Optimization', 'Security Best Practices'],
      certificate: 'https://aws.amazon.com/certification/'
    },
    {
      name: 'Kubernetes Administration',
      provider: 'Linux Foundation',
      completedDate: '2023',
      skills: ['Container Orchestration', 'Cluster Management', 'Service Mesh'],
      certificate: 'https://training.linuxfoundation.org/'
    },
    {
      name: 'Terraform Infrastructure as Code',
      provider: 'HashiCorp',
      completedDate: '2024',
      skills: ['Infrastructure Automation', 'State Management', 'Module Development']
    }
  ],
  easterEggs: [
    { title: 'Coffee Powered', fact: 'Runs on exactly 4.7 cups of coffee per day', emoji: '☕' },
    { title: 'Bug Whisperer', fact: 'Can debug code just by staring at it intensely', emoji: '🐛' },
    { title: 'Cloud Native', fact: 'Dreams in YAML and thinks in containers', emoji: '☁️' },
    { title: 'Automation Addict', fact: 'Has automated his morning coffee routine', emoji: '🤖' },
    { title: 'Kenyan Roots', fact: 'Brings East African problem-solving magic to tech', emoji: '🇰🇪' }
  ],
  cheatCodes: [
    { command: 'kubectl get pods --all-namespaces', description: 'See all running containers across your cluster', category: 'Kubernetes' },
    { command: 'aws s3 sync . s3://bucket --delete', description: 'Sync local files to S3 and remove deleted files', category: 'AWS' },
    { command: 'terraform plan -out=plan.out', description: 'Preview infrastructure changes before applying', category: 'Terraform' },
    { command: 'docker system prune -a', description: 'Clean up all unused Docker resources', category: 'Docker' }
  ],
  bossBattles: [
    {
      title: 'The Great Migration',
      project: 'Enterprise Cloud Migration',
      challenge: 'Migrate 50+ legacy applications to AWS with zero downtime',
      strategy: 'Blue-green deployment with automated rollback mechanisms',
      outcome: 'Successful migration with 99.9% uptime maintained',
      xpGained: 1500
    },
    {
      title: 'Chaos Engineering Challenge',
      project: 'System Resilience Testing',
      challenge: 'Build fault-tolerant systems that survive random failures',
      strategy: 'Implemented chaos engineering with AWS FIS and comprehensive monitoring',
      outcome: 'System resilience improved by 300%',
      xpGained: 1200
    }
  ],
  collectibles: [
    { name: 'AWS Certifications', type: 'achievement', value: 9, description: 'Cloud mastery badges collected', rarity: 'legendary' },
    { name: 'Systems Uptime', type: 'stat', value: '99.8%', description: 'Average system availability maintained', rarity: 'epic' },
    { name: 'Cost Savings', type: 'stat', value: '35%', description: 'Average cloud cost reduction achieved', rarity: 'rare' },
    { name: 'Coffee Consumed', type: 'stat', value: '1,715', description: 'Cups of coffee that powered the code', rarity: 'common' },
    { name: 'Bugs Squashed', type: 'achievement', value: '∞', description: 'No bug is safe from the debugger', rarity: 'legendary' }
  ],
  experience: [
    {
      role: 'Network and Systems Administrator',
      company: 'Eloho',
      period: 'May 2024 - Present',
      description: [
        'Architected and deployed scalable network infrastructure, achieving 99.8% uptime across enterprise systems - HEROIC reliability!',
        'Reduced incident response time by 40% through proactive monitoring and rapid issue resolution protocols.',
        'Implemented comprehensive security and monitoring solutions, resulting in 25% improvement in system reliability.',
        'Led monthly system upgrade cycles and conducted technical training sessions for cross-functional IT teams.',
      ],
    },
    {
      role: 'IT Support Technician',
      company: 'Elpris LTD, Eldoret, Kenya',
      period: 'January 2022 - April 2024',
      description: [
        'Designed and implemented automated monitoring systems, reducing system downtime by 60% - POW!',
        'Deployed multi-layered security frameworks to safeguard sensitive client data and ensure compliance.',
        'Managed relationships with 15+ enterprise and SMB clients, maintaining 95% client satisfaction rate.',
        'Delivered tailored IT solutions for educational institutions and small businesses, improving operational efficiency by 30%.',
      ],
    },
    {
      role: 'DevOps Engineer',
      company: 'HNG Internship (Remote)',
      period: 'November 2022 - December 2022',
      description: [
        'Optimized AWS resource allocation and cost management, achieving 35% reduction in cloud infrastructure expenses - KAPOW!',
        'Streamlined deployment workflows using Docker containerization and automated CI/CD pipelines.',
        'Maintained 99.5% system uptime while implementing performance optimizations.',
        'Collaborated with distributed development teams on critical infrastructure automation projects.',
      ],
    },
  ],
};
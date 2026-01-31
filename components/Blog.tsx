
import React, { useRef, useEffect } from 'react';
import { BlogPost } from '../types';
import Section from './Section';

interface BlogProps {
  blogPosts: BlogPost[];
}

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
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
        <div ref={cardRef} className="bg-white border-4 border-comic-dark shadow-lg p-6 flex flex-col h-full transform -rotate-1 hover:rotate-0 transition-transform duration-300 animate-on-scroll">
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <h3 className="font-bangers text-3xl text-comic-blue tracking-wide mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="font-bold text-comic-red hover:underline self-start mt-auto">
                Read Full Dispatch &rarr;
            </a>
        </div>
    )
}

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <Section id="dispatches" title="FIELD DISPATCHES" subtitle="Notes from the Front Lines of Technology">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} style={{ transform: `rotate(${index % 2 === 0 ? 1.5 : -1}deg)` }}>
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
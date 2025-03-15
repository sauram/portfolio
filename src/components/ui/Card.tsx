import React, { memo } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  title: string;
  description: string;
  link?: string;
  image?: string;
  icon?: React.ReactNode;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
  'data-aos'?: string;
  'data-aos-delay'?: number;
}

export const Card = memo(function Card({
  title,
  description,
  link,
  image,
  icon,
  tags,
  githubUrl,
  liveUrl,
  className = '',
  ...props
}: CardProps) {
  // Handle clicks on links when the card is a link itself
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  // Generate links based on whether the whole card is a link
  const renderLinks = () => {
    if (!githubUrl && !liveUrl) return null;
    
    return (
      <div className="flex items-center gap-4 mt-auto">
        {githubUrl && (
          link ? (
            // If card is a link, use button with onClick
            <button
              onClick={(e) => handleLinkClick(e, githubUrl)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              GitHub
            </button>
          ) : (
            // Otherwise use regular anchor
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )
        )}
        
        {liveUrl && (
          link ? (
            // If card is a link, use button with onClick
            <button
              onClick={(e) => handleLinkClick(e, liveUrl)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Live Demo
            </button>
          ) : (
            // Otherwise use regular anchor
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Live Demo
            </a>
          )
        )}
      </div>
    );
  };

  const cardContent = (
    <>
      {image && (
        <div className="aspect-video overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      )}

      <div className="p-6">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {renderLinks()}

        {link && !image && (
          <div className="mt-4 text-primary flex items-center text-sm font-medium">
            Read More
            <FaArrowRight className="ml-2 h-4 w-4" />
          </div>
        )}
      </div>
    </>
  );

  // Common class names
  const cardClassName = `relative bg-secondary/10 border border-border/50 rounded-lg overflow-hidden transition-all hover:shadow-lg ${
    link ? 'cursor-pointer' : ''
  } ${className}`;
  
  // If we have a link, render a Link component, otherwise a div
  if (link) {
    return (
      <Link href={link} className={cardClassName} {...props}>
        {cardContent}
      </Link>
    );
  }
  
  return (
    <div className={cardClassName} {...props}>
      {cardContent}
    </div>
  );
}); 
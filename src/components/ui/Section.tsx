import React, { memo } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Section = memo(function Section({ 
  id, 
  className = '',
  children,
  fullWidth = false
}: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-6xl'}`}>
        {children}
      </div>
    </section>
  );
});

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  'data-aos'?: string;
  'data-aos-delay'?: number;
}

export const SectionHeader = memo(function SectionHeader({ 
  title, 
  subtitle, 
  centered = false,
  ...props 
}: SectionHeaderProps) {
  return (
    <div 
      className={`mb-10 ${centered ? 'text-center' : ''}`}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}); 
'use client';

import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, href: 'https://github.com/saurabhsinghgautam', label: 'GitHub' },
    { icon: <FaLinkedinIn className="h-5 w-5" />, href: 'https://linkedin.com/in/saurabhsinghgautam', label: 'LinkedIn' },
    { icon: <FaTwitter className="h-5 w-5" />, href: 'https://twitter.com/saurabhsingh', label: 'Twitter' },
    { icon: <FaEnvelope className="h-5 w-5" />, href: 'mailto:saurabh@example.com', label: 'Email' }
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold">
              Saurabh Singh Gautam
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Software engineer specializing in frontend development with a passion for clean code.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/20 pt-8">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {year} Saurabh Singh Gautam
          </p>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</Link>
            <Link href="/experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMenu, IoClose } from 'react-icons/io5';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        hasScrolled || isMenuOpen ? 'bg-background/95 border-b border-border' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold">
            Saurabh
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="text-sm font-medium text-primary"
            >
              Resume
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <IoClose className="h-5 w-5" aria-hidden="true" />
            ) : (
              <IoMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 ${
                    pathname === item.href 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/resume.pdf"
                target="_blank" 
                className="py-2 text-primary font-medium"
              >
                Resume
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 
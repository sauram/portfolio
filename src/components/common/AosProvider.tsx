'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AosProviderProps {
  children: React.ReactNode;
}

export function AosProvider({ children }: AosProviderProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return <>{children}</>;
} 
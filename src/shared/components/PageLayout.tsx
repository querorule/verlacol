import type { ReactNode } from 'react';
import { useThemeState } from '../hooks/useThemeState';
import Navbar from '../../ui/components/layout/Navbar/Navbar';
import FooterSection from '../../ui/pages/home/components/sections/FooterSection';

// Layout reutilizable para páginas del sitio
// Ubicación: src/shared/components/PageLayout.tsx

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  const { isDark } = useThemeState();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} ${className}`}>
      <Navbar />
      <main className="pt-24 pb-16">
        {children}
      </main>
      <FooterSection />
    </div>
  );
}

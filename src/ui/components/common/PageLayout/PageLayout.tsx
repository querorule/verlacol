import type { PageLayoutProps } from '../types';
import { gradientClasses } from '../styles';

// Componente PageLayout reutilizable para mantener consistencia en todas las páginas
// Ubicación: src/ui/components/common/PageLayout/PageLayout.tsx

export default function PageLayout({ children, gradient = 'blue' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen ${gradientClasses[gradient]}`}>
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}

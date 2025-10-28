import type { CardProps } from '../types';
import { cardVariantClasses } from '../styles';

// Componente Card reutilizable siguiendo principio de responsabilidad única
// Ubicación: src/ui/components/common/Card/Card.tsx

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseClasses = 'bg-white rounded-lg p-6';

  return (
    <div className={`${baseClasses} ${cardVariantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

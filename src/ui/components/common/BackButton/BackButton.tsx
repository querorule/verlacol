import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BackButtonProps } from '../types';
import { backButtonColorClasses } from '../styles';

// Componente BackButton reutilizable para navegación consistente
// Ubicación: src/ui/components/common/BackButton/BackButton.tsx

export default function BackButton({ 
  to = '/', 
  label = 'Volver al Inicio',
  color = 'purple' 
}: BackButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center ${backButtonColorClasses[color]} mb-8 font-semibold`}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      {label}
    </Link>
  );
}

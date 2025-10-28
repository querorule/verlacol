// Tipos para componentes comunes
// Ubicación: src/ui/components/common/types/index.ts

import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface PageLayoutProps {
  children: ReactNode;
  gradient?: 'blue' | 'purple' | 'green';
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated';
}

export interface BackButtonProps {
  to?: string;
  label?: string;
  color?: 'purple' | 'green' | 'blue';
}

export interface IconBadgeProps {
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'indigo' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export interface LoadingFallbackProps {
  message?: string;
}

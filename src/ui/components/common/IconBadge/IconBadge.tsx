import { memo } from 'react';
import type { IconBadgeProps } from '../types';
import { iconBadgeColorClasses, iconBadgeSizeClasses } from '../styles';

// Componente IconBadge optimizado con React.memo para evitar re-renders innecesarios
// Ubicación: src/ui/components/common/IconBadge/IconBadge.tsx

function IconBadge({ icon: Icon, color = 'blue', size = 'md' }: IconBadgeProps) {
  return (
    <div className={`flex items-center justify-center ${iconBadgeSizeClasses[size].container} ${iconBadgeColorClasses[color]} rounded-full`}>
      <Icon className={iconBadgeSizeClasses[size].icon} />
    </div>
  );
}

export default memo(IconBadge);

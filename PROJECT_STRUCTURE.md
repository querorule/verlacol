# Estructura del Proyecto

Este proyecto sigue **Arquitectura Hexagonal** y **Domain-Driven Design (DDD)** con las mejores prácticas de desarrollo.

## 📁 Estructura de Carpetas

\`\`\`
src/
├── application/          # Capa de aplicación (lógica de negocio)
│   ├── hooks/           # Custom hooks de React
│   └── services/        # Servicios de aplicación
│
├── domain/              # Capa de dominio (entidades y reglas de negocio)
│   ├── entities/        # Entidades del dominio
│   └── interfaces/      # Interfaces y contratos
│
├── infrastructure/      # Capa de infraestructura (implementaciones externas)
│   ├── api/            # Cliente HTTP y configuración de API
│   ├── config/         # Configuración de la aplicación
│   └── utils/          # Utilidades de infraestructura
│
├── ui/                  # Capa de UI (interfaz de usuario)
│   ├── components/     # Componentes reutilizables
│   │   └── common/     # Componentes comunes
│   │       ├── types/  # Interfaces de componentes
│   │       ├── styles/ # Estilos constantes
│   │       └── *.tsx   # Componentes
│   └── pages/          # Páginas de la aplicación
│       ├── home/       # Módulo Home
│       ├── about/      # Módulo About
│       └── contact/    # Módulo Contact (con types.ts)
│
├── router/             # Configuración de rutas
│   ├── index.tsx       # Router principal con lazy loading
│   └── routes.config.ts # Constantes de rutas
│
├── shared/             # Recursos compartidos
│   ├── assets/         # Imágenes, iconos, etc.
│   ├── constants/      # Constantes globales
│   ├── styles/         # Estilos globales (TailwindCSS)
│   └── types/          # Tipos TypeScript compartidos
│
└── main.tsx            # Punto de entrada de la aplicación
\`\`\`

## 🎯 Principios Aplicados

### 1. **Arquitectura Hexagonal (Puertos y Adaptadores)**
- Separación clara entre lógica de negocio y detalles de implementación
- Facilita testing y mantenibilidad
- Independencia de frameworks y librerías externas

### 2. **SOLID**
- **S**: Responsabilidad Única - cada componente tiene una sola responsabilidad
- **O**: Abierto/Cerrado - componentes extensibles sin modificación
- **L**: Sustitución de Liskov - componentes intercambiables
- **I**: Segregación de Interfaces - interfaces específicas
- **D**: Inversión de Dependencias - dependemos de abstracciones

### 3. **Clean Code**
- Nombres descriptivos y significativos
- Funciones pequeñas y enfocadas
- Comentarios solo donde la lógica no es obvia
- Código autodocumentado

### 4. **DDD (Domain-Driven Design)**
- Organización por dominios de negocio
- Separación de conceptos de dominio
- Lenguaje ubicuo en el código

## ⚡ Optimizaciones Implementadas

### 1. **Lazy Loading**
- Páginas cargadas bajo demanda
- Reducción del bundle inicial
- Mejor rendimiento de carga

### 2. **React.memo**
- Componentes optimizados para evitar re-renders innecesarios
- `IconBadge`, `ContactInfo`, `ContactForm` memoizados

### 3. **Componentes Reutilizables**
- `PageLayout` - Layout consistente para todas las páginas
- `Card` - Tarjetas reutilizables con variantes
- `BackButton` - Navegación consistente
- `IconBadge` - Badges de iconos con estilos predefinidos
- `LoadingFallback` - Indicador de carga

### 4. **Barrel Exports**
- Imports simplificados y organizados
- Mejor experiencia de desarrollo
- Fácil mantenimiento

## 🛣️ Sistema de Rutas

Las rutas están centralizadas en `src/router/routes.config.ts` para:
- Evitar strings duplicados
- Facilitar refactorización
- Type-safety con TypeScript

## 🎨 Estilos

- **TailwindCSS v4** - Framework de utilidades
- Estilos globales en `src/shared/styles/`
- Estilos constantes separados en `src/ui/components/common/styles/`
- Componentes usan clases utilitarias de Tailwind

### Separación de Estilos

Los estilos constantes están centralizados en archivos dedicados:
- `gradientClasses` - Gradientes de fondo para páginas
- `cardVariantClasses` - Variantes de sombra para tarjetas
- `backButtonColorClasses` - Colores para botones de navegación
- `iconBadgeColorClasses` y `iconBadgeSizeClasses` - Estilos de badges

Beneficios:
- **Consistencia**: Estilos reutilizables en toda la aplicación
- **Mantenibilidad**: Cambios centralizados
- **Type-safety**: TypeScript valida las opciones disponibles

## 📝 Tipos e Interfaces

Los tipos están separados del código de componentes:

### `src/ui/components/common/types/`
- Interfaces para todos los componentes comunes
- Exportación centralizada desde `index.ts`
- Importación con `import type` para optimizar bundle

### `src/ui/pages/[module]/types.ts`
- Tipos específicos de cada módulo
- Interfaces para componentes internos del módulo

Beneficios:
- **Claridad**: Código de componentes más limpio
- **Reutilización**: Tipos compartibles entre componentes
- **Bundle size**: `import type` no genera código en producción

## 🔐 Seguridad

- Validación de inputs en formularios
- Sanitización de datos
- No exposición de información sensible

## 📦 Gestión de Estado

- React hooks locales para estado de componentes
- Preparado para agregar estado global (Context API, Zustand, Redux)

## 🧪 Testing (Preparado)

La estructura facilita testing:
- Unit tests para servicios y utilidades
- Component tests para UI
- Integration tests para flujos completos

## 📝 Convenciones de Código

1. **Componentes**: PascalCase (ej: `PageLayout.tsx`)
2. **Hooks**: camelCase con prefijo `use` (ej: `useAuth.ts`)
3. **Utilidades**: camelCase (ej: `formatDate.ts`)
4. **Constantes**: UPPER_SNAKE_CASE (ej: `API_URL`)
5. **Tipos/Interfaces**: PascalCase (ej: `UserData`)

## 🚀 Próximos Pasos Sugeridos

1. Implementar manejo de errores global
2. Agregar testing (Jest + React Testing Library)
3. Implementar sistema de estado global si es necesario
4. Agregar internacionalización (i18n)
5. Implementar PWA capabilities
6. Agregar CI/CD pipeline

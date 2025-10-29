// Configuración centralizada de rutas siguiendo mejores prácticas
// Ubicación: src/router/routes.config.ts

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRICING: '/precios',
  
  // Legal Routes
  LEGAL: {
    PROTECCION_USUARIOS: '/legal/proteccion-usuarios',
    PROTECCION_INFANTIL: '/legal/proteccion-infantil',
    NORMATIVIDAD: '/legal/normatividad',
    PROTECCION_DATOS: '/legal/proteccion-datos',
    INTERNET_SANO: '/legal/internet-sano',
    FILTRADO: '/legal/filtrado',
    SEGURIDAD: '/legal/seguridad',
    COMPARADOR_TARIFAS: '/legal/comparador-tarifas',
  }
} as const;

export type RouteKey = keyof typeof ROUTES;

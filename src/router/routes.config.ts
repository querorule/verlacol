// Configuración centralizada de rutas siguiendo mejores prácticas
// Ubicación: src/router/routes.config.ts

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

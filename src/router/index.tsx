import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';
import { ROUTES } from './routes.config';
import { LoadingFallback } from '../ui/components/common';

// Lazy loading de páginas para optimizar tiempos de carga
// Ubicación: src/router/index.tsx
const Home = lazy(() => import('../ui/pages/home'));
const About = lazy(() => import('../ui/pages/about'));
const Contact = lazy(() => import('../ui/pages/contact'));

// Wrapper para aplicar Suspense a las rutas lazy
const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: withSuspense(Home),
  },
  {
    path: ROUTES.ABOUT,
    element: withSuspense(About),
  },
  {
    path: ROUTES.CONTACT,
    element: withSuspense(Contact),
  },
]);

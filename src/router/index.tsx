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
const Pricing = lazy(() => import('../ui/pages/pricing'));

// Legal Pages
const ProteccionUsuarios = lazy(() => import('../ui/pages/legal/proteccion-usuarios'));
const ProteccionInfantil = lazy(() => import('../ui/pages/legal/proteccion-infantil'));
const Normatividad = lazy(() => import('../ui/pages/legal/normatividad'));
const ProteccionDatos = lazy(() => import('../ui/pages/legal/proteccion-datos'));
const InternetSano = lazy(() => import('../ui/pages/legal/internet-sano'));
const Filtrado = lazy(() => import('../ui/pages/legal/filtrado'));
const Seguridad = lazy(() => import('../ui/pages/legal/seguridad'));
const ComparadorTarifas = lazy(() => import('../ui/pages/legal/comparador-tarifas'));

// Services Pages
const Fiber = lazy(() => import('../ui/pages/services/fiber'));
const TV = lazy(() => import('../ui/pages/services/tv'));
const FibraResidencial = lazy(() => import('../ui/pages/services/fibra-residencial'));
const PlanesEmpresariales = lazy(() => import('../ui/pages/services/planes-empresariales'));
const TVDigital = lazy(() => import('../ui/pages/services/tv-digital'));

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
  {
    path: ROUTES.PRICING,
    element: withSuspense(Pricing),
  },
  // Legal Routes
  {
    path: ROUTES.LEGAL.PROTECCION_USUARIOS,
    element: withSuspense(ProteccionUsuarios),
  },
  {
    path: ROUTES.LEGAL.PROTECCION_INFANTIL,
    element: withSuspense(ProteccionInfantil),
  },
  {
    path: ROUTES.LEGAL.NORMATIVIDAD,
    element: withSuspense(Normatividad),
  },
  {
    path: ROUTES.LEGAL.PROTECCION_DATOS,
    element: withSuspense(ProteccionDatos),
  },
  {
    path: ROUTES.LEGAL.INTERNET_SANO,
    element: withSuspense(InternetSano),
  },
  {
    path: ROUTES.LEGAL.FILTRADO,
    element: withSuspense(Filtrado),
  },
  {
    path: ROUTES.LEGAL.SEGURIDAD,
    element: withSuspense(Seguridad),
  },
  {
    path: ROUTES.LEGAL.COMPARADOR_TARIFAS,
    element: withSuspense(ComparadorTarifas),
  },
  // Services Routes
  {
    path: ROUTES.SERVICES.FIBER,
    element: withSuspense(Fiber),
  },
  {
    path: ROUTES.SERVICES.TV,
    element: withSuspense(TV),
  },
  {
    path: ROUTES.SERVICES.FIBRA_RESIDENCIAL,
    element: withSuspense(FibraResidencial),
  },
  {
    path: ROUTES.SERVICES.PLANES_EMPRESARIALES,
    element: withSuspense(PlanesEmpresariales),
  },
  {
    path: ROUTES.SERVICES.TV_DIGITAL,
    element: withSuspense(TVDigital),
  },
]);

import { Link } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Users,
  Target,
  DollarSign,
  Shield,
  FileText,
  AlertCircle,
  Lock,
  Globe,
  Filter,
} from "lucide-react";
import { ROUTES } from "../../../../../router/routes.config";

// Footer section with newsletter, brand info, links and social icons
// Ubicación: src/ui/pages/home/components/FooterSection.tsx

export default function FooterSection() {
  return (
    <footer className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Footer Top - Newsletter */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Mantente{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              actualizado
            </span>
          </h3>
          <p className="text-gray-400 mb-6">
            Recibe las últimas novedades y tips directamente en tu inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <button className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 mb-12" />

        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
                    VERLACOL
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    by Modern Teams
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              La plataforma más productiva para equipos modernos. Colabora
              mejor, trabaja más rápido, logra más.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                🚀 Fast
              </span>
              <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-300">
                🔒 Secure
              </span>
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                ⚡ Powerful
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-linear-to-b from-purple-500 to-transparent rounded-full"></div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Producto
              </h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Zap className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Ventajas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <DollarSign className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Precios
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Shield className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Seguridad
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-linear-to-b from-pink-500 to-transparent rounded-full"></div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Empresa
              </h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Users className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Nosotros
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Novedades
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Target className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Carreras
                  </span>
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <svg
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Contacto
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-transparent rounded-full"></div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Legal
              </h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <AlertCircle className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Indicadores Protección Usuarios
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.NORMATIVIDAD}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <FileText className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Normatividad
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_DATOS}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Lock className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Política de Datos Personales
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.INTERNET_SANO}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Globe className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Internet Sano
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.FILTRADO}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Filter className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Mecanismos de Filtrado
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.SEGURIDAD}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Shield className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Seguridad en la Red
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.COMPARADOR_TARIFAS}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <DollarSign className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Comparador de Tarifas
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_INFANTIL}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  <Shield className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform text-sm">
                    Protección Infantil
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2025 VerlaCol. Todos los derechos reservados.
            </p>
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Todos los sistemas operativos</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

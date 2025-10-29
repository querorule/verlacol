import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, FileText, Globe, Filter, Lock, DollarSign, AlertCircle } from 'lucide-react';
import { useState } from 'react';

// Navbar moderno con diseño tipo Superhuman
// Ubicación: src/ui/components/layout/Navbar/Navbar.tsx

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-wider hover:text-purple-400 transition-colors">
            VERLACOL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              Inicio
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
              Contacto
            </Link>
            {/* Modern Legal Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm group/navitem relative"
              >
                <span className="relative">
                  Legal y Regulatorio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover/navitem:w-full"></span>
                </span>
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[580px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                  {/* Header decorativo */}
                  <div className="relative px-6 py-4 bg-linear-to-r from-purple-600/10 to-pink-600/10 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-sm">Legal y Regulatorio</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Cumplimiento y normativas</p>
                      </div>
                      <Shield className="w-5 h-5 text-purple-400 opacity-60" />
                    </div>
                  </div>

                  {/* Grid de 2 columnas */}
                  <div className="grid grid-cols-2 gap-2 p-3">
                    {/* Columna 1 - Protección */}
                    <div className="space-y-1">
                      <div className="px-3 py-1.5">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Protección</span>
                      </div>
                      
                      <Link 
                        to="/legal/proteccion-usuarios" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-purple-500/10 group-hover/item:bg-purple-500/20 transition-colors">
                          <AlertCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Protección Usuarios
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Indicadores y métricas</p>
                        </div>
                      </Link>

                      <Link 
                        to="/legal/proteccion-datos" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors">
                          <Lock className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Datos Personales
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Política de tratamiento</p>
                        </div>
                      </Link>

                      <Link 
                        to="/legal/seguridad" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors">
                          <Shield className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Seguridad en la Red
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Protocolos y medidas</p>
                        </div>
                      </Link>
                    </div>

                    {/* Columna 2 - Regulación */}
                    <div className="space-y-1">
                      <div className="px-3 py-1.5">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Regulación</span>
                      </div>

                      <Link 
                        to="/legal/normatividad" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-pink-500/10 group-hover/item:bg-pink-500/20 transition-colors">
                          <FileText className="w-4 h-4 text-pink-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Normatividad
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Marco legal vigente</p>
                        </div>
                      </Link>

                      <Link 
                        to="/legal/internet-sano" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                          <Globe className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Internet Sano
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Uso responsable</p>
                        </div>
                      </Link>

                      <Link 
                        to="/legal/filtrado" 
                        className="group/item flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-orange-500/10 group-hover/item:bg-orange-500/20 transition-colors">
                          <Filter className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                            Mecanismos de Filtrado
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Control de contenido</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Footer con enlace destacado */}
                  <div className="px-3 pb-3 pt-1">
                    <Link 
                      to="/legal/comparador-tarifas" 
                      className="group/featured flex items-center justify-between px-4 py-3 rounded-xl bg-linear-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 hover:border-purple-500/40 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <DollarSign className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Comparador de Tarifas</div>
                          <p className="text-xs text-gray-400">Encuentra la mejor opción</p>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-purple-400 group-hover/featured:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Decorative gradient border */}
                  <div className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
            >
              Comenzar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Moderno */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-6 pb-6 space-y-3">
            {/* Enlaces principales */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-medium">Inicio</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-medium">Nosotros</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">Contacto</span>
            </Link>

            {/* Legal y Regulatorio - Expandible */}
            <div className="space-y-2">
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Shield className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="font-medium">Legal y Regulatorio</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLegalOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenú Legal */}
              <div className={`overflow-hidden transition-all duration-300 ${isLegalOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 py-2">
                  <Link
                    to="/legal/proteccion-usuarios"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Protección Usuarios</span>
                  </Link>
                  <Link
                    to="/legal/normatividad"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Normatividad</span>
                  </Link>
                  <Link
                    to="/legal/proteccion-datos"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Datos Personales</span>
                  </Link>
                  <Link
                    to="/legal/internet-sano"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Internet Sano</span>
                  </Link>
                  <Link
                    to="/legal/filtrado"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>Mecanismos de Filtrado</span>
                  </Link>
                  <Link
                    to="/legal/seguridad"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Seguridad en la Red</span>
                  </Link>
                  <Link
                    to="/legal/comparador-tarifas"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Comparador de Tarifas</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="h-px bg-white/10 my-4"></div>

            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              <span>Comenzar</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

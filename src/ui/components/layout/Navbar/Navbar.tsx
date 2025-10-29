import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Globe, Lock, AlertCircle, FileText, Filter, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { ROUTES } from '../../../../router/routes.config';

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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#2E3FE6] to-[#4A5CFF] transition-all duration-300 group-hover/navitem:w-full"></span>
                </span>
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu Dropdown - Diseño Moderno Mejorado */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[680px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="relative bg-linear-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                  {/* Efectos de fondo animados */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#1E2BBF]/5 via-transparent to-[#4A5CFF]/5 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E2BBF]/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  {/* Header decorativo mejorado */}
                  <div className="relative px-8 py-5 bg-linear-to-r from-[#1E2BBF]/15 via-[#2E3FE6]/10 to-[#4A5CFF]/15 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-base tracking-tight flex items-center gap-2">
                          Legal y Regulatorio
                          <span className="px-2 py-0.5 bg-[#2E3FE6]/20 rounded-full text-[10px] text-[#4A5CFF] font-medium">8</span>
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Toda la información legal y de cumplimiento</p>
                      </div>
                      <div className="w-10 h-10 bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/20 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#4A5CFF]" />
                      </div>
                    </div>
                  </div>

                  {/* Content - Grid de 2 columnas moderno */}
                  <div className="p-4 grid grid-cols-2 gap-3">
                    {/* Columna 1 */}
                    <div className="space-y-2">
                      <Link 
                        to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#2E3FE6]/5 to-transparent hover:from-[#2E3FE6]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#2E3FE6]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#2E3FE6]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#1E2BBF]/10">
                          <AlertCircle className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Protección Usuarios
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Indicadores y métricas</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.NORMATIVIDAD}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#2E3FE6]/5 to-transparent hover:from-[#2E3FE6]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#2E3FE6]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#2E3FE6]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#1E2BBF]/10">
                          <FileText className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Normatividad
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Marco legal vigente</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.PROTECCION_DATOS}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-blue-500/5 to-transparent hover:from-blue-500/15 hover:to-blue-500/5 border border-transparent hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/10 group-hover/item:from-blue-500/30 group-hover/item:to-blue-600/20 transition-all duration-300 shadow-lg shadow-blue-500/10">
                          <Lock className="w-4 h-4 text-blue-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Datos Personales
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Política de tratamiento</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.INTERNET_SANO}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-cyan-500/5 to-transparent hover:from-cyan-500/15 hover:to-cyan-500/5 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-cyan-500/20 to-cyan-600/10 group-hover/item:from-cyan-500/30 group-hover/item:to-cyan-600/20 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                          <Globe className="w-4 h-4 text-cyan-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Internet Sano
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Uso responsable</p>
                        </div>
                      </Link>
                    </div>

                    {/* Columna 2 */}
                    <div className="space-y-2">
                      <Link 
                        to={ROUTES.LEGAL.FILTRADO}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-orange-500/5 to-transparent hover:from-orange-500/15 hover:to-orange-500/5 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-orange-500/20 to-orange-600/10 group-hover/item:from-orange-500/30 group-hover/item:to-orange-600/20 transition-all duration-300 shadow-lg shadow-orange-500/10">
                          <Filter className="w-4 h-4 text-orange-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Mecanismos Filtrado
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Control de contenido</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.SEGURIDAD}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-green-500/5 to-transparent hover:from-green-500/15 hover:to-green-500/5 border border-transparent hover:border-green-500/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-green-500/20 to-green-600/10 group-hover/item:from-green-500/30 group-hover/item:to-green-600/20 transition-all duration-300 shadow-lg shadow-green-500/10">
                          <Shield className="w-4 h-4 text-green-400 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Seguridad en la Red
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Protocolos y medidas</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.COMPARADOR_TARIFAS}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#2E3FE6]/5 to-transparent hover:from-[#2E3FE6]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#2E3FE6]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#2E3FE6]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#1E2BBF]/10">
                          <DollarSign className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Comparador Tarifas
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Mejores opciones</p>
                        </div>
                      </Link>

                      <Link 
                        to={ROUTES.LEGAL.PROTECCION_INFANTIL}
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#2E3FE6]/5 to-transparent hover:from-[#2E3FE6]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#2E3FE6]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#2E3FE6]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#1E2BBF]/10">
                          <Shield className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors mb-0.5">
                            Protección Infantil
                          </div>
                          <p className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors">Seguridad menores</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Footer con gradiente decorativo */}
                  <div className="relative h-1 bg-linear-to-r from-transparent via-purple-500/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-linear-to-r from-[#1E2BBF] to-[#4A5CFF] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-[#2E3FE6] hover:to-[#4A5CFF] transition-all duration-300 shadow-lg shadow-[#1E2BBF]/50"
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
              <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className={`overflow-hidden transition-all duration-300 ${isLegalOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 py-2">
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Indicadores Protección Usuarios</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.NORMATIVIDAD}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Normatividad</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_DATOS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Política de Datos Personales</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.INTERNET_SANO}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Internet Sano</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.FILTRADO}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>Mecanismos de Filtrado</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.SEGURIDAD}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Seguridad en la Red</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.COMPARADOR_TARIFAS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Comparador de Tarifas</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_INFANTIL}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Protección Infantil</span>
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
              className="flex items-center justify-center gap-2 bg-linear-to-r from-[#1E2BBF] to-[#4A5CFF] text-white px-6 py-4 rounded-xl text-sm font-semibold hover:from-[#2E3FE6] hover:to-[#4A5CFF] transition-all duration-300 shadow-lg shadow-[#1E2BBF]/30"
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

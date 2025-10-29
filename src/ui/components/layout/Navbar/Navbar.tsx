import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Globe, Lock, AlertCircle, FileText, Filter, DollarSign, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { ROUTES } from '../../../../router/routes.config';
import { useTheme } from '../../../../contexts/useTheme';

// Navbar moderno con diseño tipo Superhuman
// Ubicación: src/ui/components/layout/Navbar/Navbar.tsx

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo moderno */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)' }}>
              <span className="text-white font-black text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#4A5CFF] group-hover:to-[#7A8FFF]" style={{ transition: 'all 400ms ease' }}>
              Verla
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className="group relative px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5" style={{ transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
              Inicio
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            <Link to="/about" className="group relative px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5" style={{ transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
              Nosotros
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            <Link to="/precios" className="group relative px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5" style={{ transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
              Precios
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            {/* Modern Legal Mega Menu */}
            <div className="relative group">
              <button 
                className="group/navitem flex items-center gap-1.5 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5" style={{ transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <span className="relative">
                  Legal
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover/navitem:w-8 transition-all duration-300 rounded-full"></div>
                </span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu Dropdown - Diseño Moderno Mejorado */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[680px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="relative bg-linear-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                  {/* Efectos de fondo animados */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#5B6FFF]/5 via-transparent to-[#4A5CFF]/5 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B6FFF]/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  {/* Header decorativo mejorado */}
                  <div className="relative px-8 py-5 bg-linear-to-r from-[#5B6FFF]/15 via-[#7A8FFF]/10 to-[#4A5CFF]/15 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-base tracking-tight flex items-center gap-2">
                          Legal y Regulatorio
                          <span className="px-2 py-0.5 bg-[#7A8FFF]/20 rounded-full text-[10px] text-[#4A5CFF] font-medium">8</span>
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Toda la información legal y de cumplimiento</p>
                      </div>
                      <div className="w-10 h-10 bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/20 rounded-xl flex items-center justify-center">
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
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#7A8FFF]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
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
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#7A8FFF]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
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
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#7A8FFF]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
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
                        className="group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border border-transparent hover:border-[#7A8FFF]/30 transition-all duration-300"
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
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

          {/* Theme Toggle Button - Mejorado */}
          <button
            onClick={toggleTheme}
            className="group relative w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-500 hover:scale-105 overflow-hidden"
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 2px 8px rgba(74, 92, 255, 0.15)' 
                : '0 2px 8px rgba(74, 92, 255, 0.25)'
            }}
          >
            {/* Efecto de fondo animado */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ 
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.1))'
                  : 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.15))'
              }}
            ></div>

            {/* Círculo de fondo giratorio */}
            <div 
              className="absolute inset-0 rounded-xl transition-all duration-700"
              style={{
                background: theme === 'dark'
                  ? 'conic-gradient(from 0deg, transparent, rgba(74, 92, 255, 0.1), transparent)'
                  : 'conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.2), transparent)',
                transform: `rotate(${theme === 'dark' ? '0deg' : '180deg'})`,
              }}
            ></div>
            
            {/* Iconos con animación mejorada */}
            <div className="relative w-5 h-5 z-10">
              <Sun 
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  theme === 'dark' 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100 text-yellow-500'
                }`}
                size={20}
                strokeWidth={2.5}
                style={{
                  filter: theme === 'light' ? 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))' : 'none'
                }}
              />
              <Moon 
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  theme === 'dark' 
                    ? 'opacity-100 rotate-0 scale-100 text-blue-400' 
                    : 'opacity-0 -rotate-180 scale-0'
                }`}
                size={20}
                strokeWidth={2.5}
                style={{
                  filter: theme === 'dark' ? 'drop-shadow(0 0 4px rgba(74, 92, 255, 0.6))' : 'none'
                }}
              />
            </div>
            
            {/* Tooltip mejorado */}
            <div 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 whitespace-nowrap pointer-events-none z-50"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(0, 0, 0, 0.98))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(74, 92, 255, 0.3)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                color: '#ffffff'
              }}
            >
              <span>{theme === 'dark' ? '☀️ Tema Claro' : '🌙 Tema Oscuro'}</span>
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '5px solid rgba(74, 92, 255, 0.3)',
                }}
              ></div>
            </div>
          </button>

          {/* CTA Button moderno */}
          <div className="hidden md:block ml-2">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
                boxShadow: '0 4px 15px rgba(74, 92, 255, 0.3)',
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 92, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 92, 255, 0.3)';
              }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Contactar</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button moderno */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5" style={{ transition: 'all 300ms ease' }}
          >
            {isMenuOpen ? 
              <X size={22} className="text-white" /> : 
              <Menu size={22} className="text-white" />
            }
          </button>
        </div>

        {/* Mobile Menu Moderno */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-6 pb-6 space-y-2">
            {/* Enlaces principales */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl" style={{ background: 'transparent', transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4A5CFF10, transparent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium">Inicio</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl" style={{ background: 'transparent', transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4A5CFF10, transparent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium">Nosotros</span>
            </Link>

            <Link
              to="/precios"
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl" style={{ background: 'transparent', transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4A5CFF10, transparent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium">Precios</span>
            </Link>

            
            {/* Botón CTA en móvil */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-center gap-2 px-4 py-3.5 text-white rounded-xl mt-2 font-medium text-sm" 
              style={{ background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)', transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>Contactar</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="group flex items-center justify-between px-4 py-3 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-linear-to-br from-[#4A5CFF]/20 to-[#7A8FFF]/20 rounded-lg flex items-center justify-center group-hover:from-[#4A5CFF]/30 group-hover:to-[#7A8FFF]/30 transition-all">
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Sun className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <span className="font-medium">
                  {theme === 'dark' ? 'Tema Oscuro' : 'Tema Claro'}
                </span>
              </div>
              <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                {theme === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
              </div>
            </button>

            {/* Separador */}
            <div className="h-px bg-white/10 my-4"></div>

            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-[#5B6FFF] to-[#4A5CFF] text-white px-6 py-4 rounded-xl text-sm font-semibold hover:from-[#7A8FFF] hover:to-[#4A5CFF] transition-all duration-300 shadow-lg shadow-[#5B6FFF]/30"
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

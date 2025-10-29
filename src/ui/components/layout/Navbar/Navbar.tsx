import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Navbar moderno con diseño tipo Superhuman
// Ubicación: src/ui/components/layout/Navbar/Navbar.tsx

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {/* Modern Legal Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm group/navitem relative"
              >
                <span className="relative">
                  Legal y Regulatorio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover/navitem:w-full"></span>
                </span>
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-gradient-to-br from-gray-900 to-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                <div className="p-1.5">
                  <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/10 rounded-full filter blur-3xl"></div>
                    
                    {/* Menu items */}
                    <div className="relative space-y-1">
                      <Link 
                        to="/legal/proteccion-usuarios" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Indicadores Protección Usuarios</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/normatividad" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Normatividad</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/proteccion-datos" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Política de tratamiento de datos personales</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/internet-sano" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Internet Sano</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/filtrado" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Mecanismos de filtrado</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/seguridad" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Seguridad en la red</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                      
                      <Link 
                        to="/legal/comparador-tarifas" 
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg group/item"
                      >
                        <span className="relative z-10">Comparador de Tarifas</span>
                        <span className="absolute right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient border bottom */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Nosotros
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Contacto
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold text-center"
            >
              Comenzar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

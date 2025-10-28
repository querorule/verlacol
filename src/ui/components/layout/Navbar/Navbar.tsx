import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

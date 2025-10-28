import { Users, Target, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';

// Página About con diseño moderno
// Ubicación: src/ui/pages/about/About.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradiente de fondo */}
      <div className="fixed inset-0 bg-linear-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      {/* Partículas de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-12 transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Sobre <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Nosotros</span>
          </h1>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Construyendo el futuro del trabajo colaborativo
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-16 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-linear-to-br from-purple-600/20 to-pink-600/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users size={48} className="text-purple-400" />
              </div>
            </div>
            <p className="text-xl text-gray-300 text-center leading-relaxed mb-6">
              VerlaCol es un proyecto desarrollado con las tecnologías más modernas
              para crear aplicaciones web rápidas, escalables y mantenibles.
            </p>
            <p className="text-lg text-gray-400 text-center leading-relaxed">
              Utilizamos React, TypeScript, TailwindCSS y siguiendo principios de arquitectura hexagonal,
              DDD, SOLID y Clean Code para garantizar código de máxima calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target size={28} className="text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Misión</h3>
              <p className="text-gray-400 leading-relaxed">
                Crear soluciones web innovadoras siguiendo las mejores prácticas
                y principios de desarrollo de software moderno.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart size={28} className="text-red-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">Valores</h3>
              <p className="text-gray-400 leading-relaxed">
                Calidad, innovación y código limpio son los pilares
                que guían nuestro desarrollo día a día.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={28} className="text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Visión</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser referentes en desarrollo web moderno, creando experiencias
                excepcionales para usuarios y equipos.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">Nuestro Stack Tecnológico</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React 19', 'TypeScript', 'TailwindCSS v4', 'Vite', 'React Router', 'Lucide Icons', 'ESLint', 'Clean Code'].map((tech) => (
                <div 
                  key={tech}
                  className="bg-white/5 border border-white/10 rounded-xl py-4 px-6 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

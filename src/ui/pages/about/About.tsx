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
            className="inline-flex items-center text-[#1E2BBF] hover:text-[#FFFFFF] mb-12 transition-colors duration-700 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Sobre 
            <div className="mb-8 relative">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient inline-block" style={{ backgroundImage: 'linear-gradient(to right, #1E2BBF, #2E3FE6, #4A5CFF, #FFFFFF, #4A5CFF, #2E3FE6, #1E2BBF)', backgroundSize: '200% 100%' }}>
                Nosotros
              </span>
              {/* Efecto de brillo/glow */}
              <div className="absolute inset-0 blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, #4A5CFF 0%, transparent 70%)' }}></div>
            </div>
          </h1>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Construyendo el futuro del trabajo colaborativo
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-16 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                 style={{ background: 'linear-gradient(135deg, #1E2BBF 0%, #2E3FE6 50%, #4A5CFF 100%)' }}>
                <Users size={48} className="text-[#FFFFFF]" />
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
                <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={28} className="text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Visión</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser referentes en desarrollo web moderno, creando experiencias
                excepcionales para usuarios y equipos.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="relative bg-linear-to-br from-[#1E2BBF]/20 to-[#4A5CFF]/20 border border-white/10 rounded-2xl p-12 text-center overflow-hidden group">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 bg-linear-to-br from-[#2E3FE6]/5 via-transparent to-[#4A5CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2E3FE6]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A5CFF]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#4A5CFF] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider">
                  Tecnologías Modernas
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestro{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1E2BBF] via-[#2E3FE6] to-[#4A5CFF] animate-gradient">
                  Stack Tecnológico
                </span>
              </h2>
              <p className="text-white/80 mb-10 max-w-2xl mx-auto">
                Utilizamos las herramientas más avanzadas para crear experiencias web excepcionales
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'FTTH/x', icon: '⚛️', color: 'from-cyan-500/10 to-blue-500/10', border: 'cyan-500/30', text: 'cyan-400' },
                  { name: 'Core Routers', icon: '📘', color: 'from-blue-500/10 to-indigo-500/10', border: 'blue-500/30', text: 'blue-400' },
                  { name: 'Aggregation Switches', icon: '🎨', color: 'from-teal-500/10 to-cyan-500/10', border: 'teal-500/30', text: 'teal-400' },
                  { name: 'GPON', icon: '⚡', color: 'from-purple-500/10 to-pink-500/10', border: 'purple-500/30', text: 'purple-400' },
                  { name: 'DNS', icon: '🛣️', color: 'from-red-500/10 to-pink-500/10', border: 'red-500/30', text: 'red-400' },
                  { name: 'CMTS / OLT', icon: '🎯', color: 'from-orange-500/10 to-amber-500/10', border: 'orange-500/30', text: 'orange-400' },
                  { name: 'NMS', icon: '✅', color: 'from-indigo-500/10 to-purple-500/10', border: 'indigo-500/30', text: 'indigo-400' },
                  { name: 'AAA - Radius', icon: '✨', color: 'from-green-500/10 to-emerald-500/10', border: 'green-500/30', text: 'green-400' }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className={`relative group/item bg-linear-to-br ${tech.color} border border-${tech.border} rounded-xl p-5 hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer`}
                  >
                    {/* Brillo en hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover/item:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    
                    {/* Contenido */}
                    <div className="relative">
                      <div className="text-3xl mb-3 group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className={`font-semibold text-sm text-white group-hover/item:text-white transition-colors`}>
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Efecto de esquina */}
                    <div className={`absolute top-2 right-2 w-1.5 h-1.5 bg-${tech.text} rounded-full opacity-50 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300`}></div>
                  </div>
                ))}
              </div>
              
              {/* Badges adicionales */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                <span className="px-4 py-2 bg-white/5 border border-[#1E2BBF] rounded-full text-xs text-white font-medium hover:bg-[#1E2BBF]/30 transition-colors">
                  🏗️ Arquitectura Hexagonal
                </span>
                <span className="px-4 py-2 bg-white/5 border border-[#2E3FE6] rounded-full text-xs text-white font-medium hover:bg-[#2E3FE6]/30 transition-colors">
                  🎯 SOLID Principles
                </span>
                <span className="px-4 py-2 bg-white/5 border border-[#4A5CFF] rounded-full text-xs text-white font-medium hover:bg-[#4A5CFF]/30 transition-colors">
                  🚀 DDD Pattern
                </span>
                <span className="px-4 py-2 bg-white/10 border border-white rounded-full text-xs text-white font-medium hover:bg-white/20 transition-colors">
                  ♻️ Clean Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

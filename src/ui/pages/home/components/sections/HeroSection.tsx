import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Hero section with CTA buttons and social proof
// Ubicación: src/ui/pages/home/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="pt-40 pb-32 px-6 relative z-10 overflow-hidden">
      {/* Efectos de fondo hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Badge superior animado */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 group">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            ✨ Nueva versión disponible
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
          Save{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient inline-block">
            4 hours
          </span>
          <br />
          per person
          <br />
          <span className="text-gray-600">every single week</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          VerlaCol es la plataforma más productiva que jamás hayas usado.
          <br />
          <span className="text-gray-500">Colabora más rápido y logra más con tecnología inteligente.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Comenzar gratis
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:border-white/20">
            Ver demo
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-pink-600 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                {i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
              +50
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Más de 50+ equipos ya están trabajando más rápido
          </p>
        </div>
      </div>
    </section>
  );
}

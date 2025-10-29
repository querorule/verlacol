import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Hero section with CTA buttons and social proof
// Ubicación: src/ui/pages/home/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="pt-40 pb-32 px-6 relative z-10 overflow-hidden">
      {/* Efectos de fondo hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow" style={{ backgroundColor: '#5B6FFF33' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow" style={{ backgroundColor: '#7A8FFF33', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Badge superior animado */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 group">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            📡 Fibra óptica de última generación
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
          Conecta{' '}
          <span className="text-transparent bg-clip-text animate-gradient inline-block" style={{ backgroundImage: 'linear-gradient(to right, #5B6FFF, #7A8FFF, #4A5CFF, #FFFFFF, #4A5CFF, #7A8FFF, #5B6FFF)', backgroundSize: '200% 100%' }}>
            tu hogar
          </span>
          <br />
          al mundo digital
          <br />
          <span className="text-gray-600">sin límites</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Televisión IP de alta calidad e Internet ultrarrápido por fibra óptica.
          <br />
          <span className="text-gray-500">Entretenimiento y conectividad sin interrupciones para toda tu familia.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #5B6FFF 0%, #7A8FFF 50%, #4A5CFF 100%)',
              boxShadow: '0 10px 40px rgba(91, 111, 255, 0.5), 0 0 20px rgba(74, 92, 255, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #7A8FFF 0%, #4A5CFF 50%, #FFFFFF 100%)';
              e.currentTarget.style.boxShadow = '0 15px 60px rgba(122, 143, 255, 0.7), 0 0 40px rgba(74, 92, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #5B6FFF 0%, #7A8FFF 50%, #4A5CFF 100%)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(91, 111, 255, 0.5), 0 0 20px rgba(74, 92, 255, 0.4)';
            }}
          >
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10">Comenzar gratis</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:border-white/20">
            Ver demo
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Social proof con avatares modernos */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {/* Avatar 1 - Azul claro a blanco */}
            <div 
              className="w-12 h-12 rounded-full border-2 border-black/50 flex items-center justify-center text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10"
              style={{ 
                background: 'linear-gradient(135deg, #4A5CFF, #FFFFFF)',
                boxShadow: '0 4px 15px rgba(74, 92, 255, 0.4)',
                color: '#5B6FFF'
              }}
            >
              1
            </div>
            
            {/* Avatar 2 - Azul medio a blanco */}
            <div 
              className="w-12 h-12 rounded-full border-2 border-black/50 flex items-center justify-center text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10"
              style={{ 
                background: 'linear-gradient(135deg, #7A8FFF, #FFFFFF)',
                boxShadow: '0 4px 15px rgba(122, 143, 255, 0.4)',
                color: '#5B6FFF'
              }}
            >
              2
            </div>
            
            {/* Avatar 3 - Azul brillante a azul claro */}
            <div 
              className="w-12 h-12 rounded-full border-2 border-black/50 flex items-center justify-center text-white text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10"
              style={{ 
                background: 'linear-gradient(135deg, #5B6FFF, #4A5CFF)',
                boxShadow: '0 4px 15px rgba(91, 111, 255, 0.4)'
              }}
            >
              3
            </div>
            
            {/* Avatar 4 - Tricolor azul a blanco */}
            <div 
              className="w-12 h-12 rounded-full border-2 border-black/50 flex items-center justify-center text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10"
              style={{ 
                background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF, #FFFFFF)',
                boxShadow: '0 4px 15px rgba(74, 92, 255, 0.4)',
                color: '#5B6FFF'
              }}
            >
              4
            </div>
            
            {/* Avatar 5 - Blanco a azul claro */}
            <div 
              className="w-12 h-12 rounded-full border-2 border-black/50 flex items-center justify-center text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10"
              style={{ 
                background: 'linear-gradient(135deg, #FFFFFF, #4A5CFF)',
                boxShadow: '0 4px 15px rgba(74, 92, 255, 0.3)',
                color: '#5B6FFF'
              }}
            >
              5
            </div>
            
            {/* Avatar +50 con efecto especial */}
            <div 
              className="relative w-12 h-12 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold shadow-lg transition-transform hover:scale-110 hover:z-10 group"
              style={{ 
                background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #4A5CFF)',
                borderColor: '#4A5CFF',
                boxShadow: '0 4px 20px rgba(74, 92, 255, 0.6)'
              }}
            >
              {/* Efecto de pulso */}
              <div className="absolute inset-0 rounded-full bg-[#4A5CFF]/30 animate-ping"></div>
              <span className="relative z-10">+50</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            Más de{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] font-bold">
              50+ hogares
            </span>
            {' '}ya disfrutan de nuestra conexión
          </p>
        </div>
      </div>
    </section>
  );
}

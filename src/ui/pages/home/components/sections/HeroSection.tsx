import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Wifi, Tv, Zap } from 'lucide-react';

// Hero section with modern custom slider
// Ubicación: src/ui/pages/home/components/HeroSection.tsx

// Slides data
const slides = [
  {
    id: 1,
    badge: '🚀 Lanzamiento Especial',
    badgeColor: '#4A5CFF',
    title: 'Internet Fibra Óptica',
    titleHighlight: 'Ultra Rápido',
    subtitle: 'Hasta 1 Gbps',
    description: 'Velocidad simétrica real sin límites de datos ni estrangulamiento',
    icon: Wifi,
    ctaPrimary: 'Ver Planes',
    ctaSecondary: 'Consultar Cobertura',
    gradient: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #4A5CFF)',
  },
  {
    id: 2,
    badge: '📺 Entretenimiento Total',
    badgeColor: '#7A8FFF',
    title: 'TV IP Premium',
    titleHighlight: 'En HD y 4K',
    subtitle: '200+ Canales',
    description: 'Los mejores canales colombianos e internacionales en alta definición',
    icon: Tv,
    ctaPrimary: 'Ver Canales',
    ctaSecondary: 'Planes TV',
    gradient: 'linear-gradient(135deg, #7A8FFF, #4A5CFF, #5B6FFF)',
  },
  {
    id: 3,
    badge: '⚡ Tecnología FTTH',
    badgeColor: '#4A5CFF',
    title: 'Conectividad',
    titleHighlight: 'Sin Interrupciones',
    subtitle: 'Fibra al Hogar',
    description: 'Red de fibra óptica directa a tu casa, la mejor conexión disponible',
    icon: Zap,
    ctaPrimary: 'Contratar Ahora',
    ctaSecondary: 'Ver Beneficios',
    gradient: 'linear-gradient(135deg, #4A5CFF, #FFFFFF, #7A8FFF)',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // Pausar auto-play cuando el usuario navega manualmente
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const activeSlide = slides[currentSlide];
  const Icon = activeSlide.icon;

  return (
    <section className="pt-40 pb-32 px-6 relative z-10 overflow-hidden">
      {/* Efectos de fondo hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow" style={{ backgroundColor: '#5B6FFF33' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow" style={{ backgroundColor: '#7A8FFF33', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Slider Container */}
        <div className="relative">
          {/* Slider Content con animación de fade */}
          <div
            key={currentSlide}
            className="animate-fadeIn"
            style={{
              animation: 'fadeIn 0.8s ease-in-out',
            }}
          >
            {/* Badge superior animado dinámico */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 group">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: activeSlide.badgeColor }}
              ></div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {activeSlide.badge}
              </span>
            </div>

            {/* Icono decorativo grande */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center relative overflow-hidden group"
                style={{
                  background: activeSlide.gradient,
                  boxShadow: `0 20px 60px ${activeSlide.badgeColor}60`,
                }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Icon size={48} className="text-white relative z-10" strokeWidth={2.5} />
              </div>
            </div>

            {/* Título con animación */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              {activeSlide.title}{' '}
              <span
                className="text-transparent bg-clip-text animate-gradient inline-block"
                style={{
                  backgroundImage: 'linear-gradient(to right, #5B6FFF, #7A8FFF, #4A5CFF, #FFFFFF, #4A5CFF, #7A8FFF, #5B6FFF)',
                  backgroundSize: '200% 100%',
                }}
              >
                {activeSlide.titleHighlight}
              </span>
              <br />
              <span className="text-gray-600 text-5xl md:text-6xl">{activeSlide.subtitle}</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {activeSlide.description}
            </p>
          </div>

          {/* CTAs dinámicos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/pricing"
              className="group relative inline-flex items-center gap-2 text-white px-10 py-5 rounded-full text-lg font-semibold overflow-hidden"
              style={{
                background: activeSlide.gradient,
                boxShadow: `0 10px 40px ${activeSlide.badgeColor}80`,
                transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 15px 60px ${activeSlide.badgeColor}90`;
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 10px 40px ${activeSlide.badgeColor}80`;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              <span className="relative z-10">{activeSlide.ctaPrimary}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-400 ease-out" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full text-lg font-semibold hover:border-white/20 hover:scale-105"
              style={{ transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {activeSlide.ctaSecondary}
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-400 ease-out" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>

          {/* Navegación del Slider */}
          <div className="flex items-center justify-center gap-6 mb-16">
            {/* Botón Anterior */}
            <button
              onClick={prevSlide}
              className="group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
            </button>

            {/* Dots de navegación */}
            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Ir al slide ${index + 1}`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-12' : 'w-2'
                    }`}
                    style={{
                      backgroundColor: index === currentSlide ? activeSlide.badgeColor : '#FFFFFF20',
                      boxShadow: index === currentSlide ? `0 0 20px ${activeSlide.badgeColor}60` : 'none',
                    }}
                  ></div>
                  {/* Tooltip hover */}
                  <div 
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                    style={{
                      background: '#1a1a1a',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(74, 92, 255, 0.5)',
                      color: '#ffffff',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)',
                      zIndex: 100
                    }}
                  >
                    {slide.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={nextSlide}
              className="group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Indicador de Auto-play */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white transition-all duration-300 mb-12"
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
          {isAutoPlay ? 'Auto-play activo' : 'Auto-play pausado'}
        </button>

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

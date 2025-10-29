// Problem section with challenge badge and category pills
// Ubicación: src/ui/pages/home/components/ProblemSection.tsx

interface ProblemSectionProps {
  categoriesRow1: string[];
  categoriesRow2: string[];
}

export default function ProblemSection({ categoriesRow1, categoriesRow2 }: ProblemSectionProps) {
  return (
    <section className="py-40 px-6 bg-black relative z-10 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ backgroundColor: '#5B6FFF15' }}></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ backgroundColor: '#7A8FFF15' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">El Problema</span>
          </div>
        </div>

        {/* Título principal con efecto holográfico fluido */}
        <div className="relative mb-8 perspective-1000">
          {/* Resplandor de fondo ondulante */}
          <div className="absolute inset-0 blur-3xl opacity-40" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #5B6FFF, transparent)' }}></div>
          
          <h2 className="relative text-5xl md:text-7xl font-black leading-tight text-center">
            <span className="block mb-3 text-gray-300">Internet lento es el</span>
            
            {/* "mayor obstáculo" con efecto holográfico */}
            <span className="relative inline-block group/holo">
              {/* Capas holográficas de colores */}
              <span className="absolute inset-0" style={{ transform: 'translateX(-3px)', opacity: 0.5, filter: 'blur(2px)', color: '#7A8FFF' }}>
                mayor obstáculo
              </span>
              <span className="absolute inset-0" style={{ transform: 'translateX(3px)', opacity: 0.5, filter: 'blur(2px)', color: '#4A5CFF' }}>
                mayor obstáculo
              </span>
              
              {/* Texto principal con gradiente azul claro + blanco */}
              <span 
                className="relative text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: 'linear-gradient(45deg, #4A5CFF, #FFFFFF, #7A8FFF, #FFFFFF, #4A5CFF)',
                  backgroundSize: '400% 400%',
                  animation: 'hologram 8s ease infinite'
                }}
              >
                mayor obstáculo
              </span>
              
              {/* Línea decorativa inferior con gradiente animado */}
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full"
                  style={{
                    background: 'linear-gradient(90deg, #4A5CFF, #FFFFFF, #7A8FFF, #FFFFFF, #4A5CFF)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                    boxShadow: '0 0 30px rgba(74, 92, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.5)'
                  }}
                ></div>
              </div>
            </span>
            
            <br />
            
            {/* "para tu hogar" con efecto suave */}
            <span className="relative inline-block mt-4 group/reveal">
              {/* Sombra suave mejorada */}
              <span className="absolute inset-0 blur-lg opacity-40" style={{ color: '#7A8FFF' }}>
                para tu hogar
              </span>
              
              {/* Texto principal con gradiente azul claro + blanco */}
              <span 
                className="relative text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #4A5CFF 0%, #FFFFFF 30%, #7A8FFF 50%, #FFFFFF 70%, #4A5CFF 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'slide 4s ease-in-out infinite'
                }}
              >
                para tu hogar
              </span>
              
              {/* Puntos de luz flotantes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #4A5CFF, transparent)',
                      left: `${15 + i * 25}%`,
                      top: '50%',
                      opacity: 0,
                      animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                      filter: 'blur(2px)'
                    }}
                  />
                ))}
              </div>
            </span>
          </h2>
          
          {/* Animaciones CSS */}
          <style>{`
            @keyframes hologram {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            
            @keyframes shimmer {
              0% { background-position: 0% 0%; }
              100% { background-position: 200% 0%; }
            }
            
            @keyframes slide {
              0%, 100% { background-position: 0% 0%; }
              50% { background-position: 100% 0%; }
            }
            
            @keyframes float {
              0%, 100% { 
                opacity: 0;
                transform: translateY(0) scale(0);
              }
              50% { 
                opacity: 1;
                transform: translateY(-20px) scale(1);
              }
            }
          `}</style>
        </div>
        
        {/* Descripción principal con diseño moderno */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Primera parte con fondo sutil */}
          <div className="relative mb-8 p-8 rounded-2xl bg-linear-to-br from-white/3 to-transparent border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-all duration-500">
            {/* Efecto de brillo en la esquina */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B6FFF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <p className="relative text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              Internet que se cae constantemente. Videos que{' '}
              <span className="text-white font-medium">se congelan</span>, descargas{' '}
              <span className="text-white font-medium">interminables</span>.
              <br className="hidden md:block" />
              Terminas{' '}
              <span className="relative inline-block">
                <span className="text-red-400">perdiendo tiempo valioso</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-400/50 to-transparent"></span>
              </span>
              , frustrado con tu proveedor actual.
            </p>
          </div>
          
          {/* Segunda parte con énfasis */}
          <div className="relative p-6 rounded-2xl bg-linear-to-r from-[#5B6FFF]/8 via-[#7A8FFF]/8 to-[#4A5CFF]/8 border border-[#5B6FFF]/20 backdrop-blur-sm">
            {/* Línea decorativa superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent"></div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              No debería ser así. La tecnología de conectividad{' '}
              <span className="relative inline-block group/badge">
                <span className="relative z-10 text-white font-bold bg-linear-to-r from-[#5B6FFF]/20 to-[#4A5CFF]/20 px-4 py-1.5 rounded-lg border border-[#5B6FFF]/30 shadow-lg shadow-[#5B6FFF]/10">
                  ha evolucionado
                </span>
                {/* Efecto de pulso en hover */}
                <span className="absolute inset-0 bg-[#5B6FFF]/20 rounded-lg blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></span>
              </span>
              .
              <br className="hidden md:block" />
              Con{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5B6FFF] to-[#4A5CFF] font-bold">
                Verla
              </span>
              , tu conexión{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] font-bold">
                cambia para siempre
              </span>
              .
            </p>
            
            {/* Línea decorativa inferior */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent"></div>
          </div>
        </div>

        {/* Stats problemáticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center hover:bg-red-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-red-400 mb-2">3hrs</div>
            <p className="text-gray-400 text-sm">Perdidas en buffering</p>
          </div>
          
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 text-center hover:bg-orange-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-orange-400 mb-2">70%</div>
            <p className="text-gray-400 text-sm">Quejas de lentitud</p>
          </div>
          
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-yellow-400 mb-2">5+</div>
            <p className="text-gray-400 text-sm">Caídas semanales</p>
          </div>
        </div>

        {/* Categories - Dos filas con scroll infinito en direcciones opuestas */}
        <div className="mt-16 space-y-6 overflow-hidden">
          {/* Primera fila - Derecha a Izquierda */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 animate-scroll-rtl whitespace-nowrap">
              {/* Primera copia */}
              {categoriesRow1.map((category, index) => (
                <span
                  key={`${category}-1-${index}`}
                  className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  {category}
                </span>
              ))}
              {/* Segunda copia para loop infinito */}
              {categoriesRow1.map((category, index) => (
                <span
                  key={`${category}-2-${index}`}
                  className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Segunda fila - Izquierda a Derecha */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 animate-scroll-ltr whitespace-nowrap">
              {/* Primera copia */}
              {categoriesRow2.map((category, index) => (
                <span
                  key={`${category}-1-${index}`}
                  className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  {category}
                </span>
              ))}
              {/* Segunda copia para loop infinito */}
              {categoriesRow2.map((category, index) => (
                <span
                  key={`${category}-2-${index}`}
                  className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

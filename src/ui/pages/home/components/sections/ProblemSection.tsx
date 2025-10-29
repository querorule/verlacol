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
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">The Challenge</span>
          </div>
        </div>

        {/* Título principal */}
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-center">
          Email is the{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
            biggest problem
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
            hiding in plain sight
          </span>
        </h2>
        
        {/* Descripción principal */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            Todos pasamos horas trabajando. Pero a menudo respondemos tarde, a veces no respondemos en absoluto.
            Terminamos perdiendo oportunidades, bloqueando a nuestros equipos y perdiendo nuestros objetivos.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            No es culpa de nadie. El trabajo en equipo{' '}
            <span className="text-white font-semibold bg-white/5 px-2 py-1 rounded">no ha cambiado en décadas</span>.
            Con VerlaCol, todo esto cambia.
          </p>
        </div>

        {/* Stats problemáticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center hover:bg-red-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-red-400 mb-2">4hrs</div>
            <p className="text-gray-400 text-sm">Perdidas diariamente</p>
          </div>
          
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 text-center hover:bg-orange-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-orange-400 mb-2">62%</div>
            <p className="text-gray-400 text-sm">Emails sin respuesta</p>
          </div>
          
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition-all duration-300">
            <div className="text-5xl font-black text-yellow-400 mb-2">15+</div>
            <p className="text-gray-400 text-sm">Reuniones semanales</p>
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

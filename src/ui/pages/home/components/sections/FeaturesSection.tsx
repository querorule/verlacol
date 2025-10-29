import { Sparkles, Zap, Users, Target } from 'lucide-react';

// Features section with 3 feature cards and stats
// Ubicación: src/ui/pages/home/components/FeaturesSection.tsx

export default function FeaturesSection() {
  return (
    <section className="py-40 px-6 relative z-10 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Características</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todo lo que necesitas para{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              trabajar mejor
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Herramientas diseñadas para equipos modernos que valoran la productividad y la simplicidad
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 - Velocidad */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-500 h-full">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-linear-to-br from-purple-600/20 to-purple-600/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Zap size={36} className="text-purple-400 group-hover:text-purple-300" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Performance</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Velocidad extrema
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                Responde y organiza tu trabajo 2x más rápido con atajos inteligentes y automatizaciones.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div>
                  <div className="text-2xl font-bold text-purple-400">2x</div>
                  <div className="text-xs text-gray-500">Más rápido</div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">50%</div>
                  <div className="text-xs text-gray-500">Menos tiempo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Colaboración */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-pink-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-pink-500/20 transition-all duration-500 h-full">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-linear-to-br from-pink-600/20 to-pink-600/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users size={36} className="text-pink-400 group-hover:text-pink-300" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">Teamwork</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">
                Colaboración fluida
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                Trabaja en equipo de manera sincronizada con herramientas integradas y en tiempo real.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-white/5">
                <div>
                  <div className="text-2xl font-bold text-pink-400">Real-time</div>
                  <div className="text-xs text-gray-500">Sincronización</div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">100%</div>
                  <div className="text-xs text-gray-500">Integrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Enfoque */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-orange-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-500 h-full">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-linear-to-br from-orange-600/20 to-orange-600/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Target size={36} className="text-orange-400 group-hover:text-orange-300" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-orange-300 uppercase tracking-wider">Focus</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                Enfoque total
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                Mantén lo importante en el centro con priorización inteligente y cero distracciones.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div>
                  <div className="text-2xl font-bold text-orange-400">AI</div>
                  <div className="text-xs text-gray-500">Powered</div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">Smart</div>
                  <div className="text-xs text-gray-500">Priorización</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

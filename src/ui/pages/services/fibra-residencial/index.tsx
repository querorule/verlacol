import { useTheme } from "../../../../contexts/useTheme";
import { Zap, Shield, TrendingUp, Clock, Check, Wifi, ArrowRight } from "lucide-react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import FooterSection from "../../home/components/sections/FooterSection";

// Página de Fibra Óptica Residencial
// Ubicación: src/ui/pages/services/fibra-residencial/index.tsx

export default function FibraResidencialPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    {
      icon: Zap,
      title: "Velocidad Simétrica",
      description: "Misma velocidad de subida y bajada hasta 1 Gbps",
      color: "#5B6FFF"
    },
    {
      icon: Shield,
      title: "Máxima Estabilidad",
      description: "99.9% uptime garantizado sin interferencias",
      color: "#7A8FFF"
    },
    {
      icon: TrendingUp,
      title: "Baja Latencia",
      description: "Ideal para gaming, streaming 4K y videollamadas",
      color: "#4A5CFF"
    },
    {
      icon: Clock,
      title: "Instalación Rápida",
      description: "Técnicos certificados en 24-48 horas",
      color: "#5B6FFF"
    }
  ];

  const benefits = [
    'Router WiFi 6 de última generación',
    'IP pública estática disponible',
    'Sin límite de descarga o consumo',
    'Soporte técnico 24/7',
    'Sin permanencia mínima',
    'Instalación sin costo adicional'
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className={`py-20 px-6 relative overflow-hidden ${
          isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}>
          {/* Efectos de fondo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: isDark ? '#5B6FFF15' : '#5B6FFF08' }}></div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: isDark ? '#7A8FFF15' : '#7A8FFF08' }}></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6" style={{
                background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                boxShadow: '0 8px 32px rgba(91, 111, 255, 0.3)'
              }}>
                <Wifi className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Fibra Óptica{' '}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)',
                  backgroundSize: '200% 100%'
                }}>
                  Residencial
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Conectividad de última generación con tecnología FTTH (Fiber To The Home)
              </p>
            </div>

            {/* Main Description */}
            <div className={`max-w-4xl mx-auto p-8 rounded-3xl ${
              isDark ? 'bg-gray-900/50' : 'bg-white'
            }`} style={{
              border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`
            }}>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Experimenta internet a velocidades ultrarrápidas con nuestra tecnología de fibra óptica FTTH. 
                Conexión simétrica directa a tu hogar sin intermediarios, proporcionando la mejor experiencia 
                de navegación, streaming y gaming disponible en el mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={`py-20 px-6 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Características Principales
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDark ? 'bg-gray-900' : 'bg-gray-50'
                    }`}
                    style={{
                      border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`,
                      boxShadow: isDark 
                        ? '0 4px 20px rgba(91, 111, 255, 0.1)' 
                        : '0 4px 20px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{
                      backgroundColor: isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'
                    }}>
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-20 px-6 ${
          isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto max-w-4xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Beneficios Incluidos
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-102 ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`}
                  style={{
                    border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`
                  }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{
                    backgroundColor: 'rgba(91, 111, 255, 0.2)'
                  }}>
                    <Check className="w-4 h-4" style={{ color: '#5B6FFF' }} />
                  </div>
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 px-6 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              ¿Listo para la mejor conexión?
            </h2>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Contrata ahora y disfruta de internet sin límites
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/precios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-white"
                style={{
                  background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                  boxShadow: '0 8px 32px rgba(91, 111, 255, 0.3)'
                }}
              >
                Ver Planes
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${isDark ? 'rgba(91, 111, 255, 0.3)' : 'rgba(91, 111, 255, 0.2)'}`
                }}
              >
                Contactar
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

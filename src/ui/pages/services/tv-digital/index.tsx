import { useTheme } from "../../../../contexts/useTheme";
import { Tv, Film, Clapperboard, Radio, Check, ArrowRight, Monitor, Users, Star, Play, Calendar } from "lucide-react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import FooterSection from "../../home/components/sections/FooterSection";

// Página de TV Digital HD
// Ubicación: src/ui/pages/services/tv-digital/index.tsx

export default function TVDigitalPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    {
      icon: Monitor,
      title: "Calidad 4K/HD",
      description: "Disfruta de imagen y sonido en máxima resolución con tecnología HDR",
      color: "#5B6FFF"
    },
    {
      icon: Film,
      title: "200+ Canales",
      description: "Entretenimiento, deportes, películas, series y contenido infantil",
      color: "#7A8FFF"
    },
    {
      icon: Play,
      title: "Video On Demand",
      description: "Miles de títulos disponibles cuando quieras, sin esperas",
      color: "#4A5CFF"
    },
    {
      icon: Calendar,
      title: "Grabación Cloud",
      description: "Graba tus programas favoritos y míralo cuando quieras, hasta 200 horas",
      color: "#5B6FFF"
    },
    {
      icon: Users,
      title: "Multi-Pantalla",
      description: "Ve diferentes contenidos en hasta 5 dispositivos simultáneamente",
      color: "#7A8FFF"
    },
    {
      icon: Star,
      title: "Contenido Premium",
      description: "Acceso a canales premium, estrenos y eventos deportivos exclusivos",
      color: "#4A5CFF"
    }
  ];

  const channelCategories = [
    {
      icon: Film,
      name: "Películas y Series",
      channels: ["HBO", "FOX", "Warner", "Universal", "Sony", "AXN", "FX", "TNT"],
      color: "#5B6FFF"
    },
    {
      icon: Clapperboard,
      name: "Deportes",
      channels: ["ESPN", "Fox Sports", "DirecTV Sports", "Win Sports", "TNT Sports", "Golf Channel"],
      color: "#7A8FFF"
    },
    {
      icon: Radio,
      name: "Noticias e Información",
      channels: ["CNN", "BBC", "Discovery", "History", "National Geographic", "TLC"],
      color: "#4A5CFF"
    },
    {
      icon: Users,
      name: "Entretenimiento Familiar",
      channels: ["Disney", "Nickelodeon", "Cartoon Network", "Disney Jr", "Nick Jr", "Baby TV"],
      color: "#5B6FFF"
    }
  ];

  const plans = [
    {
      name: "TV Básico",
      channels: "100+ canales",
      price: "$29",
      features: [
        "100+ canales HD",
        "Canales nacionales",
        "Canales infantiles",
        "Noticias 24/7",
        "Música",
        "Decodificador HD"
      ]
    },
    {
      name: "TV Premium",
      channels: "200+ canales",
      price: "$59",
      popular: true,
      features: [
        "200+ canales HD/4K",
        "Canales premium",
        "HBO & Cinemax",
        "Fox Premium",
        "Deportes en vivo",
        "Video On Demand",
        "Grabación cloud 100h",
        "Multi-pantalla (3 dispositivos)"
      ]
    },
    {
      name: "TV Total",
      channels: "300+ canales",
      price: "$99",
      features: [
        "300+ canales 4K/HD",
        "Todos los premium",
        "Eventos PPV incluidos",
        "Deportes exclusivos",
        "Estrenos de cine",
        "VOD ilimitado",
        "Grabación cloud 200h",
        "Multi-pantalla (5 dispositivos)",
        "App móvil premium"
      ]
    }
  ];

  const benefits = [
    "Sin contratos de permanencia",
    "Instalación profesional incluida",
    "Decodificador 4K de última generación",
    "Control parental avanzado",
    "Guía electrónica de programación",
    "Soporte técnico 24/7",
    "App móvil para ver en cualquier lugar",
    "Actualizaciones automáticas"
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className={`py-20 px-6 relative overflow-hidden ${
          isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ backgroundColor: isDark ? '#5B6FFF15' : '#5B6FFF08' }}></div>
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ backgroundColor: isDark ? '#7A8FFF15' : '#7A8FFF08' }}></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6" style={{
                background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                boxShadow: '0 8px 32px rgba(91, 111, 255, 0.3)'
              }}>
                <Tv className="w-10 h-10 text-white" />
              </div>

              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                TV Digital{' '}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)',
                  backgroundSize: '200% 100%'
                }}>
                  HD/4K
                </span>
              </h1>

              <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Entretenimiento sin límites con la mejor calidad de imagen y sonido
              </p>
            </div>

            <div className={`max-w-5xl mx-auto p-8 rounded-3xl ${
              isDark ? 'bg-gray-900/50' : 'bg-white'
            }`} style={{
              border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`
            }}>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Experimenta televisión de nueva generación con más de 300 canales en alta definición, 
                contenido on-demand, grabación en la nube y la posibilidad de ver tu contenido favorito 
                en múltiples dispositivos. Todo con la mejor calidad de imagen 4K/HD y sonido envolvente.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Características Principales
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Channel Categories */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Categorías de Contenido
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {channelCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl ${
                      isDark ? 'bg-gray-900' : 'bg-white'
                    }`}
                    style={{
                      border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                        backgroundColor: isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'
                      }}>
                        <Icon className="w-5 h-5" style={{ color: category.color }} />
                      </div>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {category.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.channels.map((channel, cIndex) => (
                        <span 
                          key={cIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Planes de TV
            </h2>
            <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Elige el plan perfecto para tu entretenimiento
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? isDark ? 'bg-gray-900' : 'bg-white'
                      : isDark ? 'bg-gray-900/50' : 'bg-white/50'
                  }`}
                  style={{
                    border: plan.popular 
                      ? `2px solid ${isDark ? '#5B6FFF' : '#5B6FFF'}`
                      : `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`,
                    boxShadow: plan.popular 
                      ? '0 8px 32px rgba(91, 111, 255, 0.3)'
                      : 'none'
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white" style={{
                      background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)'
                    }}>
                      Más Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </h3>
                    <div className={`text-sm mb-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {plan.channels}
                    </div>
                    <div className={`text-4xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                      <span className={`text-lg font-normal ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{
                          backgroundColor: 'rgba(91, 111, 255, 0.2)'
                        }}>
                          <Check className="w-3 h-3" style={{ color: '#5B6FFF' }} />
                        </div>
                        <span className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => window.location.href = '/contact'}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      plan.popular
                        ? 'text-white shadow-lg'
                        : isDark ? 'text-white' : 'text-gray-900'
                    }`}
                    style={plan.popular ? {
                      background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                      boxShadow: '0 4px 20px rgba(91, 111, 255, 0.3)'
                    } : {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      border: `2px solid ${isDark ? 'rgba(91, 111, 255, 0.3)' : 'rgba(91, 111, 255, 0.2)'}`
                    }}
                  >
                    Contratar Ahora
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
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
                  className={`flex items-center gap-4 p-4 rounded-xl ${
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
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              ¿Listo para el mejor entretenimiento?
            </h2>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Contrata ahora y disfruta de contenido ilimitado
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-white"
                style={{
                  background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                  boxShadow: '0 8px 32px rgba(91, 111, 255, 0.3)'
                }}
              >
                Contratar Ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/precios"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${isDark ? 'rgba(91, 111, 255, 0.3)' : 'rgba(91, 111, 255, 0.2)'}`
                }}
              >
                Ver Paquetes
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

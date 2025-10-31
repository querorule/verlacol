import { useTheme } from "../../../../contexts/useTheme";
import { Building2, Users, Lock, Headphones, Check, ArrowRight, Zap, Shield, Globe, Clock, TrendingUp, Award } from "lucide-react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import FooterSection from "../../home/components/sections/FooterSection";

// Página de Planes Empresariales
// Ubicación: src/ui/pages/services/planes-empresariales/index.tsx

export default function PlanesEmpresarialesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    {
      icon: Zap,
      title: "Alta Velocidad Dedicada",
      description: "Conexión de hasta 10 Gbps con ancho de banda garantizado para operaciones críticas",
      color: "#5B6FFF"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Firewall empresarial, VPN dedicada y protección DDoS incluida",
      color: "#7A8FFF"
    },
    {
      icon: Globe,
      title: "IP Estática",
      description: "Múltiples IPs públicas estáticas para servidores y servicios empresariales",
      color: "#4A5CFF"
    },
    {
      icon: Clock,
      title: "SLA 99.95%",
      description: "Acuerdo de nivel de servicio garantizado con compensación por downtime",
      color: "#5B6FFF"
    },
    {
      icon: Users,
      title: "Soporte Prioritario",
      description: "Equipo técnico dedicado disponible 24/7/365 con tiempos de respuesta garantizados",
      color: "#7A8FFF"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Planes flexibles que crecen con tu negocio sin interrupciones",
      color: "#4A5CFF"
    }
  ];

  const plans = [
    {
      name: "Business Starter",
      speed: "100 Mbps",
      price: "$99",
      features: [
        "100 Mbps simétricos",
        "1 IP estática",
        "Soporte técnico 24/7",
        "SLA 99.9%",
        "Router empresarial",
        "Instalación incluida"
      ]
    },
    {
      name: "Business Pro",
      speed: "500 Mbps",
      price: "$249",
      popular: true,
      features: [
        "500 Mbps simétricos",
        "3 IPs estáticas",
        "Soporte prioritario",
        "SLA 99.95%",
        "Firewall avanzado",
        "VPN dedicada",
        "Monitoreo 24/7",
        "Backup automático"
      ]
    },
    {
      name: "Enterprise",
      speed: "1 Gbps+",
      price: "Personalizado",
      features: [
        "Hasta 10 Gbps",
        "IPs ilimitadas",
        "Account manager",
        "SLA 99.99%",
        "Seguridad enterprise",
        "Redundancia total",
        "Consultoría incluida",
        "Migración asistida"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certificaciones",
      description: "ISO 27001, SOC 2, PCI DSS - Cumplimiento garantizado"
    },
    {
      icon: Lock,
      title: "Privacidad",
      description: "Tus datos nunca se comparten, tráfico encriptado end-to-end"
    },
    {
      icon: Headphones,
      title: "Account Manager",
      description: "Gerente de cuenta dedicado para resolver cualquier necesidad"
    }
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
                <Building2 className="w-10 h-10 text-white" />
              </div>

              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Planes{' '}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)',
                  backgroundSize: '200% 100%'
                }}>
                  Empresariales
                </span>
              </h1>

              <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Conectividad profesional 24/7 diseñada para impulsar tu negocio
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
                Soluciones de conectividad empresarial con infraestructura de grado carrier, 
                soporte técnico dedicado y acuerdos de nivel de servicio garantizados. 
                Ideal para oficinas, comercios, centros de datos y operaciones críticas que 
                requieren máxima disponibilidad y rendimiento constante.
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
              Características Empresariales
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

        {/* Pricing Plans */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Planes a tu Medida
            </h2>
            <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Elige el plan que mejor se adapte a las necesidades de tu empresa
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
                      {plan.speed}
                    </div>
                    <div className={`text-4xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                      {plan.price !== "Personalizado" && (
                        <span className={`text-lg font-normal ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>/mes</span>
                      )}
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
                    Contactar Ventas
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="container mx-auto max-w-6xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Beneficios Adicionales
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl text-center ${
                      isDark ? 'bg-gray-900' : 'bg-gray-50'
                    }`}
                    style={{
                      border: `1px solid ${isDark ? 'rgba(91, 111, 255, 0.2)' : 'rgba(91, 111, 255, 0.1)'}`
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{
                      background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                      boxShadow: '0 4px 20px rgba(91, 111, 255, 0.2)'
                    }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              ¿Listo para llevar tu empresa al siguiente nivel?
            </h2>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Habla con nuestro equipo de ventas empresariales
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
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+573001234567"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${isDark ? 'rgba(91, 111, 255, 0.3)' : 'rgba(91, 111, 255, 0.2)'}`
                }}
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

import { motion } from 'framer-motion';
import { Check, Wifi, Clock, Shield, Headphones, Tv, Download, Zap, Globe, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../../../contexts/useTheme';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Add global styles for the background animation
const addGlobalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 15s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `;
  document.head.appendChild(style);
  return () => {
    document.head.removeChild(style);
  };
};

const FiberServicePage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const removeStyles = addGlobalStyles();
    return () => removeStyles();
  }, []);

  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-verla-primary" />,
      title: "Velocidad Súper Rápida",
      description: "Disfruta de velocidades de hasta 1Gbps simétricos para descargas y subidas ultrarrápidas. Perfecto para streaming 4K, teletrabajo y juegos en línea sin interrupciones."
    },
    {
      icon: <Download className="w-8 h-8 text-verla-primary" />,
      title: "Sin Límites de Consumo",
      description: "Navega, descarga y comparte sin restricciones. Sin límites de datos en ninguno de nuestros planes."
    },
    {
      icon: <Clock className="w-8 h-8 text-verla-primary" />,
      title: "Estabilidad Garantizada",
      description: "Tecnología FTTH (Fiber To The Home) con 99.9% de disponibilidad. Conexión estable sin caídas ni fluctuaciones."
    },
    {
      icon: <Shield className="w-8 h-8 text-verla-primary" />,
      title: "Seguridad Integral",
      description: "Protección avanzada con cortafuegos integrado y seguridad perimetral para mantener tus dispositivos y datos seguros."
    },
    {
      icon: <Tv className="w-8 h-8 text-verla-primary" />,
      title: "TV en Alta Definición",
      description: "Disfruta de tu programación favorita en alta definición con nuestra oferta de TV por fibra óptica."
    },
    {
      icon: <Headphones className="w-8 h-8 text-verla-primary" />,
      title: "Soporte Técnico 24/7",
      description: "Equipo de expertos disponibles las 24 horas del día, los 7 días de la semana para resolver cualquier inconveniente."
    }
  ];

  const plans = [
    {
      name: "Básico",
      speed: "100 Mbps",
      uploadSpeed: "100 Mbps",
      price: "$89.900",
      popular: false,
      features: [
        "Velocidad simétrica de 100 Mbps",
        "Ideal para 3-5 dispositivos",
        "Streaming HD en múltiples pantallas",
        "Juegos en línea sin lag",
        "WiFi 5 incluido",
        "Soporte técnico prioritario"
      ]
    },
    {
      name: "Familiar",
      speed: "300 Mbps",
      uploadSpeed: "300 Mbps",
      price: "$129.900",
      popular: true,
      features: [
        "Velocidad simétrica de 300 Mbps",
        "Ideal para 5-8 dispositivos",
        "Streaming 4K en múltiples pantallas",
        "Juegos en línea en 4K sin lag",
        "WiFi 5 de alto rendimiento",
        "Soporte técnico prioritario"
      ]
    },
    {
      name: "Premium",
      speed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      price: "$179.900",
      popular: false,
      features: [
        "Velocidad simétrica de 1 Gbps",
        "Ilimitados dispositivos conectados",
        "Streaming 4K/8K en múltiples pantallas",
        "Gaming profesional sin latencia",
        "Router WiFi 6 incluido",
        "Soporte VIP 24/7"
      ]
    }
  ];

  const benefits = [
    "Conexión 100% simétrica (misma velocidad de subida y bajada)",
    "Sin límite de datos ni restricciones de consumo",
    "Instalación profesional sin costo adicional",
    "Equipo de última generación incluido (módem y router)",
    "Garantía de servicio del 99.9% de disponibilidad",
    "Tecnología GPON de última generación",
    "Soporte técnico especializado 24/7",
    "Sin contratos forzosos"
  ];

  // Calculate savings for the popular plan
  const calculateSavings = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    const savings = Math.round(numericPrice * 0.15);
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(savings);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-0">
        <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-5'}`}>
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 -right-10 w-72 h-72 bg-verla-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          to="/" 
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-white/90 hover:bg-gray-100'} shadow-lg backdrop-blur-sm transition-all duration-300`}
        >
          <ArrowLeft className="w-5 h-5 text-verla-primary" />
          <span className="font-medium">Volver al inicio</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden z-10 ${isDark ? 'bg-gradient-to-b from-gray-900/80 to-gray-950/80' : 'bg-gradient-to-b from-white/80 to-blue-50/80'} backdrop-blur-sm`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block py-1.5 px-4 mb-4 text-sm font-medium rounded-full bg-verla-primary/10 text-verla-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Internet de Fibra Óptica
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Internet ultrarrápido para tu <span className="text-verla-primary">hogar</span> y <span className="text-verla-primary">negocio</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conecta todos tus dispositivos sin preocupaciones y disfruta de la mejor experiencia de navegación.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#planes" 
                className="px-8 py-4 bg-verla-primary hover:bg-verla-600 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-verla-primary/30"
              >
                Ver planes
              </a>
              <a 
                href="#contacto" 
                className="px-8 py-4 border border-verla-primary text-verla-primary hover:bg-verla-primary/10 font-medium rounded-full transition-all duration-300"
              >
                Contáctanos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por qué elegir nuestra <span className="text-verla-primary">fibra óptica</span></h2>
            <p className="text-xl text-gray-400">La mejor tecnología para mantenerte conectado con lo que más importa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-verla-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planes" className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros <span className="text-verla-primary">Planes</span></h2>
            <p className="text-xl text-gray-400">Elige el plan que mejor se adapte a tus necesidades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative rounded-2xl p-8 ${plan.popular ? 'border-2 border-verla-primary' : 'border border-gray-800'} ${isDark ? 'bg-gray-900/50' : 'bg-white shadow-lg'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-verla-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
                {plan.popular && (
                  <div className="mb-4">
                    <span className="text-sm text-green-400">Ahorra {calculateSavings(plan.price)} con plan anual</span>
                  </div>
                )}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-verla-primary mr-2" />
                      <span className="text-2xl font-bold">{plan.speed}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center">
                        <span>↓ {plan.uploadSpeed} </span>
                        <span className="mx-1">|</span>
                        <span>↑ {plan.uploadSpeed}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Velocidad simétrica garantizada</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-verla-primary hover:bg-verla-600 text-white shadow-lg shadow-verla-primary/20' 
                      : 'bg-verla-primary/10 hover:bg-verla-primary/20 text-verla-primary'
                  }`}>
                    Contratar ahora
                  </button>
                  <button className="w-full py-2 text-sm text-verla-primary hover:underline">
                    Ver detalles del plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios exclusivos de nuestra <span className="text-verla-primary">fibra óptica</span></h2>
                <p className="text-lg text-gray-400 mb-8">
                  En Verla, no solo ofrecemos velocidad. Nuestra red de fibra óptica de última generación está diseñada para brindarte la mejor experiencia de internet en Colombia, con estabilidad, seguridad y soporte técnico de primer nivel.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative p-8 rounded-2xl ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'} shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6 border border-gray-700/30">
                  <img 
                    src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Fibra óptica Verla"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-verla-primary/10">
                    <Globe className="w-8 h-8 text-verla-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cobertura en expansión</h3>
                    <p className="text-gray-400">Llegamos a más hogares en toda Colombia cada día</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para experimentar el verdadero <span className="text-verla-primary">poder de la fibra óptica</span>?</h2>
            <p className="text-xl text-gray-400 mb-8">Verifica la cobertura en tu zona y contrata ahora mismo</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Ingresa tu dirección" 
                className="flex-1 px-6 py-4 rounded-full border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-verla-primary/50"
              />
              <button className="px-8 py-4 bg-verla-primary hover:bg-verla-600 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1">
                Verificar cobertura
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiberServicePage;
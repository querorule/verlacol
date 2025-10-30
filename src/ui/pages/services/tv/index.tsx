import { motion } from 'framer-motion';
import { Check, Tv, Film, Play, Radio, Headphones, Smartphone, Tablet } from 'lucide-react';
import { useTheme } from '../../../../contexts/useTheme';

const TVServicePage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    {
      icon: <Tv className="w-8 h-8 text-verla-primary" />,
      title: "Más de 200 canales",
      description: "Disfruta de una amplia variedad de canales nacionales e internacionales en alta definición."
    },
    {
      icon: <Film className="w-8 h-8 text-verla-primary" />,
      title: "Contenido bajo demanda",
      description: "Miles de horas de películas, series y documentales disponibles cuando quieras."
    },
    {
      icon: <Play className="w-8 h-8 text-verla-primary" />,
      title: "Grabación en la nube",
      description: "Graba tus programas favoritos en la nube sin necesidad de decodificadores adicionales."
    },
    {
      icon: <Radio className="w-8 h-8 text-verla-primary" />,
      title: "Radio digital",
      description: "Acceso a las mejores estaciones de radio nacionales e internacionales."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-verla-primary" />,
      title: "Multiplataforma",
      description: "Disfruta de la programación en tu TV, computadora, tableta o smartphone."
    },
    {
      icon: <Headphones className="w-8 h-8 text-verla-primary" />,
      title: "Soporte 24/7",
      description: "Asistencia técnica especializada disponible en todo momento."
    }
  ];

  const plans = [
    {
      name: "Básico",
      channels: "120+",
      price: "$49.900",
      popular: false,
      features: [
        "120+ canales en HD",
        "30 horas de grabación en la nube",
        "Contenido bajo demanda limitado",
        "Aplicación para dispositivos móviles",
        "2 dispositivos simultáneos",
        "Soporte estándar"
      ]
    },
    {
      name: "Familiar",
      channels: "180+",
      price: "$79.900",
      popular: true,
      features: [
        "180+ canales en HD y Full HD",
        "100 horas de grabación en la nube",
        "Catálogo completo bajo demanda",
        "Aplicación Premium para dispositivos",
        "4 dispositivos simultáneos",
        "Soporte prioritario"
      ]
    },
    {
      name: "Premium",
      channels: "250+",
      price: "$119.900",
      popular: false,
      features: [
        "250+ canales en HD, Full HD y 4K",
        "Grabación ilimitada en la nube",
        "Contenido Premium bajo demanda",
        "Aplicación Premium para dispositivos",
        "6 dispositivos simultáneos",
        "Soporte VIP 24/7"
      ]
    }
  ];

  const benefits = [
    "Señal 100% digital en alta definición",
    "Sin contratos forzosos ni permanencia",
    "Instalación profesional sin costo adicional",
    "Actualizaciones de software automáticas",
    "Guía de programación interactiva",
    "Controles parentales personalizables",
    "Acceso a canales internacionales",
    "Paquetes deportivos y de entretenimiento"
  ];

  // Calculate savings for the popular plan
  const calculateSavings = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    const savings = Math.round(numericPrice * 0.15);
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(savings);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block py-1.5 px-4 mb-4 text-sm font-medium rounded-full bg-verla-primary/10 text-verla-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Televisión Digital
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La mejor <span className="text-verla-primary">experiencia en televisión</span> para tu hogar
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Disfruta de la mejor programación en alta definición, series exclusivas, eventos en vivo y mucho más.
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
                Solicitar asesoría
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Todo lo que necesitas en <span className="text-verla-primary">entretenimiento</span></h2>
            <p className="text-xl text-gray-400">Disfruta de una experiencia de televisión sin igual con Verla TV</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Planes de <span className="text-verla-primary">Televisión</span></h2>
            <p className="text-xl text-gray-400">Elige el plan que mejor se adapte a tus necesidades de entretenimiento</p>
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-verla-primary text-white text-xs font-bold px-4 py-1 rounded-full">
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
                      <Tv className="w-5 h-5 text-verla-primary mr-2" />
                      <span className="text-2xl font-bold">{plan.channels} canales</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Incluye canales en HD y Full HD</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
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
                    Ver canales incluidos
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios de <span className="text-verla-primary">Verla TV</span></h2>
                <p className="text-lg text-gray-400 mb-8">
                  Nuestro servicio de televisión está diseñado para ofrecerte la mejor experiencia de entretenimiento, con tecnología de punta y contenido de calidad para toda la familia.
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
                className={`relative p-8 rounded-2xl ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'} shadow-xl overflow-hidden`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6 border border-gray-700/30">
                  <img 
                    src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Televisión Verla"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-verla-primary/10">
                    <Tablet className="w-8 h-8 text-verla-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Multiplataforma</h3>
                    <p className="text-gray-400">Disfruta de tu programación favorita en cualquier dispositivo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para llevar el mejor <span className="text-verla-primary">entretenimiento</span> a tu hogar?</h2>
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
            <p className="mt-4 text-sm text-gray-400">
              ¿Necesitas ayuda? Llama al <span className="text-verla-primary font-medium">01 8000 123 456</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TVServicePage;
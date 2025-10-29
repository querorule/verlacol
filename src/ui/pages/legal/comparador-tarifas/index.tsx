import { DollarSign, TrendingUp, Zap, CheckCircle, Star } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar/Navbar';
import FooterSection from '../../home/components/sections/FooterSection';

// Página de Comparador de Tarifas
// Ubicación: src/ui/pages/legal/comparador-tarifas/index.tsx

export default function ComparadorTarifasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-6">
              <DollarSign className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comparador de{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Tarifas
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Encuentra el plan perfecto para tus necesidades con total transparencia
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introducción */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                Transparencia Total en Precios
              </h2>
              <p className="text-gray-300 leading-relaxed">
                En cumplimiento con la normativa de la CRC, te presentamos de manera clara y transparente 
                todas nuestras tarifas, sin cargos ocultos ni sorpresas. Compara y elige con confianza.
              </p>
            </section>

            {/* Planes */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Planes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Básico',
                    speed: '50 Mbps',
                    price: '$45.000',
                    features: [
                      'Velocidad 50 Mbps',
                      'Datos ilimitados',
                      'WiFi incluido',
                      'Soporte 24/7',
                      'Sin permanencia'
                    ],
                    color: 'blue',
                    popular: false
                  },
                  {
                    name: 'Pro',
                    speed: '200 Mbps',
                    price: '$75.000',
                    features: [
                      'Velocidad 200 Mbps',
                      'Datos ilimitados',
                      'WiFi 6 incluido',
                      'Soporte prioritario',
                      'IP estática',
                      'Sin permanencia'
                    ],
                    color: 'purple',
                    popular: true
                  },
                  {
                    name: 'Ultra',
                    speed: '600 Mbps',
                    price: '$120.000',
                    features: [
                      'Velocidad 600 Mbps',
                      'Datos ilimitados',
                      'WiFi 6E mesh',
                      'Soporte VIP',
                      'IP estática',
                      'Antivirus premium',
                      'Sin permanencia'
                    ],
                    color: 'pink',
                    popular: false
                  }
                ].map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 border ${plan.popular ? 'border-purple-500/50' : 'border-white/10'} rounded-2xl p-8 hover:bg-white/10 transition-all ${plan.popular ? 'scale-105' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                        Más Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap className={`w-5 h-5 text-${plan.color}-400`} />
                        <span className={`text-xl font-semibold text-${plan.color}-400`}>{plan.speed}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">/mes</span>
                      </div>
                      <p className="text-sm text-gray-500">IVA incluido</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 text-${plan.color}-400 mt-0.5 shrink-0`} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full ${plan.popular ? 'bg-linear-to-r from-purple-600 to-pink-600' : 'bg-white/10 border border-white/20'} px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all`}
                    >
                      {plan.popular ? 'Contratar Ahora' : 'Ver Detalles'}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Tabla Comparativa */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Comparación Detallada</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-gray-400">Característica</th>
                      <th className="text-center py-4 px-4">Básico</th>
                      <th className="text-center py-4 px-4">Pro</th>
                      <th className="text-center py-4 px-4">Ultra</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Velocidad de descarga', basic: '50 Mbps', pro: '200 Mbps', ultra: '600 Mbps' },
                      { feature: 'Velocidad de subida', basic: '25 Mbps', pro: '100 Mbps', ultra: '300 Mbps' },
                      { feature: 'Datos mensuales', basic: 'Ilimitado', pro: 'Ilimitado', ultra: 'Ilimitado' },
                      { feature: 'Router WiFi', basic: 'WiFi 5', pro: 'WiFi 6', ultra: 'WiFi 6E Mesh' },
                      { feature: 'IP estática', basic: '—', pro: '✓', ultra: '✓' },
                      { feature: 'Antivirus', basic: '—', pro: '—', ultra: '✓' },
                      { feature: 'Soporte técnico', basic: '24/7', pro: 'Prioritario', ultra: 'VIP' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-gray-400">{row.basic}</td>
                        <td className="py-4 px-4 text-center text-purple-400 font-semibold">{row.pro}</td>
                        <td className="py-4 px-4 text-center text-purple-400 font-semibold">{row.ultra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Información Legal */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Información de Tarifas</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <p><strong className="text-white">Precio Total:</strong> Los precios mostrados incluyen IVA (19%) y todos los cargos aplicables.</p>
                <p><strong className="text-white">Sin permanencia:</strong> Puedes cancelar tu servicio en cualquier momento sin penalizaciones.</p>
                <p><strong className="text-white">Instalación:</strong> Cargo único de $50.000 para nuevos clientes (promociones disponibles).</p>
                <p><strong className="text-white">Velocidades:</strong> Las velocidades son garantizadas y verificables en todo momento.</p>
                <p><strong className="text-white">Facturación:</strong> Mensual con vencimiento el día 5 de cada mes.</p>
                <p><strong className="text-white">Medios de pago:</strong> Efectivo, transferencia, tarjeta de crédito, débito y PSE.</p>
              </div>
            </section>

            {/* Testimonios */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'María González', plan: 'Plan Pro', rating: 5, comment: 'Excelente servicio, la velocidad es constante y el precio muy competitivo.' },
                  { name: 'Carlos Ruiz', plan: 'Plan Ultra', rating: 5, comment: 'Vale cada peso, trabajo desde casa y nunca he tenido problemas.' },
                  { name: 'Ana Torres', plan: 'Plan Básico', rating: 5, comment: 'Perfecto para mi hogar, el soporte técnico es muy bueno.' }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.plan}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Listo para cambiar a la mejor conexión?</h2>
              <p className="text-gray-300 mb-6">
                Contáctanos y uno de nuestros asesores te ayudará a elegir el plan ideal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
                  Hablar con un Asesor
                </button>
                <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                  Verificar Cobertura
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

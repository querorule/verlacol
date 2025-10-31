import { Shield, Heart, Lock, AlertTriangle } from 'lucide-react';
import { PageLayout } from '../../../../shared/components';

// Página de Protección Infantil
// Ubicación: src/ui/pages/legal/proteccion-infantil/index.tsx

export default function ProteccionInfantilPage() {
  return (
    <PageLayout>
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Protección{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                  Infantil
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Medidas y protocolos para garantizar un entorno digital seguro para menores de edad
              </p>
            </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introducción */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-400" />
                Nuestro Compromiso
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                La protección de menores es una prioridad absoluta. Implementamos controles rigurosos 
                y tecnologías avanzadas para crear un ambiente digital seguro, cumpliendo con la 
                Ley 1098 de Infancia y Adolescencia de Colombia y estándares internacionales como COPPA.
              </p>
            </section>

            {/* Medidas de Protección */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-purple-400" />
                Medidas de Protección Activa
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Filtrado de Contenido',
                    description: 'Sistema automatizado que bloquea contenido inapropiado para menores',
                    icon: Shield,
                  },
                  {
                    title: 'Control Parental',
                    description: 'Herramientas para que padres supervisen y gestionen el acceso',
                    icon: Lock,
                  },
                  {
                    title: 'Verificación de Edad',
                    description: 'Mecanismos robustos para validar la edad de los usuarios',
                    icon: AlertTriangle,
                  },
                  {
                    title: 'Reporte Inmediato',
                    description: 'Sistema de denuncia rápida ante contenido inadecuado',
                    icon: Heart,
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Guía para Padres */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Guía para Padres y Tutores</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">🔍 Supervisión Activa</h3>
                  <p>Mantén comunicación abierta con tus hijos sobre su actividad en línea y revisa periódicamente su uso.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">⚙️ Configura Controles</h3>
                  <p>Utiliza las herramientas de control parental disponibles para establecer límites apropiados.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">🚨 Reporta Incidentes</h3>
                  <p>Si detectas contenido inapropiado, repórtalo inmediatamente a través de nuestros canales oficiales.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">📚 Educa sobre Seguridad</h3>
                  <p>Enseña a los menores sobre los riesgos en línea y cómo navegar de forma segura.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda o tienes alguna denuncia?</h2>
              <p className="text-gray-300 mb-6">
                Contamos con un equipo especializado disponible 24/7 para atender casos de protección infantil
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
                  Reportar Incidente
                </button>
                <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                  Guía de Controles Parentales
                </button>
              </div>
            </section>
          </div>
        </div>
    </PageLayout>
  );
}

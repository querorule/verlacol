import { FileText, Scale, BookOpen, ExternalLink } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar/Navbar';
import FooterSection from '../../home/components/sections/FooterSection';

// Página de Normatividad
// Ubicación: src/ui/pages/legal/normatividad/index.tsx

export default function NormatividadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marco{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Normativo
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Legislación y regulaciones que rigen nuestras operaciones en Colombia
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introducción */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-400" />
                Marco Legal Vigente
              </h2>
              <p className="text-gray-300 leading-relaxed">
                VERLACOL opera bajo estricto cumplimiento de la normativa colombiana en materia de 
                telecomunicaciones, protección de datos y servicios digitales. Nuestro compromiso es 
                mantener la transparencia total con nuestros usuarios respecto a las leyes que nos rigen.
              </p>
            </section>

            {/* Leyes Principales */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                Normativas Principales
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Ley 1480 de 2011',
                    subtitle: 'Estatuto del Consumidor',
                    description: 'Protección de los derechos de los consumidores y establecimiento de responsabilidades de proveedores.',
                    link: '#'
                  },
                  {
                    title: 'Ley 1341 de 2009',
                    subtitle: 'TIC en Colombia',
                    description: 'Principios y conceptos sobre la sociedad de la información y organización de las TIC.',
                    link: '#'
                  },
                  {
                    title: 'Ley 1581 de 2012',
                    subtitle: 'Protección de Datos Personales',
                    description: 'Régimen general de protección de datos personales y Habeas Data.',
                    link: '#'
                  },
                  {
                    title: 'Ley 1098 de 2006',
                    subtitle: 'Código de Infancia y Adolescencia',
                    description: 'Protección integral de los niños, niñas y adolescentes.',
                    link: '#'
                  },
                  {
                    title: 'Resolución CRC 5050 de 2016',
                    subtitle: 'Régimen de Protección al Usuario',
                    description: 'Obligaciones de los proveedores de servicios de telecomunicaciones.',
                    link: '#'
                  }
                ].map((law, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 text-blue-400">{law.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{law.subtitle}</p>
                        <p className="text-sm text-gray-300">{law.description}</p>
                      </div>
                      <a 
                        href={law.link}
                        className="shrink-0 p-2 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-400" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Entidades Reguladoras */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Entidades Reguladoras</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'CRC',
                    fullName: 'Comisión de Regulación de Comunicaciones',
                    role: 'Regulación del sector de las telecomunicaciones',
                  },
                  {
                    name: 'SIC',
                    fullName: 'Superintendencia de Industria y Comercio',
                    role: 'Protección de datos personales y derechos del consumidor',
                  },
                  {
                    name: 'MinTIC',
                    fullName: 'Ministerio de Tecnologías de la Información',
                    role: 'Política pública del sector TIC en Colombia',
                  },
                  {
                    name: 'ANE',
                    fullName: 'Agencia Nacional del Espectro',
                    role: 'Administración y vigilancia del espectro radioeléctrico',
                  }
                ].map((entity, index) => (
                  <div
                    key={index}
                    className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5"
                  >
                    <h3 className="text-lg font-bold text-blue-400 mb-1">{entity.name}</h3>
                    <p className="text-sm font-semibold text-white mb-2">{entity.fullName}</p>
                    <p className="text-sm text-gray-400">{entity.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Necesitas más información legal?</h2>
              <p className="text-gray-300 mb-6">
                Nuestro departamento legal está disponible para aclarar cualquier duda sobre normativas
              </p>
              <button className="bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all">
                Contactar Área Legal
              </button>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

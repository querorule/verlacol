import { Mail, Phone, MapPin, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';

// Página Contact con diseño moderno
// Ubicación: src/ui/pages/contact/Contact.tsx
export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío
    console.log('Formulario enviado');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradiente de fondo */}
      <div className="fixed inset-0 bg-linear-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      {/* Partículas de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center text-[#1E2BBF] hover:text-[#FFFFFF] mb-12 transition-colors duration-700 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center leading-tight">
            <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient inline-block" style={{ backgroundImage: 'linear-gradient(to right, #1E2BBF, #2E3FE6, #4A5CFF, #FFFFFF, #4A5CFF, #2E3FE6, #1E2BBF)', backgroundSize: '200% 100%' }}>
              Contáctanos
            </span>
            {/* Efecto de brillo/glow */}
            <div className="absolute inset-0 blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, #4A5CFF 0%, transparent 70%)' }}></div>
          </h1>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <Mail size={28} className="text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Email</h3>
                <a href="mailto:contacto@verlacol.com" className="text-gray-400 hover:text-white transition-colors">
                  contacto@verlacol.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 group-hover:scale-110 transition-all duration-300">
                  <Phone size={28} className="text-green-400 group-hover:text-green-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">Teléfono</h3>
                <a href="tel:+573115761963" className="text-gray-400 hover:text-white transition-colors">
                  +57 311-576-1963
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin size={28} className="text-purple-400 group-hover:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Ubicación</h3>
                <p className="text-gray-400">Bogotá, Colombia</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-t border-white/10 pt-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_-5px] hover:shadow-[#4A5CFF]/70"
                  style={{
                    background: 'linear-gradient(135deg, #1E2BBF 0%, #2E3FE6 50%, #4A5CFF 100%)',
                  }}
                >
                  Enviar Mensaje
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

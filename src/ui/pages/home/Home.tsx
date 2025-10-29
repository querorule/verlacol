import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, Sparkles } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';

import { useState } from 'react';

// Página Home con diseño moderno tipo Superhuman
// Ubicación: src/ui/pages/home/Home.tsx
export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const companies = ['DEEL', 'COMPASS', 'GREENHOUSE', 'DIEZ', 'OPENAI', 'ALLBIRDS'];
  const categoriesRow1 = ['Security', 'Strategy', 'Product', 'People', 'Design', 'Sales', 'Finance'];
  const categoriesRow2 = ['Customer Success', 'Business Development', 'Analytics', 'Engineering', 'Operations', 'Marketing', 'Leadership'];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradiente de fondo sutil */}
      <div className="fixed inset-0 bg-linear-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      {/* Partículas de fondo animadas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Botón de Chat flotante moderno */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Abrir chat"
      >
        <div className="relative">
          {/* Badge de notificación */}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              1
            </div>
          )}
          
          {/* Círculo principal con gradiente */}
          <div className="relative w-14 h-14 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 hover:scale-110">
            {/* Efecto ping de fondo */}
            {!isChatOpen && <div className="absolute inset-0 w-16 h-16 bg-purple-600/30 rounded-full animate-ping" />}
            
            {/* Icono de chat o X */}
            {isChatOpen ? (
              <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
          </div>

          {/* Tooltip en hover */}
          {!isChatOpen && (
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white text-black px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                ¿Necesitas ayuda?
                <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-white" />
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Chat Widget con animación suave */}
      <div className={`fixed bottom-24 right-6 z-40 transition-all duration-500 ease-out ${
        isChatOpen 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}>
        <div className="w-96 h-[500px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Soporte VerlaCol</h3>
                <p className="text-xs text-white/80">Estamos aquí para ayudarte</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {/* Mensaje del sistema */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3">
                  <p className="text-sm text-gray-300">
                    ¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Ahora</span>
              </div>
            </div>

            {/* Opciones rápidas */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Respuestas rápidas:</p>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">💼 ¿Cómo empezar con VerlaCol?</p>
              </button>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">💰 Ver planes y precios</p>
              </button>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">🤝 Hablar con un experto</p>
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button className="bg-linear-to-r from-purple-600 to-pink-600 rounded-xl px-4 py-2 hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      
      {/* Hero Section - Modernizado */}
      <section className="pt-40 pb-32 px-6 relative z-10 overflow-hidden">
        {/* Efectos de fondo hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          {/* Badge superior animado */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              ✨ Nueva versión disponible
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
            Velocidad que{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient inline-block">
              conecta
            </span>
            <br />
            tu mundo
            <br />
            <span className="text-gray-600">,sin limites</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            VerlaCol es la plataforma más productiva que jamás hayas usado.
            <br />
            <span className="text-gray-500">Colabora más rápido y logra más con tecnología inteligente.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Comenzar gratis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:border-white/20">
              Ver demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-pink-600 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                  {i}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                +50
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Más de 50+ equipos ya están trabajando más rápido
            </p>
          </div>
        </div>
      </section>

      {/* App Preview Section - Mockup web moderno */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Mockup de interfaz web moderna */}
            <div className="aspect-video bg-linear-to-br from-purple-900/30 via-black to-pink-900/30 relative">
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full bg-linear-to-br from-purple-950/40 to-pink-950/40 rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm">
                  {/* Browser Header */}
                  <div className="bg-white/5 border-b border-white/10 p-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-xs text-gray-400">https://app.verlacol.com</span>
                      <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Web Content */}
                  <div className="p-6 space-y-4 h-full overflow-hidden">
                    {/* Simulated web cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg mb-3 flex items-center justify-center">
                          <Sparkles size={16} className="text-purple-400" />
                        </div>
                        <div className="h-2 bg-white/20 rounded mb-2 w-3/4"></div>
                        <div className="h-2 bg-white/10 rounded w-full"></div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 bg-pink-500/20 rounded-lg mb-3 flex items-center justify-center">
                          <Users size={16} className="text-pink-400" />
                        </div>
                        <div className="h-2 bg-white/20 rounded mb-2 w-3/4"></div>
                        <div className="h-2 bg-white/10 rounded w-full"></div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg mb-3 flex items-center justify-center">
                          <Zap size={16} className="text-orange-400" />
                        </div>
                        <div className="h-2 bg-white/20 rounded mb-2 w-3/4"></div>
                        <div className="h-2 bg-white/10 rounded w-full"></div>
                      </div>
                    </div>
                    
                    {/* Main content area */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Sparkles size={32} className="text-purple-400 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Tu Plataforma Web</h3>
                        <p className="text-gray-400 text-sm">Colaboración en tiempo real · IA integrada · Sincronización cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section - Logos minimalistas modernos */}
      <section className="py-20 px-6 overflow-hidden bg-black">
        <div className="container mx-auto">
          {/* Contenedor de scroll animado sin gradientes visibles */}
          <div className="flex gap-20 animate-scroll whitespace-nowrap py-4 mask-fade">
            {/* Primera copia de logos */}
            {companies.map((company, index) => (
              <span 
                key={`${company}-1-${index}`} 
                className="text-white/40 text-lg font-bold tracking-[0.2em] hover:text-white/70 transition-all duration-300"
              >
                {company}
              </span>
            ))}
            {/* Segunda copia para scroll infinito */}
            {companies.map((company, index) => (
              <span 
                key={`${company}-2-${index}`} 
                className="text-white/40 text-lg font-bold tracking-[0.2em] hover:text-white/70 transition-all duration-300"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modernizada */}
      <section className="relative py-40 px-6 overflow-hidden bg-black">
        {/* Texto TEAM con efecto outline visible */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
          <span 
            className="text-[28rem] md:text-[35rem] font-black tracking-wider leading-none text-team-outline"
          >
            TEAM
          </span>
        </div>
        
        {/* Efectos de fondo sutiles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Impact & Results</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            VerlaCol saves teams over
          </h2>
          
          <div className="mb-8">
            <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-orange-400 to-yellow-300 animate-gradient">
              15 million hours
            </span>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-400 font-light">
            every single year.
          </p>

          {/* Stats cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform">
                2x
              </div>
              <p className="text-gray-400 text-sm">Faster Response</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                50%
              </div>
              <p className="text-gray-400 text-sm">Less Meetings</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <p className="text-gray-400 text-sm">Team Alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Modernizada */}
      <section className="py-40 px-6 bg-black relative z-10 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Badge superior */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">The Challenge</span>
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-center">
            Email is the{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
              biggest problem
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
              hiding in plain sight
            </span>
          </h2>
          
          {/* Descripción principal */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Todos pasamos horas trabajando. Pero a menudo respondemos tarde, a veces no respondemos en absoluto.
              Terminamos perdiendo oportunidades, bloqueando a nuestros equipos y perdiendo nuestros objetivos.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              No es culpa de nadie. El trabajo en equipo{' '}
              <span className="text-white font-semibold bg-white/5 px-2 py-1 rounded">no ha cambiado en décadas</span>.
              Con VerlaCol, todo esto cambia.
            </p>
          </div>

          {/* Stats problemáticas */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center hover:bg-red-500/10 transition-all duration-300">
              <div className="text-5xl font-black text-red-400 mb-2">4hrs</div>
              <p className="text-gray-400 text-sm">Perdidas diariamente</p>
            </div>
            
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 text-center hover:bg-orange-500/10 transition-all duration-300">
              <div className="text-5xl font-black text-orange-400 mb-2">62%</div>
              <p className="text-gray-400 text-sm">Emails sin respuesta</p>
            </div>
            
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition-all duration-300">
              <div className="text-5xl font-black text-yellow-400 mb-2">15+</div>
              <p className="text-gray-400 text-sm">Reuniones semanales</p>
            </div>
          </div>

          {/* Categories - Dos filas con scroll infinito en direcciones opuestas */}
          <div className="mt-16 space-y-6 overflow-hidden">
            {/* Primera fila - Derecha a Izquierda */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
              
              <div className="flex gap-4 animate-scroll-rtl whitespace-nowrap">
                {/* Primera copia */}
                {categoriesRow1.map((category, index) => (
                  <span
                    key={`${category}-1-${index}`}
                    className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
                {/* Segunda copia para loop infinito */}
                {categoriesRow1.map((category, index) => (
                  <span
                    key={`${category}-2-${index}`}
                    className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Segunda fila - Izquierda a Derecha */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
              
              <div className="flex gap-4 animate-scroll-ltr whitespace-nowrap">
                {/* Primera copia */}
                {categoriesRow2.map((category, index) => (
                  <span
                    key={`${category}-1-${index}`}
                    className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
                {/* Segunda copia para loop infinito */}
                {categoriesRow2.map((category, index) => (
                  <span
                    key={`${category}-2-${index}`}
                    className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300">
                <Zap size={32} className="text-purple-400 group-hover:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Velocidad</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Responde y organiza tu trabajo 2x más rápido con atajos inteligentes
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-600/30 group-hover:scale-110 transition-all duration-300">
                <Users size={32} className="text-pink-400 group-hover:text-pink-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Colaboración</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Trabaja en equipo de manera fluida con herramientas integradas
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600/30 group-hover:scale-110 transition-all duration-300">
                <Target size={32} className="text-orange-400 group-hover:text-orange-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Enfoque</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Mantén lo importante en el centro con priorización inteligente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Moderno Mejorado */}
      <footer className="relative py-24 px-6 bg-black overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Footer Top - Newsletter */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Mantente{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                actualizado
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Recibe las últimas novedades y tips directamente en tu inbox
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>

          <div className="border-t border-white/5 pt-16 mb-12" />

          {/* Footer Content Grid */}
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black mb-2 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
                  VERLACOL
                </h3>
                <p className="text-sm text-gray-500 font-mono">by Modern Teams</p>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                La plataforma más productiva para equipos modernos. 
                Colabora mejor, trabaja más rápido, logra más.
              </p>
              <div className="flex gap-3">
                <a href="#" className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="group w-11 h-11 bg-white/5 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Producto</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Ventajas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Precios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Seguridad</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Nosotros</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Novedades</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Carreras</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contacto</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Legal y Regulatorio</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Protección Infantil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Protección al Usuario y Normativa</a></li> 
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-500 text-sm">
                © 2025 VerlaCol. Todos los derechos reservados.
              </p>
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Todos los sistemas operativos</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

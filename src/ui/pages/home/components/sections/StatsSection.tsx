// Stats section with TEAM background and metrics
// Ubicación: src/ui/pages/home/components/StatsSection.tsx

export default function StatsSection() {
  return (
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#1E2BBF0D' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#2E3FE60D' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-block mb-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Impact & Results</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          VerlaCol saves teams over
        </h2>
        
        <div className="mb-8 relative">
          <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient inline-block" style={{ backgroundImage: 'linear-gradient(to right, #1E2BBF, #2E3FE6, #4A5CFF, #FFFFFF, #4A5CFF, #2E3FE6, #1E2BBF)', backgroundSize: '200% 100%' }}>
            15 million hours
          </span>
          {/* Efecto de brillo/glow */}
          <div className="absolute inset-0 blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, #4A5CFF 0%, transparent 70%)' }}></div>
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-400 font-light">
          every single year.
        </p>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#1E2BBF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#2E3FE6] to-[#4A5CFF] mb-2 group-hover:scale-110 transition-transform">
              2x
            </div>
            <p className="relative text-gray-400 text-sm">Faster Response</p>
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
  );
}

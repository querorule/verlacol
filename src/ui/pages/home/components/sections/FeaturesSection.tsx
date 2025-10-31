import { useTheme } from "../../../../../contexts";
import { useNavigate } from "react-router-dom";

// Services section - Internet and connectivity services showcase
// Ubicación: src/ui/pages/home/components/FeaturesSection.tsx

const services = [
  {
    id: 1,
    title: "Fibra Óptica Residencial",
    description: "Alta velocidad para tu hogar",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    category: "Internet",
  },
  {
    id: 2,
    title: "Planes Empresariales",
    description: "Conectividad profesional 24/7",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
    category: "Business",
  },
  {
    id: 3,
    title: "TV Digital HD",
    description: "Entretenimiento sin límites",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop&q=80",
    category: "Entertainment",
  },
];

export default function FeaturesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <section
      className={`py-20 md:py-32 px-6 relative overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: isDark ? "#5B6FFF15" : "#5B6FFF08" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: isDark ? "#7A8FFF15" : "#7A8FFF08" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="space-y-4">
              <h2
                className={`text-4xl md:text-5xl font-black leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                Nuestros{" "}
                <span className="relative inline-block">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    Servicios
                  </span>
                </span>
              </h2>
              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                Descubre nuestra gama completa de soluciones de conectividad
                diseñadas para llevar tu experiencia digital al siguiente nivel
              </p>
            </div>

            {/* Service 1 - Below Text */}
            <div
              onClick={() => navigate("/services/fibra-residencial")}
              className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
              ></div>

              <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)",
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                        filter: "blur(8px)",
                      }}
                    ></div>

                    <div
                      className="relative flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(91, 111, 255, 0.4), rgba(122, 143, 255, 0.3))",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 4px 12px rgba(91, 111, 255, 0.2)",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "#FFFFFF" }}
                      ></div>
                      <span
                        className="text-xs font-black uppercase tracking-wider"
                        style={{
                          color: "#FFFFFF",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {services[0].category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3
                    className="text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300"
                    style={{
                      color: "#FFFFFF",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {services[0].title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#A0B0FF",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}
                  >
                    {services[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Service 2 - Top Right */}
            <div
              onClick={() => navigate("/services/planes-empresariales")}
              className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
            >
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #7A8FFF, #5B6FFF)",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
              ></div>

              <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={services[1].image}
                  alt={services[1].title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)",
                  }}
                />

                <div className="absolute top-3 left-3 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, #7A8FFF, #5B6FFF)",
                        filter: "blur(8px)",
                      }}
                    ></div>

                    <div
                      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(122, 143, 255, 0.4), rgba(91, 111, 255, 0.3))",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 4px 12px rgba(122, 143, 255, 0.2)",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "#FFFFFF" }}
                      ></div>
                      <span
                        className="text-xs font-black uppercase tracking-wider"
                        style={{
                          color: "#FFFFFF",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                          fontSize: "10px",
                        }}
                      >
                        {services[1].category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                  <h3
                    className="text-lg font-bold group-hover:translate-y-[-2px] transition-transform duration-300"
                    style={{
                      color: "#FFFFFF",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {services[1].title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{
                      color: "#A0B0FF",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}
                  >
                    {services[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div
              onClick={() => navigate("/services/tv-digital")}
              className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
            >
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                    filter: "blur(12px)",
                    zIndex: -1,
                  }}
                ></div>

                <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-[1.03] group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t"
                    style={{
                      backgroundImage: isDark
                        ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)"
                        : "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)",
                    }}
                  />

                  <div className="absolute top-2 left-2 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div
                        className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                          filter: "blur(6px)",
                        }}
                      ></div>

                      <div
                        className="relative flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(74, 92, 255, 0.4), rgba(122, 143, 255, 0.3))",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 3px 10px rgba(74, 92, 255, 0.2)",
                        }}
                      >
                        <div
                          className="w-1 h-1 rounded-full animate-pulse"
                          style={{ background: "#FFFFFF" }}
                        ></div>
                        <span
                          className="text-xs font-black uppercase tracking-wider"
                          style={{
                            color: "#FFFFFF",
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            fontSize: "9px",
                          }}
                        >
                          {services[2].category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 space-y-0.5">
                    <h3
                      className="text-sm font-bold group-hover:translate-y-[-2px] transition-transform duration-300"
                      style={{
                        color: "#FFFFFF",
                        fontFamily:
                          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      {services[2].title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{
                        color: "#A0B0FF",
                        fontFamily:
                          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontSize: "11px",
                      }}
                    >
                      {services[2].description}
                    </p>
                  </div>
                </div>
            </div>

            {/* See More Button - Full Width */}
            <div className="group relative">
              {/* Glow effect on hover */}
              {/* <div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                  filter: "blur(15px)",
                }}
              ></div> */}

              {/* <a
                href="#services"
                className="relative flex items-center justify-center gap-2 w-full px-10 py-4 font-bold rounded-full transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl backdrop-blur-sm"
                style={{
                  background: isDark ? 'linear-gradient(135deg, rgba(91, 111, 255, 0.15), rgba(122, 143, 255, 0.1))' : 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.05))',
                  border: '2px solid rgba(91, 111, 255, 0.4)',
                  color: isDark ? '#FFFFFF' : '#5B6FFF',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  boxShadow: '0 4px 20px rgba(91, 111, 255, 0.1)'
                }}
              > */}
              {/* <span className="group-hover:translate-x-[-4px] transition-transform duration-300">
                  Ver Todos los Servicios
                </span> */}
              {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRICING: "/precios",
  LEGAL: {
    PROTECCION_USUARIOS: "/legal/proteccion-usuarios",
    PROTECCION_INFANTIL: "/legal/proteccion-infantil",
    NORMATIVIDAD: "/legal/normatividad",
    PROTECCION_DATOS: "/legal/proteccion-datos",
    INTERNET_SANO: "/legal/internet-sano",
    FILTRADO: "/legal/filtrado",
    SEGURIDAD: "/legal/seguridad",
    COMPARADOR_TARIFAS: "/legal/comparador-tarifas",
  },
  SERVICES: {
    FIBRA_RESIDENCIAL: "/services/fibra-residencial",
    PLANES_EMPRESARIALES: "/services/planes-empresariales",
    TV_DIGITAL: "/services/tv-digital",
  },
} as const

export default ROUTES

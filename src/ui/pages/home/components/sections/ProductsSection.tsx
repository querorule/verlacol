import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../../../../contexts/useTheme";

const products = [
  {
    id: 1,
    title: "Internet por Fibra Óptica",
    description:
      "Velocidades ultrarrápidas y conexión estable con nuestra red de fibra óptica de última generación. Ideal para streaming, juegos en línea y teletrabajo.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/services/fiber",
  },
  {
    id: 2,
    title: "Televisión IP",
    description:
      "Más de 200 canales en alta definición, contenido bajo demanda y funciones avanzadas como pausar y retroceder en vivo. Disfruta del mejor entretenimiento en un solo lugar.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/services/tv",
  },
  {
    id: 3,
    title: "Internet + TV",
    description:
      "El mejor combo de internet de alta velocidad y televisión de calidad. Ahorra con nuestros paquetes combinados diseñados para toda la familia.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#internet-tv",
  },
  {
    id: 4,
    title: "Soporte Técnico 24/7",
    description:
      "Asistencia técnica especializada disponible las 24 horas del día, los 7 días de la semana. Tu conexión siempre activa con nuestro soporte dedicado.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#soporte-tecnico",
  },
];

const ProductsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-gray-950"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            className={`inline-block py-1.5 px-4 mb-4 text-sm font-medium rounded-full ${
              isDark
                ? "text-verla-primary bg-verla-primary/10"
                : "text-verla-600 bg-verla-100"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Productos
          </motion.span>
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre nuestra{" "}
            <span className="text-verla-primary">gama de productos</span>
          </motion.h2>
          <motion.p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluciones de alta calidad diseñadas para satisfacer tus necesidades
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl p-5 overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-gray-900/50 border border-gray-800/50 hover:border-verla-primary/30"
                  : "bg-white border border-gray-100 hover:border-verla-primary/50 shadow-lg hover:shadow-xl"
              }`}
            >
              <div
                className={`relative h-48 mb-5 rounded-xl overflow-hidden ${
                  isDark ? "bg-gray-800/50" : "bg-gray-50"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isDark && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={product.link}
                      className="inline-flex items-center text-white hover:text-verla-200 transition-colors"
                    >
                      Ver más detalles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {product.title}
              </h3>
              <p
                className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {product.description}
              </p>
              <a
                href={product.link}
                className={`inline-flex items-center text-sm font-medium ${
                  isDark
                    ? "text-verla-300 hover:text-white"
                    : "text-verla-600 hover:text-verla-800"
                } transition-colors`}
              >
                Ver producto
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-verla-primary hover:bg-verla-600 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-verla-primary/20"
          >
            Contáctanos para más información
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

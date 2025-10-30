import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../../../../contexts/useTheme";

const products = [
  {
    id: 1,
    title: "Internet Residencial",
    description:
      "Conexión de alta velocidad para tu hogar con soporte 24/7 y sin límite de datos.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#internet-residencial",
  },
  {
    id: 2,
    title: "Internet Empresarial",
    description:
      "Conexión dedicada para empresas con ancho de banda garantizado y soporte prioritario.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#internet-empresarial",
  },
  {
    id: 3,
    title: "Servicios en la Nube",
    description:
      "Soluciones de almacenamiento y procesamiento en la nube para tu negocio.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#servicios-nube",
  },
  {
    id: 4,
    title: "Redes Corporativas",
    description:
      "Diseño e implementación de redes seguras para empresas de todos los tamaños.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#redes-corporativas",
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

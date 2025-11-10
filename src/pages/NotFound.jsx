import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    // Usamos 'min-h-screen' y 'flex' para centrar todo vertical y horizontalmente
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        
        {/* Animación de aparición, igual que en tus otras páginas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          {/* El '404' usa el color azul principal de tu marca */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-blue-700">
            404
          </h1>
          
          {/* El título secundario */}
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Página No Encontrada
          </h2>
          
          {/* El texto de ayuda */}
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Lo sentimos, la página que estás buscando no existe, ha sido movida o está temporalmente fuera de servicio.
          </p>
          
          {/* El botón de acción, con el mismo estilo que tu CTA */}
          <div className="mt-8">
            <Link
              to="/" // Enlace a la página de inicio
              className="inline-block px-6 py-3 text-base font-semibold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
            >
              Volver al Inicio
            </Link>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
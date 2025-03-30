import { motion } from "framer-motion";
import HeroImage from "../../assets/personas.webp"; // Asegúrate de tener esta imagen en tu proyecto

const Hero = () => {
  return (
    <section className="relative py-20 bg-slate-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
            ¡Bienvenidos! Somos <span className="text-blue-700">Sueños Misioneros</span>
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl text-gray-700 font-semibold">
            Trabajamos por un mundo más solidario, justo y lleno de oportunidades.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Únete a nuestra misión: fomentar la cultura, apoyar a quienes más lo necesitan 
            y construir un futuro basado en valores y colaboración.
          </p>

          {/* Lista de impacto */}
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-center">
              ✅ <span className="ml-2">Impulsamos el arte y la educación en comunidades vulnerables.</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Brindamos apoyo a familias en situación de riesgo.</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Creamos redes de colaboración para el bienestar social.</span>
            </li>
          </ul>

          {/* Botones de acción */}
          {/* <div className="mt-6 flex space-x-4 justify-center md:justify-start">
            <a
              href="#"
              className="bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-all duration-300 inline-block"
            >
              Conócenos
            </a>
            <a
              href="#"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 inline-block"
            >
              Colabora
            </a>
          </div> */}
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <img
            src={HeroImage}
            alt="Héroes comunitarios"
            className="w-[300px] sm:w-[400px] drop-shadow-lg rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import HeroImage from "../../assets/Cataratas-del-lado-argentino.jpg"; // Asegúrate de tener esta imagen en tu proyecto

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50/20 to-purple-50/20 bg-slate-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
            Bienvenidos a <span className="text-blue-700">Fundación Sueños Misioneros</span>
          </h1>
          <h2 className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-semibold text-justify">
         Nos dedicamos a promover la cultura, acompañar a las comunidades y generar alianzas con proyectos estratégicos</h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600">
            {/* Únete a nuestra misión: fomentar la cultura, apoyar a quienes más lo necesitan */}
            {/* y construir un futuro basado en valores y colaboración. */}
            Misión: articular recursos, conocimientos y capacidades para el desarrollo de programas sociales que respondan a las necesidades reales de las comunidades y su entorno.
          </p>

          {/* Lista de impacto */}
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-center">
              ✅ <span className="ml-2 text-xs sm:text-sm">Redes de trabajo: Cooperaciones con diversos sectores.</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2 text-xs sm:text-sm">Innovación Social: Soluciones creativas y adaptadas a las diversas realidades.</span>
            </li>
            
            <li className="flex items-center">
              ✅ <span className="ml-2 text-xs sm:text-sm">Transparencia: Gestion de recursos y procesos de forma ética y abierta.
              </span>
              
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2 text-xs sm:text-sm">Facilitamos procesos: Vinculos estratégicos para fortalecer el desarrollo individual y colectivo.</span>
            </li>           


          </ul>
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
            className="w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] drop-shadow-lg rounded-2xl max-w-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

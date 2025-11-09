import { motion } from "framer-motion";
import HeroImage from "../../assets/Cataratas-del-lado-argentino.jpg";
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50/20 to-purple-50/20 bg-slate-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight text-center">
            Bienvenidos a <span className="text-blue-700">Fundación Sueños Misioneros</span>
          </h1>
          <h2 className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-semibold text-center">
         Nos dedicamos a promover la cultura, acompañar a las comunidades y generar alianzas con proyectos estratégicos</h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600">
            Misión: articular recursos, conocimientos y capacidades para el desarrollo de programas sociales que respondan a las necesidades reales de las comunidades y su entorno.
          </p>

          {/* Lista de impacto */}
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-center">
              ✅ <span className="ml-2 text-sm sm:text-base">Redes de trabajo: Cooperaciones con diversos sectores.</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2 text-sm sm:text-base">Innovación Social: Soluciones creativas y adaptadas a las diversas realidades.</span>
            </li>
            
            <li className="flex items-center">
              ✅ <span className="ml-2 text-sm sm:text-base">Transparencia: Gestion de recursos y procesos de forma ética y abierta.
              </span>
              
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2 text-sm sm:text-base">Facilitamos procesos: Vinculos estratégicos para fortalecer el desarrollo individual y colectivo.</span>
            </li>           
          </ul>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }} // Un pequeño delay para que aparezca después del texto
  className="mt-8 text-center md:text-left" // 'mt-8' para darle espacio
>
  <a
    href="https://forms.cloud.microsoft/r/yNKdJjMBYG"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 text-base font-semibold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
  >
    ¡Quiero ser voluntario!
  </a>
</motion.div>
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
            alt="Cataratas del Iguazú, Misiones"
            className="w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] drop-shadow-lg rounded-2xl max-w-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

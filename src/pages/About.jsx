import { motion } from "framer-motion";
import Team1 from "../assets/personas.webp"; // Agrega imágenes reales de tu equipo
import Team2 from "../assets/personas.webp";
import Team3 from "../assets/personas.webp";

const teamMembers = [
  {
    id: 1,
    name: "María Fernández",
    role: "Directora General",
    image: Team1,
    description:
      "Lidera con pasión nuestra misión de ayudar a quienes más lo necesitan. Experta en desarrollo social y gestión de proyectos humanitarios.",
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    role: "Coordinador de Voluntarios",
    image: Team2,
    description:
      "Encargado de conectar corazones dispuestos a ayudar. Su energía y compromiso inspiran a nuestro equipo de voluntarios.",
  },
  {
    id: 3,
    name: "Ana López",
    role: "Responsable de Cultura y Educación",
    image: Team3,
    description:
      "Promueve la cultura y la educación en comunidades vulnerables. Cree firmemente en el poder del arte para transformar vidas.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-20 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Sección de presentación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Sobre <span className="text-blue-700">Nosotros</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            En <strong>Fundación Sueños Misioneros</strong>, nos comprometemos con la transformación social mediante la implementación de iniciativas estratégicas en desarrollo comunitario. Nuestra organización, establecida en 2015, ha consolidado un modelo de intervención integral que aborda las necesidades fundamentales de las comunidades vulnerables.
          </p>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-8 sm:mt-12 md:mt-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full md:max-w-[50%] mx-auto"
>
  <div className="text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
      <span className="typewriter">
        Nuestra Historia
      </span>
    </h2>
    <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-700">
      Nuestra <strong>estructura organizacional</strong> se compone de más de <strong>100 profesionales</strong> dedicados, quienes trabajan en estrecha colaboración para materializar nuestro objetivo institucional: la construcción de una sociedad más equitativa y justa.
    </p>
  </div>
</motion.div>

        {/* Sección del equipo */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Nuestro Equipo
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: member.id * 0.2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-xl sm:text-xl md:text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium text-sm sm:text-base">{member.role}</p>
                <p className="mt-2 text-gray-600 text-xs sm:text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

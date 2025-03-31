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
    <section className="bg-gray-100 min-h-screen py-24">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Sección de presentación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Sobre <span className="text-blue-700">Nosotros</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            En <strong>Sueños Misioneros</strong>, creemos en el poder del trabajo en equipo es necesario para 
            cambiar vidas. Desde nuestra fundación, hemos impactado a cientos de familias a 
            través de la cultura, la educación y la ayuda humanitaria.
          </p>
        </motion.div>

        {/* Historia de la fundación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Nuestra Historia
          </h2>
          <p className="mt-4 text-gray-700">
            Fundación <strong>Sueños Misioneros</strong> nació en el 2015 con un solo propósito: 
            hacer del mundo un lugar más solidario. Comenzamos con un pequeño grupo de voluntarios 
            en una comunidad necesitada, llevando apoyo educativo y cultural. Hoy, con más de 
            100 colaboradores, seguimos creciendo y llevando esperanza a donde más se necesita.
          </p>
        </motion.div>

        {/* Sección del equipo */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Nuestro Equipo
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: member.id * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

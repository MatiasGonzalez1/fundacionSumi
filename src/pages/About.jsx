import { motion } from "framer-motion";
import Team1 from "../assets/personas.webp"; // Agrega imágenes reales de tu equipo
import Team2 from "../assets/Gaston.png";
import Team3 from "../assets/Rodrigo.png";
import Team4 from "../assets/personas.webp";


const teamMembers = [
  {
    id: 1,
    name: "Prof. Cardozo Mario Oscar",
    role: "Presidente / Fundador",
    image: Team1,
    description:
      "Lidera con la pasión de dos décadas de trayectoria. Cree firmemente en el poder de la cultura como método de enseñanza para transformar realidades.",
  },
  {
    id: 2,
    name: "Gastón",
    role: "Vicepresidente / Coord. de Voluntarios",
    image: Team2,
    description:
      "Encargado de conectar corazones dispuestos a ayudar. Su energía y compromiso inspiran a nuestro equipo de voluntarios.",
  },
  {
    id: 3,
    name: "Rodrigo",
    role: "Tesorero / Resp. de actividades deportivas",
    image: Team3,
    description:
      "Promueve el deporte y la educación en comunidades vulnerables. Cree firmemente en el poder del arte y el deporte para transformar vidas.",
  },
  {
    id: 4,
    name: "Francisco",
    role: "Secretario",
    image: Team4,
    description:
      "El pilar de nuestra organización. Se encarga de la gestión administrativa y la comunicación, asegurando que nuestra misión avance de forma transparente.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-20 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* --- SECCIÓN DE PRESENTACIÓN MEJORADA --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Sobre <span className="text-blue-700">Nosotros</span>
          </h1>
          
          {/* Párrafo de Intro (del texto) */}
          <p className="mt-4 text-base md:text-lg text-gray-600">
            En <strong>Fundación Sueños Misioneros</strong> trabajamos por la transformación social a través de proyectos que promuevan el desarrollo integral de las comunidades más vulnerables de Misiones y la región.
          </p>
        </motion.div>

        {/* --- NUEVA SECCIÓN: MISIÓN Y VISIÓN --- */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Misión */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700 text-center">🤝 Nuestra Misión</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
              Contribuir al bienestar social y al fortalecimiento comunitario mediante programas que integren valores solidarios, educativos y culturales, fomentando la inclusión y la equidad.
            </p>
          </div>
          
          {/* Visión */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700 text-center">🌱 Nuestra Visión</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
              Ser una institución referente en Misiones y el país en materia de desarrollo comunitario, reconocida por su compromiso, transparencia y capacidad de gestión.
            </p>
          </div>
        </motion.div>

        {/* --- SECCIÓN DE HISTORIA MEJORADA (sin tarjeta flotante) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            📜 Nuestra Historia
          </h2>
         <div className="mt-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg text-gray-700 text-base space-y-4">
  <p>
    Nuestra fundación nace en el año 2015 con la <strong>firme convicción de ser un motor de cambio</strong> en distintos lugares de la provincia. Desde el inicio, nuestro trabajo se ha centrado en dos pilares fundamentales:
  </p>
  
  {/* Convertimos la lista en Párrafos Estructurados */}
  <div>
    <h4 className="font-semibold text-gray-800">1. Asistencia y Bienestar Comunitario:</h4>
    <p className="mt-1 pl-2">
      Brindamos respuestas directas a las necesidades básicas, asegurando el acceso a meriendas nutritivas, apoyo escolar, donaciones de alimentos y ropa para las familias.
    </p>
  </div>
  
  <div>
    <h4 className="font-semibold text-gray-800 mt-2">2. Integración Social a través de la Cultura y el Deporte:</h4>
    <p className="mt-1 pl-2">
      Creemos en el poder transformador de la comunidad. Fomentamos la inclusión a través de talleres de danzas folklóricas (utilizadas como terapia social), el acompañamiento activo a clubes de abuelos y el patrocinio a equipos deportivos locales.
    </p>
  </div>

  <p className="pt-2 border-t border-gray-200">
    Hoy, luego de una década continuamos este legado con una <strong>estructura consolidada y una gestión transparente</strong>. Cada acción reafirma nuestro compromiso de construir una sociedad más equitativa y fortalecer el tejido social de Misiones.
  </p>
</div>
        </motion.div>

        {/* --- SECCIÓN DEL EQUIPO (Ahora son 4) --- */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Nuestro Equipo
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: member.id * 0.2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center flex flex-col"
              >
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-24 sm:w-32 h-24 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium text-sm sm:text-base">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm flex-grow">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;

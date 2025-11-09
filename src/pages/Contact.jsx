import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmail = () => {
    const { name, email, message } = formData;
    window.location.href = `mailto:folkloremario@gmail.com?subject=Contacto de ${name}&body=${message}%0A%0AResponder a: ${email}`;
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5493764606013";
    const message = encodeURIComponent(
      `Hola, soy ${formData.name}. ${formData.message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-gray-100 py-20">
      {/* Título Principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center"
      >
        Contáctanos
      </motion.h2>

      {/* Contenedor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 sm:p-8"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tuemail@example.com"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensaje</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEmail}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Enviar por Email
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[400px] h-64 sm:h-96"
        >
          <iframe
            title="Mapa de Posadas, Misiones"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.2732706170297!2d-55.8989467236098!3d-27.36712564180365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be98b174aebd%3A0x8f4c3a7e7f4d4f02!2sPosadas%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1711743689043!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
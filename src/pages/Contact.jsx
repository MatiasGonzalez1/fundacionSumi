import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react"; // 1. Importaciones de Formspree

const Contact = () => {
  // 2. Hook de Formspree: Reemplaza a useState
  //    (Reemplaza "TU_ID_DE_FORMSPREE" con tu ID)
  const [state, handleSubmit] = useForm("mqawkzzk");

  // 3. Función de WhatsApp (Modificada)
  //    Como ya no usamos "useState" para los campos,
  //    esta función ya no puede leerlos.
  //    Simplemente abre un mensaje genérico.
  const handleWhatsApp = () => {
    const phoneNumber = "5493764606013";
    const message = encodeURIComponent(
      "Hola, me gustaría contactar con la Fundación Sueños Misioneros."
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
        
        {/* 4. El 'div' ahora es un 'form' */}
        <motion.form
          onSubmit={handleSubmit} // 5. Se usa el handleSubmit de Formspree
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 sm:p-8"
        >
          {/* 6. Mensaje de Éxito */}
          {state.succeeded ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-gray-800">¡Mensaje Enviado!</h3>
              <p className="mt-2 text-gray-600">
                Gracias por contactarnos. Te responderemos a la brevedad.
              </p>
            </div>
          ) : (
            // Si no se envió, muestra el formulario
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // 7. Ya no se necesita 'value' ni 'onChange'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tuemail@example.com"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* 8. Componente de Error de Formspree */}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-600"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* 9. Botón de Email ahora es 'type="submit"' */}
                <button
                  type="submit"
                  disabled={state.submitting} // Deshabilitado mientras envía
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-400"
                >
                  {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
                {/* 10. Botón de WhatsApp se mantiene igual */}
                <button
                  type="button" // Importante: que no sea 'submit'
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </>
          )}
        </motion.form>

        {/* Mapa (Sin cambios) */}
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
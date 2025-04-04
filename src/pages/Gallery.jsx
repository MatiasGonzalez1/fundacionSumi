import { useState } from "react";
import { motion } from "framer-motion";

// Importa tus imágenes (asegúrate de tenerlas en la carpeta adecuada)
import img1 from "../assets/personas.webp";
import img2 from "../assets/personas.webp";
import img3 from "../assets/personas.webp";
import img4 from "../assets/personas.webp";
import img5 from "../assets/personas.webp";
import img6 from "../assets/personas.webp";
import img7 from "../assets/personas.webp";
import img8 from "../assets/personas.webp";

// Lista de imágenes con descripciones
const images = [
  { src: img1, alt: "Evento cultural en la comunidad", text: "Actividad artística promoviendo la cultura local." },
  { src: img2, alt: "Entrega de donaciones", text: "Distribución de alimentos y ropa a familias necesitadas." },
  { src: img3, alt: "Taller educativo", text: "Capacitación en oficios para jóvenes de la comunidad." },
  { src: img4, alt: "Jornada solidaria", text: "Voluntarios trabajando en la mejora de espacios comunitarios." },
  { src: img5, alt: "Taller educativo", text: "Capacitación en oficios para jóvenes de la comunidad." },
  { src: img6, alt: "Jornada solidaria", text: "Voluntarios trabajando en la mejora de espacios comunitarios." },
  { src: img7, alt: "Taller educativo", text: "Capacitación en oficios para jóvenes de la comunidad." },
  { src: img8, alt: "Jornada solidaria", text: "Voluntarios trabajando en la mejora de espacios comunitarios." },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nuestra Galería</h2>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-lg font-semibold">{image.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-xl shadow-lg max-w-lg mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full rounded-md" />
            <p className="mt-4 text-gray-700 text-center">{selectedImage.text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

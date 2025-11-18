import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {galleryImages} from "../data/galleryData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-slate-100 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Nuestra Galería</h2>
          <p className="text-gray-600 mt-2">Un recorrido visual por nuestras acciones y momentos compartidos.</p>
        </motion.div>

        {/* --- GRID DE IMÁGENES --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`} // Framer Motion para transiciones suaves
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }} // Efecto cascada sutil
              onClick={() => setSelectedImage(image)}
            >
              {/* Contenedor de Aspect Ratio para uniformidad */}
              <div className="aspect-w-4 aspect-h-3 w-full h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy" // Carga diferida para rendimiento
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Overlay con Texto (aparece al pasar el mouse) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium">{image.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Evita cerrar si clic en la foto
              className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Imagen Grande */}
              <div className="flex-grow bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[70vh] object-contain" 
                />
              </div>

              {/* Pie de foto */}
              <div className="p-4 bg-white text-center border-t">
                <p className="text-gray-800 font-medium text-lg">{selectedImage.text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
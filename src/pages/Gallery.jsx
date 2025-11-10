import { useState } from "react";
import { motion } from "framer-motion";

// Importa tus imágenes (asegúrate de tenerlas en la carpeta adecuada)
import img1 from "../assets/Galeria/img1.jpg";
// import img2 from "../assets/Galeria/img2.jpg";
import img3 from "../assets/Galeria/img3.jpg";
import img4 from "../assets/Galeria/img4.jpg";
import img5 from "../assets/Galeria/img5.jpg";
import img6 from "../assets/Galeria/img6.png";
import img7 from "../assets/Galeria/img7.jpeg";
import img8 from "../assets/Galeria/img8.jpeg";
import img9 from "../assets/Galeria/img9.jpg";
import img10 from "../assets/Galeria/10.jpeg";
import img11 from "../assets/Galeria/11.jpeg";
import img12 from "../assets/Galeria/12.jpeg";
import img13 from "../assets/Galeria/13.jpeg";
import img14 from "../assets/Galeria/14.jpeg";
import img15 from "../assets/Galeria/15.jpeg";

import img17 from "../assets/Galeria/17.jpeg";
import img18 from "../assets/Galeria/18.jpeg";
import img19 from "../assets/Galeria/19.jpeg";
import img20 from "../assets/Galeria/20.jpeg";
import img21 from "../assets/Galeria/21.jpeg";
import img22 from "../assets/Galeria/22.jpeg";
import img23 from "../assets/Galeria/2.jpg";
import img24 from "../assets/Galeria/23.jpg";
import img25 from "../assets/Galeria/24.jpg";
import img26 from "../assets/Galeria/25.png";
import img27 from "../assets/Galeria/26.jpg";
import img28 from "../assets/Galeria/27.jpg";
import img29 from "../assets/Galeria/28.jpg";
import img30 from "../assets/Galeria/30.jpeg";
import img31 from "../assets/Galeria/31.jpeg";
import img32 from "../assets/Galeria/32.jpeg";
import img33 from "../assets/Galeria/33.jpeg";
import img34 from "../assets/Galeria/34.jpeg";
import img35 from "../assets/Galeria/35.jpeg";
import img36 from "../assets/Galeria/36.jpeg";
import img37 from "../assets/Galeria/37.jpeg";
import img38 from "../assets/Galeria/38.jpeg";





// Lista de imágenes con descripciones
const images = [
  { src: img1, alt: "Evento cultural en la comunidad", text: "Actividad artística promoviendo la cultura local." },
  { src: img9, alt: "Día del niño", text: "Regalos día del Niño Barrio Yohasa." },
  { src: img3, alt: "Festival de la hermandad", text: "Festival de la Hermandad." },
  { src: img4, alt: "Jornada solidaria", text: "Jornada Solidaria 'Festival de la Hermandad'." },
  { src: img5, alt: "Taller educativo", text: "Capacitación en oficios para jóvenes de la comunidad." },
  { src: img6, alt: "Foto Torino FC", text: "Sponsor oficial del Club deportivo TORINO FC." },
  { src: img7, alt: "Taller educativo", text: "Taller de Danzas Folklóricas de la localidad de Candelaria." },
  { src: img8, alt: "Desfile", text: "Desfile 'Día de la Bandera'." },
    { src: img10, alt: "Pose", text: "Taller de Folklore Juvenil." },
    { src: img11, alt: "Pose", text: "Ensayos en la plazoleta." },
    { src: img12, alt: "Desfile", text: "Desfile 'Día de la Bandera'." },
    { src: img13, alt: "Desfile", text: "Desfile 'Día de la Bandera'." },
    { src: img14, alt: "Pose", text: "Desfile 'Día de la Bandera'" },
    { src: img15, alt: "Desfile", text: "Desfile 'Día de la Bandera'." },
    { src: img17, alt: "Pose", text: "Spot publicitario." },
    { src: img18, alt: "Desfile", text: "Ensayo previo 'Encuentro de danzas'." },
    { src: img19, alt: "Pose", text: "Taller de Folklore Infantil." },
    { src: img20, alt: "Escenario", text: "Encuentro interprovincial de danzas folklóricas" },
    { src: img21, alt: "Escenario", text: "Acompañamiento 'Urban Day'" },
      { src: img22, alt: "Colectivo", text: "Nuestro transporte" },
  { src: img23, alt: "Remembranzas", text: "Festival de la Hermandad." },
    { src: img24, alt: "Desfile", text: "Festival de la Hermandad." },
    { src: img25, alt: "Pose", text: "Festival de la Hermandad." },
    { src: img26, alt: "Remembranzas", text: "Festival de la Hermandad." },
    { src: img27, alt: "Escenario", text: "Presentación" },
      { src: img28, alt: "Escenario", text: "Festival de la Hermandad." },
    { src: img29, alt: "Escenario", text: "Festival de la Hermandad." },
{ src: img30, alt: "Escenario", text: "Esda." },
{ src: img31, alt: "Cumpleaños", text: "Cumpleaños de alumna 'Escuela superior'" },
{ src: img32, alt: "Futsal", text: "Acompañando al deporte misionero" },
{ src: img33, alt: "Futsal", text: "Deportistas de 'TORINO Futsal auspiciados por la fundación" },
{ src: img34, alt: "Merienda", text: "Acompañando la merienda" },
{ src: img35, alt: "Foto de grupo", text: "Expo universitaria Posadas" },
{ src: img36, alt: "Viaje de intercambio", text: "Intercambio cultural aldea ka'ague poty Aristóbulo del Valle" },
{ src: img37, alt: "Foto de grupo", text: "Venta de pollos para la compra de camisetas deportivas para el equipo de Futsal" },
{ src: img38, alt: "Foto de grupo", text: "Recibiendo la copa de la liga TORINO FUTSAL" },




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

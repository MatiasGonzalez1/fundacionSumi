import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/Gallery";
import NotFoundPage from "./pages/NotFound";


function App() {
  const bgImagen = {
    backGroundImage: `url($())`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "botom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>}/> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

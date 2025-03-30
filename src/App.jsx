import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";

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

      </Routes>
    </div>
  );
}

export default App;

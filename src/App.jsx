import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {

  const bgImagen = {
    backGroundImage: `url($())` ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "botom",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
    <Navbar/>
    <Hero/> 
    </div>
  )
}

export default App

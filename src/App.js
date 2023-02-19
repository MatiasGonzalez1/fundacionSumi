import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home.js';
import Nosotros from './pages/Nosotros';
import Historia from './pages/Historia';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
<div className="app">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/historia" element={<Historia/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
 </div>
    </BrowserRouter>
  );
}

export default App;

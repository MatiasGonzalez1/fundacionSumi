import Logo from "../../assets/image.png";
import { useState } from "react";

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    Link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    Link: "/about",
  },
  {
    id: 3,
    title: "Contacto",
    Link: "/contact",
  }
];

const navbarRedes = [
  {
    id: 1,
    title: "Instagram",
    Link: "https://www.instagram.com/",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    title: "Facebook",
    Link: "https://www.facebook.com/",
    icon: "bi bi-facebook",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 bg-slate-100 backdrop-blur-md w-full z-50 bg-opacity-30">
      <div className="flex justify-between items-center sm:px-12 sm:py-2 px-4 py-3 shadow-lg">
        {/* Logo */}
        <div className="">
          <a href="/">
<img src={Logo} alt="Logo" className="w-[100px]" />
          </a>
          
        </div>

        {/* burguer */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#1F2937"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Desktop*/}
        <div className="hidden md:block">
          <ul className="flex sm:spacex-8 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.Link}
                  className="text-gray-800 sm:text-lg text-sm hover:text-blue-700 transition-transform hover:scale-110 transform inline-block duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales */}

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((red) => (
              <li key={red.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={red.Link}
                >
                  <i
                    className={`${red.icon} sm:text-2xl text-lg text-gray-800 hover:text-blue-700 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Menu movil */}
      <div className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col pl-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.Link}
                className="text-white transition-transform hover:scale-110 transform inline-block duration-300"
                onClick={()=> setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-red-400 justify-center">
            {navbarRedes.map((red) => (
              <li key={red.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  href={red.Link}
                  onClick={()=> setIsOpen(false)}
                >
                  <i
                    className={`${red.icon} tx-lg text-white hover:scale-110 transform inline-block duration-300 `}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
      </div>

      
    </nav>
  );
};
export default Navbar;

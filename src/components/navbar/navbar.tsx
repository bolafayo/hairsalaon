import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 text-primary z-50 bg-transparent gap-18">
     
      <div className="text-primary font-bebasNeue text-4xl">Hairs</div>

     
      <ul className="font-bebasNeue hidden md:flex space-x-30 text-lg tracking-wide text-primary">
        <li>
          <Link to="/about" className="font-bebasNeue hover:opacity-80">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/services" className="font-bebasNeue hover:opacity-80">
            SERVICES
          </Link>
        </li>
        <li>
          <a href="#contact" className="font-bebasNeue hover:opacity-80">
            CONTACT
          </a>
        </li>
        <li>
          <Link
            to="/connect"
            className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition font-bebasNeue"
          >
            GET IN TOUCH
          </Link>
        </li>
      </ul>

    
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center space-y-6 py-6 font-bebasNeue md:hidden">
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
          <Link
            to="/connect"
            onClick={() => setIsOpen(false)}
            className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            GET IN TOUCH
          </Link>
        </div>
      )}
    </nav>
  );
}

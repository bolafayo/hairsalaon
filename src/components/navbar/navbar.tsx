import { Link} from 'react-router-dom';

export default function Navbar() {
    
  return (
    
    <nav className='absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 text-primary z-15 '>
      
      <div className=" text-primary font-bebasNeue text-5xl mx-5 ">Hairs</div>
        
      <ul className='className="font-bebasNeue hidden md:flex space-x-8   text-1xl tracking-wide text-primary gap-18 '>
        <li ><Link to="/about" className="hover:opacity-80">ABOUT</Link></li>
        <li><Link to="/services" className="hover:opacity-80">SERVICES</Link></li>
        <li><a href="#contact" className="hover:opacity-80">CONTACT</a></li>
        <li>
        <Link
            to="/connect"
            className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            GET IN TOUCH
          </Link>
        </li>
      </ul>
    
   
    </nav>
  );
}

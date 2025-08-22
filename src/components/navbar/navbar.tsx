import { Link} from 'react-router-dom';

export default function Navbar() {
    
  return (
    
    <nav className='absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 text-white z-10 '>
      <div className=" text-white font-bebasNeue text-4xl ">Hairs</div>
        
      <ul className='className="font-bebasNeue hidden md:flex space-x-8   text-1xl tracking-wide text-white gap-18 '>
        <li ><Link to="/homepage" className="hover:opacity-80">HOME</Link></li>
        <li><Link to="/services" className="hover:opacity-80">SERVICES</Link></li>
        <li><Link to="/contact" className="hover:opacity-80">CONTACT</Link></li>
        {/* <li><Link to="/registration">Registration</Link></li> */}
      </ul>
    
   
    </nav>
  );
}

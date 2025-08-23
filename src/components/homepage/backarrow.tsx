import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

export default function BackArrow() {
  const location = useLocation();

  
  if (location.pathname === "/") return null;

  return (
    <div className="absolute top-4 left-4 z-50">
      <Link
        to="/"
        className="flex items-center gap-2 text-secondary hover:text-tertiary transition"
      >
        <ArrowLeft size={40} />
        
      </Link>
    </div>
  );
}

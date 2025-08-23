import Gallery from "./gallery"
import Navbar from "../navbar/navbar"
import Stylist from "./stylist"
import ReviewSection from "./review"
import Contact from "./contact"

export default function Homepage() {
  return (
    <>
     <div className="relative -screen bg-secondary ">
     <Navbar />
      </div>
      <div className=" bg-secondary flex w-full justify-center h-230 p-8  ">
  
      <img src="https://i.pinimg.com/1200x/4e/91/2e/4e912ee6f747464dad25a7c212c59fd5.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/fb/9f/3b/fb9f3b38675904afa304c7720021848f.jpg" alt="" />
   </div> 
   
    <Gallery />
     <Stylist />
     <ReviewSection />
     <Contact />
   </>
    
  )
}

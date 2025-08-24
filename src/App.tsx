import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";

import About from './components/homepage/about';
import Services from './components/homepage/services';
import Connect from './components/homepage/connect';


function App() {
 

  return (
    <>
  
    <BrowserRouter>
    
    <Routes>
   
      <Route path='/' element={<Homepage />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Connect" element={<Connect />} />
    </Routes>
    </BrowserRouter>
  

   
    </>
  )
}

export default App

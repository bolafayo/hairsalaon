import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import { ThemeProvider } from "./theme/themeprovider"
import About from './components/homepage/about';
import Services from './components/homepage/services';
import Connect from './components/homepage/connect';


function App() {
 

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    
    <Routes>
   
      <Route path='/' element={<Homepage />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Connect" element={<Connect />} />
    </Routes>
    </BrowserRouter>
    
    </ThemeProvider>

   
    </>
  )
}

export default App

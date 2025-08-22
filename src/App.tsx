import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import { ThemeProvider } from "./theme/themeprovider"



function App() {
 

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      
    </Routes>
    </BrowserRouter>
    
    </ThemeProvider>

   
    </>
  )
}

export default App

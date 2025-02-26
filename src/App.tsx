
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";



function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar />
        <div>
          <div className="min-h-[75vh]">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
          </Routes>
          </div>
        </div>
        <Footer />
       </BrowserRouter>
    </>
  );
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarColaboradores from "./components/colaboradores/listacolaboradores/ListaColaboradores";
import FormColaborador from "./components/colaboradores/formcolaborador/FormColaborador";
import DeletarColaborador from "./components/colaboradores/deletarcolaborador/DeletarColaborador";



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/colaboradores" element={<ListarColaboradores />} />
              <Route path="/cadastrarcolaborador" element={<FormColaborador />} />
              <Route path="/editarcolaborador/:id" element={<FormColaborador />} />
              <Route path="/deletarcolaborador/:id" element={<DeletarColaborador />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
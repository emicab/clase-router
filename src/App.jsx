import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Conocenos from "./components/Conocenos";
import Producto from "./components/Producto";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">COMPONENTE APP</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>
      <p className="mt-4">Fin de rutas</p>
    </>
  );
}

export default App;

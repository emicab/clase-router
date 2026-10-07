import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <p className="mt-4">Fin de rutas</p>
    </>
  );
}

export default App;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/conocenos">Conocenos</Link>
      <button onClick={() => navigate("/conocenos")}>Conocenos boton</button>
    </nav>
  );
};

export default Header;

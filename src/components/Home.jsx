import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Producto from "./Producto";

const Home = () => {
  const [data, setData] = useState([]);

  const obtenerProductos = async () => {
    const response = await fetch(
      `http://ecommerce.fedegonzalez.com/products/`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer plantco",
        },
      },
    );
    const data = await response.json();
    setData(data);
    // console.log(data);
    return;
  };

  useEffect(() => {
    obtenerProductos();
  }, []);
  return (
    <div>
      <h1>Pagina principal</h1>
      {data?.map((p) => (
        <div key={p.id}>
          <Link to={`/producto/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

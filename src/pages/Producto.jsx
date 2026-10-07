import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Producto = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // const { titulo, fotoURL, precio } = useParams();
  // const [query] = useSearchParams();

  /* const prefiere = query.getAll("prefiere");
  const presente = query.get("presente");
  const alumno = query.get("alumno"); */

  const obtenerProductoId = async () => {
    const response = await fetch(
      `http://ecommerce.fedegonzalez.com/products/${id}`,
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
    obtenerProductoId();
  }, [id]);

  return (
    <div>
      <p className="text-2xl text-slate-600">{data.title}</p>
      <img
        src={`https://ecommerce.fedegonzalez.com/${data.pictures?.[0]}`}
        alt={data.title}
        width={300}
      />
      <p>{data.price}</p>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default Producto;

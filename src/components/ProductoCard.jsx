import React from "react";

const ProductoCard = ({ titulo, resumen, precio }) => {
  return (
    <div className="border-1 my-2 ">
      <h3>{titulo}</h3>
      <p>{resumen}</p>
      <p>${precio}</p>
    </div>
  );
};

export default ProductoCard;

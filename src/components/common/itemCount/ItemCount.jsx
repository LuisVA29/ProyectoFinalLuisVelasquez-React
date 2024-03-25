import React from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

export const ItemCount = ({ add, sus, counter, onAdd }) => {
  const handleAddToCartClick = () => {
    if (counter === 0) {
      // Mostrar una alerta de error con SweetAlert2
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "No puedes agregar 0 productos al carrito.",
        confirmButtonText: "Entendido",
      });
    } else {
      // Mostrar la alerta de éxito con la cantidad seleccionada
      Swal.fire({
        title: "Producto agregado al carrito",
        icon: "success",
        text: `Cantidad: ${counter}`,
        confirmButtonText: "Aceptar",
      });

      // Llamar a la función onAdd con el contador actual
      onAdd(counter);
    }
  };

  return (
    <div className="item-count">
      <div className="count-container">
        <button onClick={add}>+</button>
        <h3>{counter}</h3>
        <button onClick={sus}>-</button>
      </div>

      <button className="add-cart-button" onClick={handleAddToCartClick}>
        Agregar al carrito
      </button>
    </div>
  );
};

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

export const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const { clearItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { totalPrice } = useContext(CartContext);

  let total = totalPrice();

  const handleFinalizeOrder = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay ningún artículo en tu carrito!",
      });
    } else {
      // Redirigir al usuario a la página de checkout
      window.location.href = "/checkout";
    }
  };

  return (
    <div className="cart-container">
      {cart.map((item) => {
        return (
          <div className="item-cart-container" key={item.id}>
            <div className="img-container-card">
              <img src={item.img} />
              <div>
                <p>
                  <span>Product:</span> {item.title}
                </p>
                <p>
                  <span>Price:</span> ${item.price} USD
                </p>
                <p>
                  <span>Quantity:</span> {item.quantity} item
                </p>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="boton-eliminar-producto"
            >
              Eliminar del carrito
            </button>
            <Link to={`/productDetail/${item.id}`}>
              <button className="boton-detalles">Detalles</button>
            </Link>
          </div>
        );
      })}
      <div className="total-container">
        <button
          onClick={() => clearItems()}
          className="boton-eliminar-producto"
        >
          Eliminar todos los productos
        </button>
        <p className="cuenta-total">
          <span>Total:</span> ${total} USD
        </p>
        <button
          onClick={handleFinalizeOrder}
          className="boton-finalizar-compra"
        >
          Finalizar orden
        </button>
      </div>
    </div>
  );
};

import { IoMdCart } from "react-icons/io";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  let total = totalItems();

  return (
    <div className="cart-widget-container">
      {<IoMdCart />}
      <p>{total}</p>
    </div>
  );
};

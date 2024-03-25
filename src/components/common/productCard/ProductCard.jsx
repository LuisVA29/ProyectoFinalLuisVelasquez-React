import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({
  img,
  title,
  description,
  price,
  stock,
  category,
  id,
}) => {
  return (
    <div className="productCardContainer">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>Descripción: {description}</h4>
      <p>Precio: ${price} USD</p>
      <Link to={`/productDetail/${id}`}>
        <button className="boton-detalles">Detalles</button>
      </Link>
    </div>
  );
};

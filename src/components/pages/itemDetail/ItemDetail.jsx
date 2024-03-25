import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  img,
  title,
  description,
  price,
  stock,
  category,
  onAdd,
  initialValue,
}) => {
  return (
    <div className="item-detail-container" key={id}>
      <div className="img-info-container">
        <img src={img} alt="" />
        <div className="info-detail">
          <h2>{title}</h2>
          <p>Descripción: {description}</p>
          <h4>Precio: ${price}</h4>
        </div>
      </div>

      <ItemCountContainer
        stock={stock}
        initialValue={initialValue}
        onAdd={onAdd}
      />
    </div>
  );
};

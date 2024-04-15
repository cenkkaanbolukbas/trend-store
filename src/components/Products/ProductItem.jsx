import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";
import Rating from "./Rating";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  const addingItem = useContext(CartContext);
  

  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart" onClick={()=>addingItem.addItem(product)}>
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;

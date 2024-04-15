import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = (props) => {
  const removingItem = useContext(CartContext);

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={props.product.img} alt={props.product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{props.product.name}</b>
          <div>
            <span>₺{props.product.price} </span>
            <span>x{props.product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault()
            removingItem.removeItem(props.product.id)
          }}
        >
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;

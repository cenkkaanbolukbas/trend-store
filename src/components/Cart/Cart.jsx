import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = (props) => {
  const displayCart = useContext(CartContext);
  

  const cartItems = (
    <ul className="cart-items">
      {displayCart.items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas hideCartHandler={props.hideCartHandler}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={props.hideCartHandler}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{displayCart.totalAmount}₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear" onClick={()=>displayCart.clearItem}>Temizle</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;

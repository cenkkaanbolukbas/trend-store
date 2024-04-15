import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ onShowCart }) => {
  const cartContext = useContext(CartContext);

  const totalItemsInCart = cartContext.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    },
    0
  );

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;

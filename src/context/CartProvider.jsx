import { createContext, useReducer } from "react";
export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //dispatch ile gelen action için action propsu koyulur. Statelere ulaşabilmek içinde state propsu koyulur.
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.product.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.product.amount,
        };
      } else {
        updatedItems = [...state.items, action.product];
      }

      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.product.price * action.product.amount,
      };
    }
    case "REMOVE": {
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };
    }
    case "CLEAR": {
      return {
        defaultCartState,
      };
    }
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  ); //cartState defaultCartState'yi ifade ediyor. Dispatch actionları ifade ediyor. cartReducer ifadeleri yazacağımız yer.

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (product) => {
      dispatchCartAction({ type: "ADD", product });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

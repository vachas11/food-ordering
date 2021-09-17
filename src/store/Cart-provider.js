import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartItem = { item: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const presentCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.item[presentCartItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };

      updatedItems = [...state.item];
      updatedItems[presentCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const presentCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[presentCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[presentCartItemIndex] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return cartItem;
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartItem);
  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

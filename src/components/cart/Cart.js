import React, { useContext, useState } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  //   const hasItems = cartCtx.item.length > 0;
  const hasItems = true;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        {
          <button disabled={!hasItems} className="button">
            Order
          </button>
        }
      </div>
    </Modal>
  );
};

export default Cart;

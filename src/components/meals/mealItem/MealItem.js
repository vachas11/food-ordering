import React, { useContext } from "react";
import cartContext from "../../../store/cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartCtx = useContext(cartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div>
      <li className="meal">
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{`₹ ${props.price}`}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </div>
  );
};

export default MealItem;

import React, { useContext, useState, useEffect } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = (props) => {
  const [isBtnHighLighted, setIsBtnHighLighted] = useState(false);
  const cartCtx = useContext(cartContext);
  useEffect(() => {
    if (cartCtx.item.length === 0) {
      return;
    }
    setIsBtnHighLighted(true);
    const timer = setTimeout(() => {
      setIsBtnHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.item]);
  const numberOfItems = cartCtx.item.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  const btnclass = isBtnHighLighted ? "button bump" : "button";
  return (
    <div>
      <button className={btnclass} onClick={props.onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;

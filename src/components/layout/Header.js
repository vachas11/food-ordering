import React from "react";
import "./Header.css";
import mealsImageee from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const clickHandler = () => {};
  return (
    <>
      <header className="header">
        <h1>Millennium Foods</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          onClick={clickHandler}
          src={mealsImageee}
          className="main-image"
          alt="Table Full Of Beautiful Meals"
        />
      </div>
    </>
  );
};

export default Header;

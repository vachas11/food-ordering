import "./CartItem.css";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className="cart-item1">
      <div>
        <h2>{props.name}</h2>
        <div className="summary1">
          <span className="price1">{price}</span>
          <span className="amount1">
            <span className="txt">x</span>
            {props.amount}
          </span>
        </div>
      </div>
      <div className="actions1">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

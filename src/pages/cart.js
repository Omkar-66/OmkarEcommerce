import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

import { CartContext } from "../contexts/CartContext"; // Ensure the path is correct
import "./../Styles/Cart.css"; // Updated the path to your Cart.css

const Cart = () => {
  const { cart, clearCart, increaseAmount, decreaseAmount, removeFromCart, total, itemAmount } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty!</div>;
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Your Cart ({itemAmount})</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => decreaseAmount(item.id)} className="quantity-btn">-</button>
                <span>{item.amount}</span>
                <button onClick={() => increaseAmount(item.id)} className="quantity-btn">+</button>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3 className="cart-summary-label">Total: </h3>
        <span className="cart-summary-total">${total.toFixed(2)}</span>
        <Link to="/product/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

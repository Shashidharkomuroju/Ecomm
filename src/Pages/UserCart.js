import React from "react";
import "./Cart.css";
import { useCart } from "../Context/CartContext";
import Navbar from "../Components/Navbar/Navbar";

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  return (
    <>
      <Navbar />
      <div className="u-cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <div className="cart">
                    <div className="cart-items">
                      <div className="img">
                        <img src={item.catImg} alt="" />
                      </div>
                      <div className="product-name">
                        <h5>{item.productName}</h5>
                      </div>
                      <div className="brand">
                        <h6>Item Brand : {item.brand}</h6>
                      </div>
                      <div className="price">
                        <h4>Price : Rs:{item.price}/-</h4>
                      </div>
                      <button onClick={() => removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            <button>Check Out</button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;

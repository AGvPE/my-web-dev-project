import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import stylings from '../src/cart.module.css'

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar />
      <div className={stylings.cart_container}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className={stylings.empty_cart}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className={stylings.cart_item} key={index}>
              <h2>{item.title}</h2>
              <span className={stylings.price}>{item.price}</span>
              <p>{item.description}</p>
              <button className={stylings.remove_btn} onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

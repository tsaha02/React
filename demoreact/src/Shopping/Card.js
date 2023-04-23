import { useState } from "react";
import data from "../Introduction/data";

let CartItems = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

let Products = () => {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState([]);
  console.log(cart);
  let card = {
    display: "flex",
    flexWrap: "wrap",
  };

  let child = {
    minHeight: "500px",
    width: "250px",
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
  };

  let addToCart = (product) => {
    console.log(product);
    setCart((cart) => [...cart, product]);
    setCount((count) => count + 1);
  };

  let removeFromCart = (index) => {
    setCart((cart) => {
      let newCart = [...cart];
      newCart.splice(index, 1);
      return newCart;
    });
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h2>Products Component</h2>
      <h3>No. of products in cart: {count}</h3>
      <hr />
      <div style={card}>
        {data.map((product) => (
          <div key={product.id} style={child}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "80px", width: "80px" }}
            />
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <hr />
      <CartItems cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Products;

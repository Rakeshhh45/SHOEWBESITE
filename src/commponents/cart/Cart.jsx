import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    updateCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      updateCart(newCart);
    } else {
      removeProduct(index);
    }
  };

  const removeProduct = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('$', ''));
  };

  const calculateItemTotal = (price, quantity) => {
    return parsePrice(price) * quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + calculateItemTotal(item.price, item.quantity);
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="cart1">
          <h3>Your cart is empty</h3>
          <span>Just relax, let us help you find some first-class products</span>
          <br />
          <a href="/"><button>Start Shopping</button></a>
        </div>
      </div>
    );
  }

  const totalProductPrice = calculateTotalPrice();
  const discount = 0;
  const orderTotal = totalProductPrice - discount;

  return (
    <div className="carttt">
      <div className="cartt">
        {cart.map((item, index) => (
          <div className="cartt-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${calculateItemTotal(item.price, item.quantity).toFixed(2)}</p>
            <div className="quantity-controls">
              <button className='but' onClick={() => decrementQuantity(index)}>-</button>
              <span>{item.quantity}</span>
              <button className='but' onClick={() => incrementQuantity(index)}>+</button>
            </div>
            <button className='but' onClick={() => removeProduct(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="buy">
        <div className="buyyy">
          <h3>CART TOTALS</h3>
        </div>
        <div className="buy1">
          <h3>Price Details  ({cart.length} items)</h3>
          <h4>Total Product Price: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ${totalProductPrice.toFixed(2)}</h4>
          <h4>Total Discounts: &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ${discount.toFixed(2)}</h4>
        </div>
        <div className="buy2">
          <h4>Order Total:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ${orderTotal.toFixed(2)}</h4>
        </div>
        <div className="buy3">
          <a href="./Buy"><button className='buut'>Proceed to Buy</button></a>
        </div>
      </div>
    </div>
  );
}

export default Cart;

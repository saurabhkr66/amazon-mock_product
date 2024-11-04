// src/pages/Cart.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage or your preferred state management
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const updateCart = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center mt-4">Your cart is empty.</div>
      ) : (
        <div>
          <div className="mt-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <span className="text-lg font-bold">Total Amount: ${totalAmount.toFixed(2)}</span>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

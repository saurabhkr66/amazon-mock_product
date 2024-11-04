// src/pages/Checkout.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve cart items from localStorage
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Simple validation
    if (!shippingAddress.name || !shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.country) {
      setError('Please fill in all fields');
      return;
    }
    setError('');

    // Simulate payment process and clear cart
    localStorage.removeItem('cart');
    alert('Payment Successful! Thank you for your purchase.');
    navigate('/payment-success'); // Redirect to payment success page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {error && <div className="text-red-500">{error}</div>}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Cart Items</h2>
        {cartItems.length === 0 ? (
          <div className="text-center mt-4">Your cart is empty.</div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.title}</span>
                <span>${item.price} x {item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold">Total: ${totalAmount.toFixed(2)}</div>
      </div>
      <form onSubmit={handleCheckout} className="mt-4">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 mt-2 w-full"
          value={shippingAddress.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="border p-2 mt-2 w-full"
          value={shippingAddress.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border p-2 mt-2 w-full"
          value={shippingAddress.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          className="border p-2 mt-2 w-full"
          value={shippingAddress.postalCode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="border p-2 mt-2 w-full"
          value={shippingAddress.country}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;

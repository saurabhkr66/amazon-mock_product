// src/components/CartItem.jsx
import { useState } from 'react';

const CartItem = ({ item, updateCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    updateCart(item.id, newQuantity);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="h-20 w-20 object-cover rounded" />
        <div className="ml-4">
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={quantity}
          min="1"
          className="border border-gray-300 rounded w-16 text-center"
          onChange={handleQuantityChange}
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

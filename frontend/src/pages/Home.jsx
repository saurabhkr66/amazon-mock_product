// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from a mock API or local data
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Example API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
      cartItems.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4 rounded" />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-4 flex justify-between">
              <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

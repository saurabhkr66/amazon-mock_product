// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading state
  }

  if (!product) {
    return <div className="text-center">Product not found</div>; // Product not found state
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-cover rounded"
        />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-lg font-semibold">${product.price}</p>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <Link
              to="/cart" // Change this to your cart function when implemented
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <Link to="/products" className="mt-4 inline-block text-blue-500">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;

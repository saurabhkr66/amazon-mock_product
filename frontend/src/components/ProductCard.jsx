// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
    <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
    <p className="mt-1 text-gray-600">${product.price}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
  </div>
);

export default ProductCard;

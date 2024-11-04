// src/pages/PaymentSuccess.jsx
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p className="mt-4">Thank you for your purchase.</p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;

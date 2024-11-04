// src/pages/PaymentStatus.jsx
import { useLocation, Link } from 'react-router-dom';

const PaymentStatus = () => {
  const location = useLocation();
  const { status } = location.state || { status: 'success' }; // Default to success if no state is provided

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">
        {status === 'success' ? 'Payment Successful!' : 'Payment Failed'}
      </h1>
      <p className="mt-4">
        {status === 'success'
          ? 'Thank you for your purchase. Your order is being processed.'
          : 'There was an issue with your payment. Please try again.'}
      </p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentStatus;

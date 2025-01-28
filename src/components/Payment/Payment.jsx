import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Payment() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!amount || !cardNumber || !expiryDate || !cvv) {
      toast.error('Please fill in all the fields.');
      return;
    }

    setIsProcessing(true);

    // Simulating payment processing
    setTimeout(() => {
      setIsProcessing(false);
      const paymentSuccess = Math.random() > 0.5;
      if (paymentSuccess) {
        toast.success('Payment Successful!');
      } else {
        toast.error('Payment Failed. Please try again.');
      }
    }, 2000);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-sky-500 mb-4">Payment</h2>
      <form onSubmit={handlePayment}>
        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-400">
            Amount
          </label>
          <input
            required
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-400">
            Card Number
          </label>
          <input
            required
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter card number"
            maxLength="16"
          />
        </div>

        {/* Expiry Date */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="expiryDate" className="block text-gray-400">
              Expiry Date
            </label>
            <input
              required
              type="month"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="cvv" className="block text-gray-400">
              CVV
            </label>
            <input
              required
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="CVV"
              maxLength="3"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`py-2 px-4 rounded-lg transition duration-200 font-medium bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white w-full ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;

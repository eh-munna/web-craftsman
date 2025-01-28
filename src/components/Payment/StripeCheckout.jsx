import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

// Add your Stripe public key here

function StripeCheckout() {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!amount || !stripe || !elements) {
      toast.error('Please fill in all the fields.');
      return;
    }

    setIsProcessing(true);

    // Get the CardElement component
    const cardElement = elements.getElement(CardElement);

    // if there is no CardElement then payment is not allowed to be processed
    if (!cardElement) {
      toast.error('Invalid card details.');
      setIsProcessing(false);
      return;
    }

    // Create PaymentIntent or PaymentMethod (Server-side)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(`Payment failed: ${error.message}`);
      setIsProcessing(false);
      return;
    }

    // Simulating successful payment response (replace with actual backend call)
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Payment Successful!');
    }, 2000); // Simulated delay
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

        {/* Stripe Card Element */}
        <div className="mb-4">
          <label htmlFor="cardDetails" className="block text-gray-400">
            Card Details
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '18px',
                  padding: '30px',
                  color: '#fff',
                  backgroundColor: '#1f2937',
                  borderRadius: '0.375rem',
                  border: '1px solid #ccc',
                  '::placeholder': {
                    color: '#aaa',
                  },
                  width: '100%',
                },
              },
            }}
          />
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

export default StripeCheckout;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PaymentForm from './PaymentForm';

const PaymentProcessing = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!amount || !cardNumber || !expiryDate || !cvv) {
      toast.error('Please fill in all the fields.');
      return;
    }

    setIsProcessing(true);

    // Simulating delayed payment processing (e.g., 5 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      const paymentOutcome = Math.random() > 0.5;
      setPaymentSuccess(paymentOutcome);

      if (paymentOutcome) {
        toast.success('Payment Successful!');
      } else {
        toast.error('Payment Failed. Please try again.');
      }
    }, 5000); // Simulated 5-second delay for payment processing
  };

  const cancelPayment = () => {
    setIsProcessing(false);
    toast.info('Payment has been canceled.');
  };

  return (
    <div>
      <PaymentForm
        amount={amount}
        setAmount={setAmount}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        cvv={cvv}
        setCvv={setCvv}
        handlePayment={handlePayment}
        isProcessing={isProcessing}
      />

      {/* Show cancellation option if payment is processing */}
      {isProcessing && (
        <div className="mt-4 text-center">
          <button
            onClick={cancelPayment}
            className="py-2 px-4 rounded-lg bg-gray-500 text-gray-900 hover:bg-gray-700 hover:text-white"
          >
            Cancel Payment
          </button>
        </div>
      )}

      {/* Show result after payment processing */}
      {paymentSuccess !== null && (
        <div className="mt-4 text-center">
          {paymentSuccess ? (
            <p className="text-green-500">Payment was successful!</p>
          ) : (
            <p className="text-red-500">Payment failed. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentProcessing;

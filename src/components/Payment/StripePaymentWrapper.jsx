import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from './StripeCheckout';

const stripePromise = loadStripe('your-public-key-here');
const StripePaymentWrapper = () => (
  <Elements stripe={stripePromise}>
    <StripeCheckout />
  </Elements>
);

export default StripePaymentWrapper;

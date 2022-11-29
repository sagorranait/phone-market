import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import '../../styles/dashboard/BuyerPayment.css';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

function BuyerPayment() {
   const bookProduct = useLoaderData();
   const {product_info} = bookProduct[0];

  return (
    <div className='buyer-payment'>
      <h2>Payment for : " {product_info.title} "</h2>
      <p>You have to Pay : <b>{product_info.resale_price}</b></p>
      <div className='w-96 my-12'>
         <Elements stripe={stripePromise}>
            <CheckoutForm
               booking={bookProduct[0]}
            />
         </Elements>
      </div>
    </div>
  )
}

export async function getBookedProductById({params}) {
   const response = await fetch('http://localhost:5000/booked/' + params.id);
   if (!response.ok) {
     throw new Error('Failed to fetch post.');
   }
   return response.json();
 }

export default BuyerPayment
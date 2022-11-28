import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { StateContext } from '../../StateProvider';
import Loading from '../Loading';
import SingleBuyerOrder from './SingleBuyerOrder';
import TableHead from './TableHead';

function BuyerOrders() {
  const { user } = useContext(StateContext);
  
  const {data: orders, isLoading} = useQuery({ 
    queryKey: ['buyerOuders'], 
    queryFn: () => fetch(`http://localhost:5000/booked?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    }).then(res => res.json()) 
  });

  console.log(orders);

  return (
    <div className='buyer-orders'>
      {orders?.length === 0 ? <p className='text-center pt-5'>No Order is available!</p> :
      <>
        <TableHead table={['No.', 'Image', 'Product Details', 'Contact info', 'Action']}/>
        {isLoading ? <Loading/> : orders.map((order, index) => <SingleBuyerOrder key={order._id} order={order} number={index}/>)}
      </>
      }
    </div>
  )
}

export default BuyerOrders
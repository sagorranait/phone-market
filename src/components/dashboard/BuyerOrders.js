import SingleBuyerOrder from './SingleBuyerOrder';
import TableHead from './TableHead';

function BuyerOrders() {
  return (
    <div className='buyer-orders'>
      <TableHead table={['No.', 'Image', 'Product Details', 'Action']}/>
      <SingleBuyerOrder/>
    </div>
  )
}

export default BuyerOrders
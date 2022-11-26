import TableHead from './TableHead';
import '../../styles/dashboard/SellerProducts.css';
import SingleSellerProduct from "./SingleSellerProduct";

function SellerProducts() {
  return (
    <div className='seller-products'>
      <TableHead table={['Image', 'Product', 'Status', 'Seller', 'Action']}/>
      <div className='products'>
         <SingleSellerProduct/>
         <SingleSellerProduct/>
      </div>
    </div>
  )
}

export default SellerProducts
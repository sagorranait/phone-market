import '../../styles/dashboard/SellerProducts.css';
import SingleSellerProduct from "./SingleSellerProduct";

function SellerProducts() {
  return (
    <div className='seller-products'>
      <div className='products'>
         <SingleSellerProduct/>
         <SingleSellerProduct/>
      </div>
    </div>
  )
}

export default SellerProducts
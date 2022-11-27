import Verified from '../../assets/verified.png';
import '../../styles/dashboard/SingleSellerProduct.css';
import ItemTemplate from "./ItemTemplate";

function SingleSellerProduct() {
  return (
   <ItemTemplate>
      <div className='product-image'>
         <img src={'https://imgs.search.brave.com/Bd6z-QBHbK_pWsG9FEdRYBZXLa4Xh2ki_VnTSr0NtT4/rs:fit:493:506:1/g:ce/aHR0cHM6Ly9mcmVl/Ymllc2Nsb3VkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9TYW1zdW5n/LUdhbGF4eS1TMjIt/VWx0cmEtOC5wbmc'} alt="product-title" />
      </div>
      <div className='product-info'>
         <h2>SAMSUNG Galaxy S22 Ultra</h2>
         <h4>Price: <del>1199.99</del> <span>349.38</span></h4>
         <p>128GB, 8K Camera & Video, Brightest Display Screen...</p>
      </div>
      <div className='product-status'>
         <p>Condition: <span>good</span></p>
         <p>Used: <span>1 year</span></p>
      </div>
      <div className='product-seller'>
         <p>Rakib Hasan <span><img src={Verified} alt="Verified" /></span></p>
         <p>Call: 01812345698</p>
         <p>Area: <span>Dhaka</span></p>
         <p>Date: <span>2022-11-26</span></p>
      </div>
      <div className='product-action product-advertise'>
         <button className="phoneMarket-btn">Advertise</button>
         <button className="phoneMarket-btn">Delete</button>
      </div>
   </ItemTemplate>
  )
}

export default SingleSellerProduct
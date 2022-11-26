import Verified from '../assets/verified.png';
import '../styles/ProductItem.css';

function ProductItem() {
  return (
    <div className='product-item'>
      <span class="tag">available</span>
      <div className="img">
         <img src={'https://imgs.search.brave.com/Bd6z-QBHbK_pWsG9FEdRYBZXLa4Xh2ki_VnTSr0NtT4/rs:fit:493:506:1/g:ce/aHR0cHM6Ly9mcmVl/Ymllc2Nsb3VkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9TYW1zdW5n/LUdhbGF4eS1TMjIt/VWx0cmEtOC5wbmc'} alt="product-title" />
      </div>
      <h2>SAMSUNG Galaxy S22 Ultra</h2>
      <h4>Price: <del>1199.99</del> <span>349.38</span></h4>
      <div className="type">
         <p>Condition: <span>good</span></p>
         <p>Used: <span>1 year</span></p>
      </div>
      <div className="type">
         <p>Rakib Hasan <span><img src={Verified} alt="Verified" /></span></p>
         <p>Call: 01812345698</p>
      </div>
      <div className="type">
         <p>Area: <span>Dhaka</span></p>
         <p>Date: <span>2022-11-26</span></p>
      </div>
      <div className="actions">
         <button className='phoneMarket-btn'>Book Now</button>
         <button className='phoneMarket-btn'>Report to Admin</button>
      </div>
    </div>
  )
}

export default ProductItem
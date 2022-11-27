import Verified from '../assets/verified.png';
import '../styles/ProductItem.css';

function ProductItem({product}) {
  return (
    <div className='product-item'>
      <span className="tag">{product?.sales_status}</span>
      <div className="img">
         <img src={product?.img_url} alt={product?.title} />
      </div>
      <h2>{product?.title}</h2>
      <h4>Price: <del>{product?.original_price}</del> <span>{product?.resale_price}</span></h4>
      <p>{product?.description}</p>
      <div className="type">
         <p>Condition: <span>{product?.condition}</span></p>
         <p>Used: <span>{product?.used_year} year</span></p>
         <p>{product?.saler_name} {product?.saler_verified && <span><img src={Verified} alt="Verified" /></span>}</p>
      </div>
      <div className="type">
         <p>Call: {product?.phone_number}</p>
         <p>Area: <span>{product?.location}</span></p>
         <p>Date: <span>{product?.post_date.slice(0, 10)}</span></p>
      </div>
      <div className="actions">
         <button className='phoneMarket-btn'>Book Now</button>
         <button className='phoneMarket-btn'>Report to Admin</button>
      </div>
    </div>
  )
}

export default ProductItem
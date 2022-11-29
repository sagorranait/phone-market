import Verified from '../../assets/verified.png';
import '../../styles/dashboard/SingleSellerProduct.css';
import ItemTemplate from "./ItemTemplate";

function SingleSellerProduct({product, advertisedHandler, deleteProductHandler}) {
   const {_id, used_year, title, saler_verified, saler_name, original_price, resale_price, post_date, phone_number, location, img_url, description, condition, sales_status, advertised} = product;

  return (
   <ItemTemplate>
      <div className='product-image'>
         <img src={img_url} alt={title} />
      </div>
      <div className='product-info'>
         <h2>{title}</h2>
         <h4>Price: <del>{original_price}</del> <span>{resale_price}</span></h4>
         <p>{description}</p>
      </div>
      <div className='product-status'>
         <p>Condition: <span>{condition}</span></p>
         <p>Used: <span>{used_year} year</span></p>
         <p>Sales Status: <span>{sales_status}</span></p>
      </div>
      <div className='product-seller'>
         <p>{saler_name} {saler_verified && <span><img src={Verified} alt="Verified" /></span>}</p>
         <p>Call: {phone_number}</p>
         <p>Area: <span>{location}</span></p>
         <p>Date: <span>{post_date.slice(0, 10)}</span></p>
      </div>
      <div className='product-action product-advertise'>
         {advertised ? 
            <button className="phoneMarket-btn advertised">Advertised</button> : 
            <button className="phoneMarket-btn" onClick={()=>advertisedHandler(_id)}>Mark Advertised</button>
         }
         <button className="phoneMarket-btn" onClick={()=>deleteProductHandler(_id)}>Delete</button>
      </div>
   </ItemTemplate>
  )
}

export default SingleSellerProduct
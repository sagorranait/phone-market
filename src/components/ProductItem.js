import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Verified from '../assets/verified.png';
import { StateContext } from '../StateProvider';
import '../styles/ProductItem.css';
import FormModal from './FormModal';

function ProductItem({product}) {
   const { currentUser, user } = useContext(StateContext);
   const [modalShow, setModalShow] = useState(false);
   const [modalStatus, setModalStatus] = useState('');

  return (
   <>
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
      {user ? <div className="actions">
         {product?.booked?.user === currentUser?.email ? <button 
            className='phoneMarket-btn booked'>Booked</button> : 
         <button 
            className='phoneMarket-btn' 
            onClick={() =>{ 
               setModalShow(true);
               setModalStatus('booking');
            }}
         >Book Now</button>
         }
         {product?.reported?.user === currentUser?.email ? <button 
            className='phoneMarket-btn booked'>Reported</button> : 
            <button 
               className='phoneMarket-btn'
               onClick={() =>{ 
                  setModalShow(true);
                  setModalStatus('reporting');
               }}
            >Report to Admin</button>
         }
      </div> : <Link to='/login' className='phoneMarket-btn loginToPurchase-btn'>Login to Purchase</Link>}      
    </div>
    <FormModal 
         show={modalShow}
         onHide={() => setModalShow(false)}
         status={modalStatus}
         product={product}
      />
   </>
  )
}

export default ProductItem
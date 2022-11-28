import { CiTrash } from 'react-icons/ci'
import ItemTemplate from './ItemTemplate'
import Verified from '../../assets/verified.png';

function SingleAdminSeller({seller, numbers, verifiedHandler, deleteSellerHandler}) {
   const {_id, displayName, number, photoUrl, verified, location  } = seller;

  return (
   <ItemTemplate>
      <div className='product-number'>
         <p>{numbers + 1}</p>
      </div>
      <div className='product-image adminUser-img'>
         <img src={photoUrl} alt={displayName} />
      </div>
      <div className='product-seller'>
         <p>{displayName} {verified && <span><img src={Verified} alt="Verified" /></span>}</p>
         <p>Call: {number}</p>
         <p>Area: <span>{location}</span></p>
      </div>
      <div className='product-action adminUser-action'>
         {verified ? <button className="phoneMarket-btn vrified-btn">Verified User</button> : <button className="phoneMarket-btn vrified-btn" onClick={()=>verifiedHandler(_id)}>Make as Verified</button>}
         <button className="phoneMarket-btn" onClick={()=>deleteSellerHandler(_id)}><CiTrash/></button>
      </div>
   </ItemTemplate>
  )
}

export default SingleAdminSeller
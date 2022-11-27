import { CiTrash } from 'react-icons/ci'
import ItemTemplate from './ItemTemplate'
import Verified from '../../assets/verified.png';

function SingleAdminSeller() {
  return (
   <ItemTemplate>
      <div className='product-number'>
         <p>1</p>
      </div>
      <div className='product-image'>
         <img src={'https://imgs.search.brave.com/Bd6z-QBHbK_pWsG9FEdRYBZXLa4Xh2ki_VnTSr0NtT4/rs:fit:493:506:1/g:ce/aHR0cHM6Ly9mcmVl/Ymllc2Nsb3VkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9TYW1zdW5n/LUdhbGF4eS1TMjIt/VWx0cmEtOC5wbmc'} alt="product-title" />
      </div>
      <div className='product-seller'>
         <p>Rakib Hasan <span><img src={Verified} alt="Verified" /></span></p>
         <p>Call: 01812345698</p>
         <p>Area: <span>Dhaka</span></p>
      </div>
      <div className='product-action'>
         <button className="phoneMarket-btn"><CiTrash/></button>
      </div>
   </ItemTemplate>
  )
}

export default SingleAdminSeller
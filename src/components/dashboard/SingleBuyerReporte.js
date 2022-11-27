import React from 'react'
import { CiTrash } from 'react-icons/ci'
import ItemTemplate from './ItemTemplate'

function SingleBuyerReporte() {
  return (
   <ItemTemplate>
   <div className='product-number'>
      <p>1</p>
   </div>
   <div className='product-info'>
      <h2>SAMSUNG Galaxy S22 Ultra</h2>
      <h4>Price: <del>1199.99</del> <span>349.38</span></h4>
   </div>
   <div className='product-info'>
      <p>128GB, 8K Camera & Video, Brightest Display Screen...</p>
   </div>
   <div className='product-action'>
      <button className="phoneMarket-btn"><CiTrash/></button>
   </div>
</ItemTemplate>
  )
}

export default SingleBuyerReporte
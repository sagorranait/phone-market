import React from 'react';
import { CiTrash } from 'react-icons/ci';
import ItemTemplate from './ItemTemplate';

function SingleAdminReporte({report, number, deleteReportedHandler}) {
   const {_id, user_info, product_info, message } = report;

  return (
   <ItemTemplate>
      <div className='product-number' style={{width:' 100px'}}>
         <p>{number+1}</p>
      </div>
      <div className='product-info'>
         <h2>{product_info.title}</h2>
         <h4>Price: <del>{product_info.original_price}</del> <span>{product_info.resale_price}</span></h4>
      </div>
      <div className='product-seller'>
         <p>{user_info.name}</p>
         <p>{user_info.email}</p>
      </div>
      <div className='product-info'>
         <p>{message}</p>
      </div>
      <div className='product-action'>
         <button className="phoneMarket-btn" onClick={()=> deleteReportedHandler(_id, product_info._id)}><CiTrash/></button>
      </div>
   </ItemTemplate>
  )
}

export default SingleAdminReporte
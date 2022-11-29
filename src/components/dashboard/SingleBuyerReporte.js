import React from 'react'
import toast from 'react-hot-toast';
import { CiTrash } from 'react-icons/ci'
import { useLocation, useNavigate } from 'react-router-dom';
import ItemTemplate from './ItemTemplate'

function SingleBuyerReporte({reporte, number, refetch}) {
   let location = useLocation();
   let navigate = useNavigate();
   const {_id, message, product_info} = reporte;
   

   const removeReporteHandler = (id) => {
      const sureDelete = window.confirm("Are you sure to delete!");
      if (sureDelete) {
         fetch(`http://localhost:5000/reported/${id}`, {
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch();
               toast.success('Deleted Successfully.');
               navigate(location);
               
               const reported = {
                  user: '',
                  status: false
               }
               // updating the product reporte
               fetch(`http://localhost:5000/product/report/${product_info?._id}`, {
                  method: 'PATCH',
                  headers: {
                     'content-type': 'application/json',
                  },
                  body: JSON.stringify(reported)
               })
               .then(res => res.json())
               .then(data => {
                  if (data.modifiedCount > 0) {
                     console.log(data);
                     
                  }
               })
               .catch(error => console.log(error));
            }
         })
         .catch((error)=> console.log(error));
      }
   }

  return (
   <ItemTemplate>
   <div className='product-number'>
      <p>{number+1}</p>
   </div>
   <div className='product-info'>
      <h2>{product_info.title}</h2>
      <h4>Price: <span>{product_info.resale_price}</span></h4>
   </div>
   <div className='product-info'>
      <p>{message}</p>
   </div>
   <div className='product-action'>
      <button className="phoneMarket-btn" onClick={()=>removeReporteHandler(_id)}><CiTrash/></button>
   </div>
</ItemTemplate>
  )
}

export default SingleBuyerReporte
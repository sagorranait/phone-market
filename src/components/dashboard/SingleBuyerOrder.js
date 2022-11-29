import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ItemTemplate from './ItemTemplate';

function SingleBuyerOrder({order, number, refetch}) {
   let location = useLocation();
   let navigate = useNavigate();
   const {_id, lastly, meeting_location, phone_number, product_info, paid } = order;
   
   const removeOrderHandler = (id) => {
      const sureDelete = window.confirm("Are you sure to delete!");
      if (sureDelete) {
         fetch(`http://localhost:5000/booked/${id}`, {
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {

               const booked = {
                  user: '',
                  status: false
               }
               // updating the product reporte
               fetch(`http://localhost:5000/product/${product_info?._id}`, {
                  method: 'PATCH',
                  headers: {
                     'content-type': 'application/json',
                  },
                  body: JSON.stringify(booked)
               })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                     refetch();
                     toast.success('Deleted Successfully.');
                     navigate(location);
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
         <p>{number + 1}</p>
      </div>
      <div className='product-image'>
         <img src={product_info.img_url} alt={product_info.title} />
      </div>
      <div className='product-info'>
         <h2>{product_info.title}</h2>
         <h4>Price: <del>{product_info.original_price}</del> <span>{product_info.resale_price}</span></h4>
         <h4>Counter Price (lastly): <span>{lastly}</span></h4>
      </div>
      <div className='product-info'>
         <p>Number: <span>{phone_number}</span></p>
         <p>Location: <span>{meeting_location}</span></p>
      </div>
      <div className='order-action payment-btn'>
         {paid ? <button className="phoneMarket-btn paid-btn">Paid</button> : <Link to={`/dashboard/buyer/payment/${_id}`} className="phoneMarket-btn">Pay Now</Link>}
         <button className="phoneMarket-btn" onClick={()=>removeOrderHandler(_id)}>Delete</button>
      </div>
   </ItemTemplate>
  )
}

export default SingleBuyerOrder
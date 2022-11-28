import { useContext, useEffect, useState } from 'react';
import SingleSellerProduct from "./SingleSellerProduct";
import { StateContext } from '../../StateProvider';
import '../../styles/dashboard/SellerProducts.css';
import toast from 'react-hot-toast';
import Loading from '../Loading';

function SellerProducts() {
  const { user } = useContext(StateContext);
  const [sellerProduct, setSellerProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/sellerproduct?email=${user?.email}`, {
      headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
  })
    .then(res => res.json())
    .then(data => {
      setSellerProduct(data)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, [user?.email]);

  const advertisedHandler = (id) => {
    const advertised = {
      advertised: true,
    }

    fetch(`http://localhost:5000/sellerproduct/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(advertised)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          fetch(`http://localhost:5000/sellerproduct?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
          .then(res => res.json())
          .then(data => {
            setSellerProduct(data)
          })
          .catch(error => console.log(error))
          toast.success('Successfully Product Advertised. Check Home page !!');
        }
      })
      .catch(error => console.log(error));
  }

 const deleteProductHandler = (id) => {
  const sureDelete = window.confirm("Are you sure to delete!");
  if (sureDelete) {
    fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully.');
          const remaining = sellerProduct.filter(odr => odr._id !== id);
          setSellerProduct(remaining);
        }
    })
    .catch((error)=> console.log(error));
  }
 }

  return (
    <div className='seller-products'>
      <div className='products'>
         {sellerProduct?.length === 0 ? <p className='text-center pt-5'>No product is available!</p> :
          <>
            {loading ? <Loading/> : sellerProduct.map(product => <SingleSellerProduct key={product._id} product={product} advertisedHandler={advertisedHandler} deleteProductHandler={deleteProductHandler} />)}
          </>
          }
      </div>
    </div>
  )
}

export default SellerProducts
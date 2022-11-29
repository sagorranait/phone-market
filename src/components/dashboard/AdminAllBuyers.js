import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Loading from '../Loading';
import SingleAdminSeller from './SingleAdminSeller'
import TableHead from './TableHead'

function AdminAllBuyers() {
  const [allBuyers, setAllBuyers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/user/allBuyer')
    .then(res => res.json())
    .then(data => {
      setAllBuyers(data)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, []);


  const verifiedHandler = (id) => {
    const verifiy = {
       verified: true,
    }

    fetch(`http://localhost:5000/user/${id}`, {
       method: 'PATCH',
       headers: {
          'content-type': 'application/json',
       },
       body: JSON.stringify(verifiy)
    })
    .then(res => res.json())
    .then(data => {
       console.log(data);
       if (data.modifiedCount > 0) {
        fetch('http://localhost:5000/user/allBuyer')
        .then(res => res.json())
        .then(data => {
          setAllBuyers(data)
        })
        .catch(error => console.log(error))
         toast.success('User Verified Successfully.');
       }
    })
    .catch(error => console.log(error));
 }



 const deleteBuyerHandler = (id) => {
  const sureDelete = window.confirm("Are you sure to delete!");
  if (sureDelete) {
    fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully.');
          const remaining = allBuyers.filter(odr => odr._id !== id);
          setAllBuyers(remaining);
        }
    })
    .catch((error)=> console.log(error));
  }
 }

  return (
    <div className='admin-all-buyers'>
      {loading ? <Loading/> : 
        <>
          {allBuyers?.length === 0 ? <p className='text-center pt-5'>No Buyer is available!</p> :
          <>
            <TableHead table={['No.', 'Buyer Image', 'Buyer Details', 'Action']}/>
            {allBuyers.map((seller, index) => <SingleAdminSeller key={seller._id} seller={seller} numbers={index} verifiedHandler={verifiedHandler} deleteSellerHandler={deleteBuyerHandler} buyer={true} />)}
          </>
          }
        </>
      }
    </div>
  )
}

export default AdminAllBuyers
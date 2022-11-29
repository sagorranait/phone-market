import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Loading from '../Loading';
import SingleAdminSeller from './SingleAdminSeller'
import TableHead from './TableHead'

function AdminAllSellers() {
  const [allSellers, setAllSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://phonemarket-server-app.vercel.app/user/allSeller')
    .then(res => res.json())
    .then(data => {
      setAllSellers(data)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, []);

  const verifiedHandler = (id) => {
    const verifiy = {
       verified: true,
    }

    fetch(`https://phonemarket-server-app.vercel.app/user/${id}`, {
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
        fetch('https://phonemarket-server-app.vercel.app/user/allSeller')
        .then(res => res.json())
        .then(data => {
          setAllSellers(data)
        })
        .catch(error => console.log(error))
         toast.success('User Verified Successfully.');
       }
    })
    .catch(error => console.log(error));
 }

 const deleteSellerHandler = (id) => {
  const sureDelete = window.confirm("Are you sure to delete!");
  if (sureDelete) {
    fetch(`https://phonemarket-server-app.vercel.app/user/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully.');
          const remaining = allSellers.filter(odr => odr._id !== id);
          setAllSellers(remaining);
        }
    })
    .catch((error)=> console.log(error));
  }
 }

  return (
    <div className='admin-all-sellers'>
      { loading ? <Loading/> :
        <>
          {allSellers?.length === 0 ? <p className='text-center pt-5'>No Seller is available!</p> :
            <>
              <TableHead table={['No.', 'Seller Image', 'Seller Details', 'Action']}/>
              {allSellers.map((seller, index) => <SingleAdminSeller key={seller._id} seller={seller} numbers={index} verifiedHandler={verifiedHandler} deleteSellerHandler={deleteSellerHandler} buyer={false} />)}
            </>
          }
        </>
      }
    </div>
  )
}

export default AdminAllSellers
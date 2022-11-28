import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading';
import SingleAdminReporte from './SingleAdminReporte'
import TableHead from './TableHead'

function AdminAllReportes() {
  const [allReportes, setAllReportes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/allReporte')
    .then(res => res.json())
    .then(data => {
      setAllReportes(data)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, []);

  const deleteReportedHandler = (id, proId) => {
    const sureDelete = window.confirm("Are you sure to delete!");
    if (sureDelete) {
      fetch(`http://localhost:5000/reported/${id}`, {
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
          if (data.deletedCount > 0) {
            toast.success('Deleted Successfully.');
            const remaining = allReportes.filter(odr => odr._id !== id);
            setAllReportes(remaining);
            fetch(`http://localhost:5000/product/${proId}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                  console.log(data);
                }
            })
            .catch((error)=> console.log(error));
          }
      })
      .catch((error)=> console.log(error));
    }
   }

  return (
    <div className='admin-all-reportes'>
      {allReportes?.length === 0 ? <p className='text-center pt-5'>No Seller is available!</p> :
      <>
      <TableHead table={['No.', 'Reported Product', 'Reported User', 'Report Message', 'Action']}/>
        {loading ? <Loading/> : allReportes.map((report, index) => <SingleAdminReporte key={report._id} report={report} number={index} deleteReportedHandler={deleteReportedHandler} />)}
      </>
      }
    </div>
  )
}

export default AdminAllReportes
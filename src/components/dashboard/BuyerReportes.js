import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleBuyerReporte from './SingleBuyerReporte';
import TableHead from './TableHead';
import { StateContext } from '../../StateProvider';
import Loading from '../Loading';

function BuyerReportes() {
  const { user } = useContext(StateContext);
  
  const {data: reportes, isLoading, refetch} = useQuery({ 
    queryKey: ['buyerReportes'], 
    queryFn: () => fetch(`http://localhost:5000/reported?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    }).then(res => res.json()) 
  });

  return (
    <div className='buyer-reportes'>
      {reportes?.length === 0 ? <p className='text-center pt-5'>No Report is available!</p> :
      <>
        <TableHead table={['No.', 'Reported Product', 'Report Message', 'Action']}/>
        {isLoading ? <Loading/> : reportes.map((reporte, index) => <SingleBuyerReporte key={reporte._id} reporte={reporte} number={index} refetch={refetch}/>)}
      </>
      }
    </div>
  )
}

export default BuyerReportes
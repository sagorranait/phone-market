import SingleBuyerReporte from './SingleBuyerReporte'
import TableHead from './TableHead'

function BuyerReportes() {
  return (
    <div className='buyer-reportes'>
      <TableHead table={['No.', 'Reported Product', 'Report Message', 'Action']}/>
      <SingleBuyerReporte/>
    </div>
  )
}

export default BuyerReportes
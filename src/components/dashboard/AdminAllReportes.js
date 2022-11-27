import SingleAdminReporte from './SingleAdminReporte'
import TableHead from './TableHead'

function AdminAllReportes() {
  return (
    <div className='admin-all-reportes'>
      <TableHead table={['No.', 'Reported Product', 'Reported User', 'Report Message', 'Action']}/>
      <SingleAdminReporte/>
    </div>
  )
}

export default AdminAllReportes
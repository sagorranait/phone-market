import React from 'react'
import SingleAdminSeller from './SingleAdminSeller'
import TableHead from './TableHead'

function AdminAllBuyers() {
  return (
    <div className='admin-all-buyers'>
      <TableHead table={['No.', 'Buyer Image', 'Buyer Details', 'Action']}/>
      <SingleAdminSeller/>
    </div>
  )
}

export default AdminAllBuyers
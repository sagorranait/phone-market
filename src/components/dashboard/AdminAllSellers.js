import React from 'react'
import SingleAdminSeller from './SingleAdminSeller'
import TableHead from './TableHead'

function AdminAllSellers() {
  return (
    <div className='admin-all-sellers'>
      <TableHead table={['No.', 'Seller Image', 'Seller Details', 'Action']}/>
      <SingleAdminSeller/>
    </div>
  )
}

export default AdminAllSellers
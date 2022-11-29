import { Table } from "react-bootstrap"

function TableHead({table}) {
  return (
   <Table striped className="table-responsive">
      <thead>
      <tr>
         {table.map(th => <th key={th} className={`text-white ${th !== 'No.' && 'text-center' }`}>{th}</th>)}
      </tr>
      </thead>
   </Table>
  )
}

export default TableHead
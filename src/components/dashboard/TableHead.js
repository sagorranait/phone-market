import { Table } from "react-bootstrap"

function TableHead({table}) {
  return (
   <Table striped>
      <thead>
      <tr>
         {table.map(th => <th className={`text-white ${th !== 'No.' && 'text-center' }`}>{th}</th>)}
      </tr>
      </thead>
   </Table>
  )
}

export default TableHead
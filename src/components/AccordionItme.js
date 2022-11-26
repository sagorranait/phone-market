import { Accordion } from 'react-bootstrap'
import '../styles/AccordionItme.css'

function AccordionItme({eventKey, title, description}) {
  return (
   <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body dangerouslySetInnerHTML={{ __html: description }}></Accordion.Body>
   </Accordion.Item>
  )
}

export default AccordionItme
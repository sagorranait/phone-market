import Modal from 'react-bootstrap/Modal';
import '../styles/FormModal.css';
import BookingForm from './BookingForm';
import ReportForm from './ReportForm';

function FormModal({show, onHide, status}) {
  return (
   <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
   >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
         {status === 'booking' ? 'Booking Details' : 'Report (Tell us why?)'}
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {status === 'booking' ? <BookingForm/> : <ReportForm/>}
      </Modal.Body>
   </Modal>
  )
}

export default FormModal
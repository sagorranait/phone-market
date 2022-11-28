import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function BookingForm() {
  return (
    <div className='modal-form'>
      <Form>
         <Form.Group controlId="formGridText">
            <input type="text" name="title" id="nameInput" value={'product title'} style={{borderRadius: '5px', marginTop: '0px'}} readOnly />
         </Form.Group>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <input type="text" name="condition" id="nameInput" value={'Good'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="number" name="price" id="numberInput" value={'50.55'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
         </Row>
         <Form.Group controlId="formGridText">
            <input type="text" name="buyer_name" id="nameInput" value={'Rakib Hasan'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="email" name="buyer_email" id="emailInput" value={'najmolhasan@gmail.com'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridPassword">
            <input type="number" name="phone_number" id="numberInput" placeholder='Enter your phone number' style={{borderRadius: '5px', marginTop: '8px'}} required />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="text" name="lastly" id="nameInput" placeholder='Counter price (lastly)' style={{borderRadius: '5px'}} required />
         </Form.Group>
         <Form.Group>
            <textarea id="textareaInput" name="meeting" placeholder='Meeting location' rows="3" style={{borderRadius: '5px'}}></textarea>
         </Form.Group>
         <button className='phoneMarket-btn w-100 mt-1' type="submit">Booked</button>
      </Form>
    </div>
  )
}

export default BookingForm
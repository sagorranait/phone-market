import React from 'react'
import { Form } from 'react-bootstrap'

function ReportForm() {
  return (
    <div className='modal-form'>
      <Form>
         <Form.Group controlId="formGridText">
            <input type="text" name="title" id="nameInput" value={'product title'} style={{borderRadius: '5px', marginTop: '0px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridPassword">
            <input type="number" name="price" id="numberInput" value={'50.55'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="text" name="user_name" id="nameInput" value={'Rakib Hasan'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="email" name="user_email" id="emailInput" value={'najmolhasan@gmail.com'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group>
            <textarea id="textareaInput" name="meeting" placeholder='Tell us why?' rows="3" style={{borderRadius: '5px'}}></textarea>
         </Form.Group>
         <button className='phoneMarket-btn w-100 mt-1' type="submit">Reported</button>
      </Form>
    </div>
  )
}

export default ReportForm
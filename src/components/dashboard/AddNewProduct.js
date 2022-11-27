import { Col, Form, Row } from 'react-bootstrap';
import '../../styles/dashboard/AddNewProduct.css';

function AddNewProduct() {
  return (
    <div className='addNew-product'>
      <Form>
         <Form.Group controlId="formGridText">
            <input type="text" name="title" id="nameInput" placeholder='Enter your product title' style={{borderRadius: '5px'}} required />
         </Form.Group>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <input type="number" name="original_price" id="numberInput" placeholder='Enter original price'  style={{borderRadius: '5px'}}required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="number" name="resale_price" id="numberInput" placeholder='Enter resale price' style={{borderRadius: '5px'}} required />
            </Form.Group>
         </Row>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <div className='select-input' style={{borderRadius: '5px'}}>
                  <select name="status" id="selectInput" style={{borderRadius: '5px'}}>
                     <option>Choose Product Condition</option>
                     <option value="excellent">Excellent</option>
                     <option value="good">Good</option>
                     <option value="fair">Fair</option>
                  </select>
               </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="number" name="used_year" id="numberInput" placeholder='Enter years of use' style={{borderRadius: '5px'}} required />
            </Form.Group>
         </Row>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <div className='select-input' style={{borderRadius: '5px'}}>
                  <select name="status" id="selectInput" style={{borderRadius: '5px'}}>
                     <option>Choose Category</option>
                     <option value="638176352841511b9346922f">SAMSUNG</option>
                     <option value="638176632841511b93469230">OnePlus</option>
                     <option value="6381768c2841511b93469232">iPhone</option>
                     <option value="638176a32841511b93469233">Realme</option>
                  </select>
               </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="file" id="imageInput" name="img_url" style={{borderRadius: '5px'}}/>
            </Form.Group>
         </Row>
         <Form.Group>
            <textarea id="textareaInput" name="description" placeholder='Description' rows="3" style={{borderRadius: '5px'}}></textarea>
         </Form.Group>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <input type="text" name="saler_name" id="nameInput" value={'Rakib Hasan'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="number" name="phone_number" id="numberInput" value={'01812345698'} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
         </Row>
         <Form.Group controlId="formGridText">
            <input type="text" name="location" id="nameInput" value={'Dhaka'} style={{borderRadius: '5px'}} readOnly />
         </Form.Group>
         <button className='phoneMarket-btn' type="submit">Submit</button>
      </Form>
    </div>
  )
}

export default AddNewProduct
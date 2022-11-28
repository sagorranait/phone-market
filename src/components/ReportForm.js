import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateProvider';

function ReportForm({product, onHide}) {
   let location = useLocation();
   let navigate = useNavigate();
   const { currentUser } = useContext(StateContext);
   const [reporting, setReporting] = useState(false);

   const reportToAdminHandler = (e) => {
      e.preventDefault();
      setReporting(true);
      const message = e.target.message.value;
      console.log(location);

      const ReportedInfo = {
         product_info: {
            _id: product?._id,
            img_url : product?.img_url,
            title: product?.title,
            original_price: product?.original_price,
            resale_price: product?.resale_price,
         },
         user_info: {
            name: currentUser?.displayName,
            email: currentUser?.email,
         },
         message
      }

      const reported = {
         user: currentUser?.email,
         status: true
      }

      axios.post('http://localhost:5000/reported', ReportedInfo)
      .then((response) => {
         fetch(`http://localhost:5000/product/report/${product?._id}`, {
            method: 'PATCH',
            headers: {
               'content-type': 'application/json',
            },
            body: JSON.stringify(reported)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               setReporting(false);
               toast.success('Successfully reported to admin.');
               onHide();
               navigate(location);
            }
         })
         .catch(error => console.log(error));
      })
      .catch((error) => {
         console.log(error);
         toast.error(error);
      });
   }

  return (
    <div className='modal-form'>
      <Form onSubmit={reportToAdminHandler}>
         <Form.Group controlId="formGridText">
            <input type="text" name="title" id="nameInput" value={product?.title} style={{borderRadius: '5px', marginTop: '0px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridPassword">
            <input type="number" name="price" id="numberInput" value={product?.resale_price} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="text" name="user_name" id="nameInput" value={currentUser?.displayName} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="email" name="user_email" id="emailInput" value={currentUser?.email} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group>
            <textarea id="textareaInput" name="message" placeholder='Tell us why?' rows="3" style={{borderRadius: '5px'}}></textarea>
         </Form.Group>
         <button className='phoneMarket-btn w-100 mt-1' type="submit">{reporting ? 'Reporting...' : 'Reported'}</button>
      </Form>
    </div>
  )
}

export default ReportForm
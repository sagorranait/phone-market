import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateProvider';

function BookingForm({product, onHide}) {
   let location = useLocation();
   let navigate = useNavigate();
   const { currentUser } = useContext(StateContext);
   const [booking, setBooking] = useState(false);

   const bookNowHandler = (e) => {
      e.preventDefault();
      setBooking(true);
      const phone_number = e.target.phone_number.value;
      const lastly = e.target.lastly.value;
      const meeting_location = e.target.meeting.value;

      const BookedInfo = {
         product_info: {
            _id: product?._id,
            img_url : product?.img_url,
            title: product?.title,
            original_price: product?.original_price,
            resale_price: product?.resale_price,
            condition: product?.condition,
            pay_status: false,
         },
         user_info: {
            name: currentUser?.displayName,
            email: currentUser?.email,
         },
         phone_number,
         lastly,
         meeting_location
      }

      const booked = {
         user: currentUser?.email,
         status: true
      }

      axios.post('http://localhost:5000/booked', BookedInfo)
      .then((response) => {
         fetch(`http://localhost:5000/product/${product?._id}`, {
            method: 'PATCH',
            headers: {
               'content-type': 'application/json',
            },
            body: JSON.stringify(booked)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               setBooking(false);
               toast.success('Successfully booked the product.');
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
      <Form onSubmit={bookNowHandler}>
         <Form.Group controlId="formGridText">
            <input type="text" name="title" id="nameInput" value={product?.title} style={{borderRadius: '5px', marginTop: '0px'}} readOnly />
         </Form.Group>
         <Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <input type="text" name="condition" id="nameInput" value={product?.condition} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <input type="number" name="price" id="numberInput" value={product?.resale_price} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
            </Form.Group>
         </Row>
         <Form.Group controlId="formGridText">
            <input type="text" name="buyer_name" id="nameInput" value={currentUser?.displayName} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
         </Form.Group>
         <Form.Group controlId="formGridText">
            <input type="email" name="buyer_email" id="emailInput" value={currentUser?.email} style={{borderRadius: '5px', marginTop: '8px'}} readOnly />
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
         <button className='phoneMarket-btn w-100 mt-1' type="submit">{booking ? 'Booking...' : 'Booked'}</button>
      </Form>
    </div>
  )
}

export default BookingForm
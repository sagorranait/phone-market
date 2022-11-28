import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { StateContext } from '../../StateProvider';
import '../../styles/dashboard/AddNewProduct.css';

function AddNewProduct() {
   const { currentUser } = useContext(StateContext);
   const [category, setCategory] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => {
         setCategory(data)
      })
      .catch(error => console.log(error))
   }, []);

   const sellerAddNewProductHandler = (e) => {
      e.preventDefault();
      setLoading(true);
      const title = e.target.title.value;
      const original_price = e.target.original_price.value;
      const resale_price = e.target.resale_price.value;
      const condition = e.target.status.value;
      const used_year = e.target.used_year.value;
      const cat_id = e.target.cat_id.value;
      const img_url = e.target.img_url.files[0];
      const description = e.target.description.value;
      const saler_name = e.target.saler_name.value;
      const phone_number = e.target.phone_number.value;
      const location = e.target.location.value;

      const formData = new FormData();
      formData.append('image', img_url);

      fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMGBB_KEY}`, {
         method: 'POST',
         body: formData
      })
      .then(res => res.json())
      .then(imgData => {
         const newProduct = {
            title,
            original_price,
            resale_price,
            condition,
            location,
            phone_number,
            saler_name,
            saler_email : currentUser?.email,
            used_year,
            description,
            sales_status : 'available',
            post_date : `${new Date()}`,
            img_url : imgData.data.url,
            cat_id,
            advertised : false,
            saler_verified : currentUser?.verified,
            booked: { user: '', status: false },
            reported: { user: '', status: false }
         }

         axios.post('http://localhost:5000/product', newProduct)
         .then((response) => {
            setLoading(false);
            toast.success('Product Added Successfully.');
            e.target.reset();
         })
         .catch((error) => {
            console.log(error);
            toast.error(error);
         });
      })
      .catch(error => console.log(error))
   }

  return (
    <div className='addNew-product'>
      <Form onSubmit={sellerAddNewProductHandler}>
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
                  <select name="cat_id" id="selectInput" style={{borderRadius: '5px'}}>
                     <option>Choose Category</option>
                     {category.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                     
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
         <button className='phoneMarket-btn' type="submit">{loading ? 'Adding...' : 'Add New'}</button>
      </Form>
    </div>
  )
}

export default AddNewProduct
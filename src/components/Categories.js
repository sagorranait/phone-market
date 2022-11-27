import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

function Categories() {
   const [loading, setLoading] = useState(false);
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      setLoading(true);
     axios.get('http://localhost:5000/categories')
   .then(res => {
      setCategories(res.data);
      setLoading(false);
   })
     .catch(error => console.log(error));
   }, [])
   
  return (
    <section className='categories-area'>
      <Container>
         <h2>Categories</h2>
         { loading ? <Loading/> : 
         <Row>
            {categories.map(category => <Col key={category._id} sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={`/category/${category._id}`} className='image'>
                     <img src={category.icon} alt={category.name} />
                  </Link>
               </div>
            </Col>)}
         </Row>
         }
      </Container>
    </section>
  )
}

export default Categories
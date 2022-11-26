import { Col, Container, Row } from 'react-bootstrap';
import Shield from '../assets/services-icon/shield.png';
import Delivery from '../assets/services-icon/delivery.png';
import CallCenter from '../assets/services-icon/call-center.png';
import CreditCard from '../assets/services-icon/credit-card.png';
import '../styles/Services.css';

function Services() {
  return (
    <section className='service-area'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="service">
                  <img src={Delivery} alt="Delivery" />
                  <h3>Fast Worldwide Shipping</h3>
                  <p>Get free shipping over $1250.99</p>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="service">
                  <img src={CallCenter} alt="Call-Center" />
                  <h3>24/7 Customer Support</h3>
                  <p>Friendly 24/7 customer support</p>
               </div>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
               <div className="service">
                  <img src={Shield} alt="Shield" />
                  <h3>Money Back Guarantee</h3>
                  <p>We return money within 30 days</p>
               </div>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
               <div className="service">
                  <img src={CreditCard} alt="CreditCard" />
                  <h3>Secure Online Payment</h3>
                  <p>Accept all major credit cards</p>
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Services
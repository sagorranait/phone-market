import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import maestro from "../assets/payment-icon/maestro.png"
import MasterCard from "../assets/payment-icon/master-card.png"
import paypal from "../assets/payment-icon/paypal.png"
import visa from "../assets/payment-icon/visa.png"
import '../styles/Footer.css';

function Footer() {
  return (
   <>
      <section className='footer-section'>
         <Container>
            <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="quick-access social">
                     <h2>Pay With</h2>
                     <div className="payment-icon">
                        <img src={visa} alt="visa" />
                        <img src={paypal} alt="paypal" />
                        <img src={MasterCard} alt="master-card" />
                        <img src={maestro} alt="maestro" />
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="quick-access">
                     <h2>HELP</h2>
                     <div className="links">
                        <Link to='/blogs'>Blog</Link>
                        <Link to='/'>Delivery</Link>
                        <Link to='/'>Report To Admin</Link>
                        <Link to='/'>Returns</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="quick-access contact">
                     <h2>Get In Touch</h2>
                     <div className="info">
                        <p>(+880) 123-456-7890</p>
                        <p>info@phonemarket.com</p>
                        <p>help@phonemarket.in</p>
                        <p>Mirpur-11, Dhaka, Bangladesh.</p>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="quick-access social">
                     <h2>Social Links</h2>
                     <div className="icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href="https://www.behance.net" target="_blank" rel="noreferrer"><FaBehance/></a>
                     </div>
                  </div>
               </Col>
            </Row>
      </Container>
      </section>
      <div className='footer-bottom'>
            <Container>
               <p className='m-0'>Copyright © 2022 <a href="https://www.facebook.com/sagorranait" target="_blank" rel="noreferrer">Sagor Rana</a> All Rights Reserved.</p>
            </Container>
      </div>
   </>
  )
}

export default Footer
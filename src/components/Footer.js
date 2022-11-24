import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <section className='footer-section'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links">
                  <h2>Quick Links</h2>
                  <div className="links">
                     <Link to='/'>Home</Link>
                     <Link to='/blogs'>Blog</Link>
                     <Link to='/'>Track order</Link>
                     <Link to='/'>Returns</Link>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links contact">
                  <h2>Contact Us</h2>
                  <div className="info">
                     <p>(+880) 123-456-7890</p>
                     <p>info@phonemarket.com</p>
                     <p>House No: 41/D,  Mirpur Old Bazar,</p>
                     <p>Dhaka, Bangladesh.</p>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links social">
                  <h2>Social Links</h2>
                  <div className="icons">
                     <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                     <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                     <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                     <a href="https://www.behance.net" target="_blank" rel="noreferrer"><FaBehance/></a>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links social">
                  <h2>Pay With</h2>
                  <div className="payment-icon">
                     
                  </div>
               </div>
            </Col>
         </Row>
    </Container>
    </section>
  )
}

export default Footer
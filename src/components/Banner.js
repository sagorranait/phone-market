import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/banner.png'
import '../styles/Banner.css';

function Banner() {
  return (
    <section className='banner-area'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
               <div className="content">
                  <h1>buy smart <br /> sell smart</h1>
                  <p>Giving new life to used smartphones & other devices.</p>
                  <Link to="/" className='phoneMarket-btn'>Book Now</Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
               <div className="image">
                  <img src={BannerImg} alt="Banner" />
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Banner
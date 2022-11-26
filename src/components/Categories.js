import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

function Categories() {
  return (
    <section className='categories-area'>
      <Container>
         <h2>Popular Categories</h2>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/Silss4.samsung.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/SilayC.OnePlus.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/Sil7Hq.iPhone.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/SilIOp.Realme.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Categories
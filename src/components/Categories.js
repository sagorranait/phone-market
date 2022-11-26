import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

function Categories() {
  return (
    <section className='categories-area'>
      <Container>
         <h2>Categories</h2>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/category/638176352841511b9346922f'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/Silss4.samsung.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/category/638176632841511b93469230'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/SilayC.OnePlus.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/category/6381768c2841511b93469232'} className='image'>
                     <img src={'https://i.im.ge/2022/11/26/Sil7Hq.iPhone.png'} alt="samsung" />
                  </Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className='category'>
                  <Link to={'/category/638176a32841511b93469233'} className='image'>
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
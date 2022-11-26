import { Col, Container, Row } from 'react-bootstrap'
import AppBuy from '../assets/buy-new.png';
import GooglePlay from '../assets/googleplay.png';
import AppStore from '../assets/appstore.png';
import '../styles/AppDownload.css';

const AppDownload = () => {
  return (
    <section className='appDownload-area'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
              <img src={AppBuy} alt="AppBuy" />
            </Col>
            <Col sm={12} md={6} lg={8} xl={8} xxl={8}>
              <div className='content'>
                <h2>Enjoy mobile shopping with our Createx <br /> Store App!</h2>
                <img src={GooglePlay} alt="GooglePlay" />
                <img src={AppStore} alt="AppStore" />
              </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default AppDownload
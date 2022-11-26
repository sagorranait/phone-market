import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Advertised.css'
import ProductItem from './ProductItem'

function Advertised() {
   
  return (
    <section className='advertised-area'>
      <Container>
         <h2>Advertisement</h2>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <ProductItem/>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>asdfaf</Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>adfasdf</Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>asdfasdf</Col>
         </Row>
      </Container>
    </section>
  )
}

export default Advertised
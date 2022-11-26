import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Advertised.css'
import ProductItem from './ProductItem'

function Advertised() {
   
  return (
    <section className='advertised-area'>
      <Container>
         <h2>Advertisement</h2>
         <Row>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
               <ProductItem/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
               <ProductItem/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
               <ProductItem/>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Advertised
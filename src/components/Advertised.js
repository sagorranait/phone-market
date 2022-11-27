import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Advertised.css'
import Loading from './Loading'
import ProductItem from './ProductItem'

function Advertised({loading, products}) {
   
  return (
    <section className='advertised-area'>
      <Container>
         <h2>Advertisement</h2>
         {loading ? <Loading/> : 
         <Row className={`${products.length === 1 || products.length === 2 ? 'justify-content-center' : ''}`}>
            {products?.map(product => <Col key={product._id} sm={12} md={6} lg={4} xl={4} xxl={4}>
               <ProductItem product={product}/>
            </Col>)}
            
         </Row>
         }
      </Container>
    </section>
  )
}

export default Advertised
import { Col, Row } from "react-bootstrap"
import ProductItem from "./ProductItem"

function Category() {
  return (
    <div className='category'>
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
    </div>
  )
}

export default Category
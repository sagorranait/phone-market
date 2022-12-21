import { Col, Row } from "react-bootstrap"
import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem"

function Category() {
const products = useLoaderData();

console.log(products.length < 3 ? 'ami': 'tomi');

  return (
    <div className='category'>
         <Row style={{justifyContent: products.length < 3 && 'center'}}>
            { products.map(product=> <Col key={product._id} sm={12} md={6} lg={4} xl={4} xxl={4}>
               <ProductItem product={product}/>
            </Col>) }
         </Row>
    </div>
  )
}

export async function getProductById({params}) {
   const response = await fetch('https://phonemarket-server-app.vercel.app/category/product/' + params.id);
   if (!response.ok) {
     throw new Error('Failed to fetch post.');
   }
   return response.json();
 }

export default Category
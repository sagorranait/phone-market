import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import '../styles/Category.css';

const Category = () => {
   usePageTitle('Categories');
  return (
    <section id='category'>
         <Container>
            <Row>
               <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className='sidebar-menu'>
                     <div className="nav-items">
                     <NavLink 
                        to='/category/638176352841511b9346922f' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        SAMSUNG
                     </NavLink>
                     <NavLink 
                        to='/category/638176632841511b93469230' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        OnePlus
                     </NavLink>
                     <NavLink 
                        to='/category/6381768c2841511b93469232' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        iPhone
                     </NavLink>
                     <NavLink 
                        to='/category/638176a32841511b93469233' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        Realme
                     </NavLink>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className="main-area">
                     <Outlet/>
                  </div>
               </Col>
            </Row>
         </Container>
    </section>
  )
}

export default Category
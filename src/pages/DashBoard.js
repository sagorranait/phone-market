import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { StateContext } from '../StateProvider';
import { 
   BiShoppingBag, 
   BiAngry, 
   BiCalendarPlus,
   BiCart
} from "react-icons/bi";
import { BsPeople, BsFillPeopleFill } from "react-icons/bs";
import '../styles/DashBoard.css';
import usePageTitle from '../hooks/usePageTitle';

const DashBoard = () => {
   usePageTitle('DashBoard');
  const { currentUser } = useContext(StateContext);

  return (
    <section id='dashboard'>
         <Container>
            <Row>
               <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className='sidebar-menu'>
                     <div className="nav-items">
                     {currentUser?.status === "seller" ? 
                        <>
                              <NavLink 
                                 to='/dashboard/seller/products' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BiShoppingBag /> My Products
                              </NavLink>
                              <NavLink 
                                 to='/dashboard/seller/addProduct' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BiCalendarPlus /> Add New Product
                              </NavLink>
                        </> 
                     : null }
                     {currentUser?.status === "buyer" ? 
                        <>
                              <NavLink 
                                 to='/dashboard/buyer/orders' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BiCart /> My Orders
                              </NavLink>
                              <NavLink 
                                 to='/dashboard/buyer/reporte' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BiAngry /> My Reportes
                              </NavLink>
                        </> 
                     : null }
                     {currentUser?.status === "admin" ? 
                        <>
                              <NavLink 
                                 to='/dashboard/admin/allSellers' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BsPeople /> All Sellers
                              </NavLink>
                              <NavLink 
                                 to='/dashboard/admin/allBuyers' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BsFillPeopleFill /> All Buyers
                              </NavLink>
                              <NavLink 
                                 to='/dashboard/admin/allReportes' 
                                 className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                              >
                                 <BiAngry /> All Reportes
                              </NavLink>
                        </> 
                     : null }
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

export default DashBoard
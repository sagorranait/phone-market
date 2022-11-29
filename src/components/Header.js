import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateProvider';
import { FaBars } from "react-icons/fa";
import toast from 'react-hot-toast';
import Logo from "../assets/logo.png"
import '../styles/Header.css';

function Header() {
  const { user, setUser, logOut, currentUser } = useContext(StateContext);
  let location = useLocation();
  const navigate = useNavigate();

  const userLogOut = () => {
      logOut()
      .then(()=>{
         setUser(null);
         navigate('/login');
      })
      .catch(error => {
         const errorMessage = error.message;
         toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
  }

  return (
   <Navbar expand="lg" bg="dark">
      <Container>
         <Link to='/' className='d-flex align-items-center text-decoration-none'>
            <img
              src={Logo}
              className="d-inline-block align-top navbar-logo"
              alt="phone-market"
            />
         </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><FaBars/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
               to='/' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               end
            >
               Home
            </NavLink>
            <NavLink 
               to='/blogs' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
            >
               Blog
            </NavLink>
            {user?.email && 
               <NavLink 
                  to={`${currentUser?.status === "seller" ? '/dashboard/seller/products' : currentUser?.status === "buyer" ? '/dashboard/buyer/orders' : currentUser?.status === "admin" ? '/dashboard/admin/allSellers' : '/dashboard'}`}
                  className={`nav-link ${({ isActive }) => isActive ? "active" : ""} 
                  ${
                     (location.pathname === '/dashboard/seller/products') || 
                     (location.pathname === '/dashboard/seller/addProduct') || 
                     (location.pathname === '/dashboard/buyer/orders') || 
                     (location.pathname === '/dashboard/buyer/reporte') ||
                     (location.pathname === '/dashboard/admin/allSellers') ||
                     (location.pathname === '/dashboard/admin/allBuyers') || 
                     (location.pathname === '/dashboard/admin/allReportes')
                     ? 'active': ''}` }
               >
                  Dashboard
               </NavLink>
            }
          </Nav>
        <div className='nav-user navbar-nav'>
            {
               user?.email || user?.displayName ? 
               <Link className='nav-link phoneMarket-btn' to='/' onClick={userLogOut}>Sign Out</Link>
               : <Link className='nav-link phoneMarket-btn' to='/login'>Login</Link>
            }
        </div>
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header
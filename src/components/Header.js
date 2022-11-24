import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { StateContext } from '../StateProvider';
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png"
import '../styles/Header.css';

function Header() {
  const {user} = useContext(StateContext);

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
          </Nav>
        <div className='nav-user navbar-nav'>
            {
               user?.email || user?.displayName ? 
                  <Link className='nav-link profile' to='/profile'>
                     <div className='user-pic'>
                        <img src={user?.photoURL} alt="user" />
                     </div>
                  </Link>
               : <Link className='nav-link phoneMarket-btn' to='/login'>Login</Link>
            }
        </div>
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header
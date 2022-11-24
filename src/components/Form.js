import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleProvider } from '../firebase.config';
import { StateContext } from '../StateProvider';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import '../styles/Form.css'

const Form = ({title, description, toastMessage, children}) => {
   const {setUser, providerLogin} = useContext(StateContext);
  let navigate = useNavigate();

   const singupWithGoogleHandler = () => {
      providerLogin(GoogleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        toast.success(toastMessage);
        navigate('/');
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
   }

  return (
   <section id='signInArea'>
   <Container>
     <Row>
       <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
         <div className="signin-inputs">
           <h2>{title}</h2>
           <div className="user-platform">
             <button onClick={singupWithGoogleHandler} className='phoneMarket-btn'><FaGoogle/> Continue with Google</button>
             <h4>Or sign in with</h4>
           </div>
           <p>{description}</p>
           {children}
         </div>
       </Col>
     </Row>
   </Container>
 </section>
  )
}

export default Form
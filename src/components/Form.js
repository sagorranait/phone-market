import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleProvider } from '../firebase.config';
import { StateContext } from '../StateProvider';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import '../styles/Form.css'

const Form = ({title, description, toastMessage, children}) => {
  const {providerLogin} = useContext(StateContext);
  let navigate = useNavigate();

   const singupWithGoogleHandler = () => {
      providerLogin(GoogleProvider)
      .then((result) => {
        // The signed-in user info.
        const newUser = result.user;
        const providerUser = {
          displayName: newUser.displayName,
          photoUrl: newUser.photoURL,   
          email: newUser.email,
          number: '01812354689',
          location: 'Dhaka',
          status: 'buyer',
          verified: false
        };

        fetch(`http://localhost:5000/addUser/${newUser.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(providerUser)
        })
        .then(res => res.json())
        .then(data => {
            toast.success(toastMessage);
            navigate('/');
        });

         // Set the JWT
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
              email: newUser.email
          })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('access-token', data.token);            
        });
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
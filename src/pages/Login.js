import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateProvider';
import Form from '../components/Form';
import toast from 'react-hot-toast';

const Login = () => {
  const { login, setLoading } = useContext(StateContext);
  const [logging, setLogging] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/"; 

  const loginHandler = (e) => {
    e.preventDefault();
    setLogging(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
    .then((result) => {
      const user = result.user;
      setLogging(false);
      toast.success('Successfully Login.');

      // Set the JWT
      fetch('https://phonemarket-server-app.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email
        })
      })
      .then(res => res.json())
      .then(data => {
          localStorage.setItem('access-token', data.token);
          navigate(from, { replace: true });
      });

      
      e.target.reset();
    })
    .catch((error) => {
      setLogging(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    })
    .finally(()=>{
      setLoading(false);
    });
  }

  return (
    <Form 
      title="Hey, Welcome Back !!!" 
      description="Use the email and password you chose when registering to your account."
      toastMessage="Sign-In Successfully."
    >
      <form className='user-form' onSubmit={loginHandler}>
        <input type="email" name="email" id="emailInput" placeholder='Email' required />
        <input type="password" name="password" id="passwordInput" placeholder='Password' required />
        <button type="submit" className='phoneMarket-btn'>{logging ? 'Logging...' : 'Login'}</button>
        <p>Don’t have an account? <Link to='/register'>Create an account</Link></p>
      </form>
    </Form>
  )
}

export default Login
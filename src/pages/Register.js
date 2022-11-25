import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateProvider';
import toast from 'react-hot-toast';
import Form from '../components/Form';

const Register = () => {
  const {register, updateUserProfile, logOut} = useContext(StateContext);
  let navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const signUpHandler = (event) => {
    event.preventDefault();
    const formData = event.target;
    setSubmitting(true);

    const name = formData.name.value;
    const photoUrl = formData.photoUrl.value;
    const email = formData.email.value;
    const password = formData.password.value;

    if (name.length < 3) {
      toast.error("Name is too short!");
    }

    if (password.length < 5) {
      toast.error("Password is too short!");
    }

    register(email, password)
    .then(() => {
      logOut()
        .then(()=>{
          toast.success('Successfully account created.');
          setSubmitting(false);
          navigate('/login');
        });
      updateUserProfile({displayName: name, photoURL: photoUrl})
      .then(()=>{
        setSubmitting(false);
      })
      .catch(error => {
        setSubmitting(false);
        const errorMessage = error.message;
        toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
    })
    .catch((error) => {
      setSubmitting(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  return (
    <Form 
      title="Create an Account" 
      description="Even though registration just takes a few seconds, it provides you complete control over your purchase."
      toastMessage="Sign-Up Successfully."
    >
      <form className='user-form' onSubmit={signUpHandler}>
        <input type="text" name="name" id="nameInput" placeholder='Name' />
        <input type="url" name="photoUrl" id="urlInput" placeholder='Photo URL' required />
        <input type="email" name="email" id="emailInput" placeholder='Email' required />
        <input type="password" name="password" id="passwordInput" placeholder='Password' required />
        <div className='select-input'>
          <select name="type" id="selectInput">
            <option value="buyer">Customer</option>
            <option value="seller">Become a Seller</option>
          </select>
        </div>
        <button type="submit" className='phoneMarket-btn'>{submitting ? 'Registering...' : 'Register'}</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </Form>
  )
}

export default Register
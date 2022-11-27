import axios from 'axios';
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
    const number = formData.number.value;
    const location = formData.location.value;
    const status = formData.status.value;

    if (name.length < 3) {
      toast.error("Name is too short!");
    }

    if (password.length < 5) {
      toast.error("Password is too short!");
    }

    const newUser = { name, photoUrl, email, number, location, status}

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
        axios.post('http://localhost:5000/addUser', newUser)
        .then((response) => {
          setSubmitting(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error);
        });
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
        <input type="text" name="name" id="nameInput" placeholder='Name' required />
        <input type="url" name="photoUrl" id="urlInput" placeholder='Photo URL' required />
        <input type="email" name="email" id="emailInput" placeholder='Email' required />
        <input type="password" name="password" id="passwordInput" placeholder='Password' required />
        <input type="number" name="number" id="numberInput" placeholder='Phone Number' required />
        <div className='select-input'>
          <select name="location" id="selectInput">
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="khulna">Khulna</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="rangpur">Rangpur</option>
            <option value="sylhet">Sylhet</option>
            <option value="barisal">Barisal</option>
          </select>
        </div>
        <div className='select-input'>
          <select name="status" id="selectInput2">
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
import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { StateContext } from '../StateProvider';
import toast from 'react-hot-toast';
import '../styles/Profile.css';

function Profile() {
  const { user, updateUserProfile } = useContext(StateContext);
  const [updating, setUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(
    { 
      displayName: user?.displayName || '', 
      photoURL: user?.photoURL || '', 
    }
  );

  const handleChange = (e) => {
    setUpdatedUser((pre)=>{ return {...pre, [e.target.name] : e.target.value} });
	}

  const profileUpdateHandler = (e) => {
    e.preventDefault();
    
    setUpdating(true);
    updateUserProfile(updatedUser)
    .then(() => {
      setUpdating(false);
      toast.success('Profile Updated Successfully.');
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  return (
    <div className='signin-area student-profile'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="signin-inputs profile-input">
              <p>You can update you profile information here.</p>
              <form className='user-form user-profile' onSubmit={profileUpdateHandler}>
                <input type="text" name="displayName" id="profileNameInput" placeholder='Name' value={user?.displayName} onChange={handleChange} />
                <input type="url" name="photoURL" id="profileUrlInput" placeholder='Photo URL' value={user?.photoURL} onChange={handleChange} className="mt-3" />
                <button type="submit" className='phoneMarket-btn'>{updating ? 'Updating...' : 'Updated Profile'}</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
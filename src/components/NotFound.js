import '../styles/NotFound.css'
import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div id="notfound-page">
        <Container>
            <div class="notfound-content">
                <img src='../images/not-found.png' alt='Not-Found' />
                <p>Oops!, An Unexpected Error Occurred.</p>
                <p>Error Message : <i>{error.statusText || error.message}</i></p>
                <Link to={'/'}>Back to Home Page</Link>
            </div>
        </Container>
    </div>
  )
}

export default NotFound
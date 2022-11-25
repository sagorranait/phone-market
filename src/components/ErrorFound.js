import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import errorFound from "../assets/errorFound.png";
import '../styles/ErrorFound.css'

const ErrorFound = () => {
  const error = useRouteError();

  return (
    <div id="errorFound-page">
        <Container>
            <div className="errorFound-content">
                <img src={errorFound} alt='Error-Found' />
                <p>Oops!, An Unexpected Error Occurred.</p>
                <p>Error Message : <i>{error.statusText || error.message}</i></p>
                <Link to={'/'} className="phoneMarket-btn">Go Back</Link>
            </div>
        </Container>
    </div>
  )
}

export default ErrorFound
import '../components/CSS/notFoundPage.css'
import { NavLink } from 'react-router-dom';
import {FaExclamationTriangle} from 'react-icons/fa'

function NotFoundPage(){
    return(
        <div className="not-found-container">
         <FaExclamationTriangle className='fas fa-exclamation-triangle'></FaExclamationTriangle>
         <h1>404 not found</h1>
         <p>This page does not exist!</p>
         <NavLink to={""} className='btnBack'><i className='fas fa-arrow-left'></i>Back Home</NavLink>

        </div>
    )
}

export default NotFoundPage;
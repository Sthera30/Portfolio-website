import '../../node_modules/fontawesome-free-5.15.2-web/css/all.min.css'
import '../components/CSS/notFoundPage.css'
import { NavLink } from 'react-router-dom';

function NotFoundPage(){
    return(
        <div className="not-found-container">
         <i className='fas fa-exclamation-triangle'></i>
         <h1>404 not found</h1>
         <p>This page does not exist!</p>
         <NavLink to={""} className='btnBack'><i className='fas fa-arrow-left'></i>Back Home</NavLink>

        </div>
    )
}

export default NotFoundPage;
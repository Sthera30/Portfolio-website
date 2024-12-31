import {PacmanLoader} from 'react-spinners'
import './CSS/spinner.css'

function Spinner({loading}){
    return(
        <>
       <div className='spinner-container'>
       <PacmanLoader size={100} color='yellow' loading={loading}  />
        </div> 
        </>
    )
}

export default Spinner;
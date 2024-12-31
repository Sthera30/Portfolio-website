import React, { useEffect } from 'react'
import img1 from '../assets/Screenshot 2024-12-21 at 23.43.44.png'
import img2 from '../assets/Screenshot 2024-12-21 at 23.31.01.png'
import './CSS/certification.css'

function Certification() {


    useEffect(() => {

        window.scrollTo(0, 0)

    },[])


    return (
        <>

            <div className='certification-heading'>

                <h2>CERTIFICATION</h2>

            </div>

            <div className='certification-container'>

                <div className='certification-left'>

                    <img src={img1} alt="" />

                </div>

                <div className='certification-right'>

                    <img src={img2} alt="" />

                </div>

            </div>

        </>
    )
}

export default Certification

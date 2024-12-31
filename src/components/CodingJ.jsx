import React, { useEffect } from 'react'
import './CSS/coding.css'
import Img1 from '../assets/Screenshot 2024-12-21 at 22.30.21.png'

function CodingJ() {


    useEffect(() => {

        window.scrollTo(0, 0)

    },[])

    return (

        <>


                <div className="coding-sub" style={{marginTop: '12rem', marginBottom: '7rem'}}>

                    <h1 >CODING</h1>

                </div>


            <div className='coding-container_'>

                <div className='coding-container-left'>

                    <img src={Img1} alt="" />

                </div>

                <div className='coding-container-right'>


                    <h3>Programming</h3>
                    <p>I am a geek. I love coding. I love everything about it. I spend five to ten hours a day in front of a computer screen as I am coding and debugging. I really love coding, i can't see myself doing anything besides coding. Being able to debug and find solution to the problem it's just the best feeling in the world!</p>

                </div>


            </div>

        </>

    )
}

export default CodingJ

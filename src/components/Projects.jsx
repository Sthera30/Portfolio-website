import "./CSS/portfolio.css";
import { useState, useEffect } from "react";
import Img1 from '../assets/IMG_20241209_185936_edit_7640484499874.jpg'
import Img2 from '../assets/IMG_20241209_185327_edit_7300964698364.jpg'
import Img3 from '../assets/IMG_20241227_172836_edit_23897667356769.jpg'
import Img4 from '../assets/IMG_20241228_171859_edit_99851720529033.jpg'
import { Trophy } from 'lucide-react'

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/projects.json`);

        if (!res.ok) {
          throw new Error("Could not fetch the data!");
        }
        const data = await res.json();
        setPortfolio(data.projects);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])

  return (
    <>

      <div className="projects-burner-">



        <div className="burner-inner" style={{ marginTop: '12rem', marginBottom: '2rem', color: '#fff' }}>

          <h3>PORTFOLIO PROJECTS</h3>
          <p>Professional Work</p>


        </div>


        <div className="project-container">


          <div className="project-box">


            <a href="https://kwanosportsclub.co.za">

              <img src={Img2} alt="" />

            </a>

            <div className="web-desc">

              <span>Kwano Sports Club</span>

            </div>

            <div className="pro-desc">

              <span><Trophy style={{ color: 'gold', marginTop: '1.5rem' }} /></span>
              <span>Client Project</span>
            </div>

            <div className="content">

              <h2>Full-Stack Tennis Club Website</h2>
              <p style={{maxWidth: '55rem', lineHeight: '1.4'}}>A full-stack application designed for clients aiming to secure funding for building tennis courts and encourage donations of tennis equipment,such as rackets and balls. The site is also used to attract potential players online. The platform is built with React.js on the frontend and Node.js with MySql on the backend. The platform offers a user-friendly interface to connect supporters with the cause.</p>

              <h5>Technologies:</h5>
              <h5>Frontend:</h5>
              <p>- React.js</p>
              <p>- React Router for navigation</p>
              <h5>Backend:</h5>
              <p>- Node.js</p>
              <p>- Express.js</p>
              <p>- JWT for authentication</p>
              <p>- MySql</p>
              <h5>Security Features:</h5>
              <p>- Protected API endpoints</p>
              <p>- Token-based authentication</p>

            </div>


          </div>


        </div>


        <div className="project-heading" style={{marginBottom: '5rem'}}>

          <h2>INTERNSHIP AT PRODIGY INFO TECH <br /><br /> <span>1 month</span></h2>

        </div>

        <div className="project-container">


          <div className="project-box">


            <a href="https://fullstack-ordering-food-app-frontend.vercel.app" target="_blank" rel="noopener noreferrer">

              <img src={Img1} alt="" />


            </a>



            <div className="content">

              <h2>Full-Stack E-commerce Website</h2>
              <p>A Full-Stack food ordering platform that enables users to explore and order from a diverse menu. </p>
              <h4>Key Features:</h4>
              <p>- Responsive product catalog with search and filtering</p>
              <p>- Secure user authentication using JWT (JSON Web Tokens)</p>
              <p>- Shopping cart functionality</p>
              <p>- Integrated Payfast payment gateway for secure transactions (Sandbox)</p>
              <p>- Order tracking system</p>
              <p>- Protected admin dashboard</p>
              <h5>Technologies:</h5>
              <h5>Frontend:</h5>
              <p>- React.js</p>
              <p>- React Router for navigation</p>
              <h5>Backend:</h5>
              <p>- Node.js</p>
              <p>- Express.js</p>
              <p>- JWT for authentication</p>
              <p>- Payfast Sandbox for payment processing</p>
              <p>- MongoDB</p>
              <h5>Security Features:</h5>
              <p>- Protected API endpoints</p>
              <p>- Token-based authentication</p>
              <p>- Secure payment processing</p>
            </div>

          </div>

          <div className="project-box">


            <a href="https://prodigy-fs-02-frontend-tau.vercel.app" target="_blank" rel="noopener noreferrer">

              <img src={Img3} alt="" />


            </a>



            <div className="content">

              <h2>Full-Stack Employee Management System</h2>
              <p>During my one-month internship, i developed a Full-Stack application that enables administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records. The project emphasized data security, requiring robust validation and authentication mechanisms to safeguard sensitive employee information.. </p>
              <h4>Key Features Include:</h4>
              <p style={{ fontWeight: 800 }}>- Authontication and Authorization: <span style={{ fontWeight: 300 }}>Implemented user authentication using JSON Web Tokens (JWT) to ensure secure access controll</span></p>
              <p style={{ fontWeight: 800 }}>- Data Protection: <span style={{ fontWeight: 300 }}>Used bcrypt to hash user passwords, enchancing the security of stored credentials.</span></p>
              <p style={{ fontWeight: 800 }}>- Validation: <span style={{ fontWeight: 300 }}> Incorporated server side and client side validation to prevent invalid or malicious data entries</span> </p>
              <p style={{ fontWeight: 800 }}>- Responsive Design: <span style={{ fontWeight: 300 }}>Created a user friendly interface with responsive layouts for seamless use across devices.</span></p>
              <p style={{ fontWeight: 800 }}>- Technology Stack: <span style={{ fontWeight: 300 }}>Leveraged Technologies such as Node js, Express js, Mongo DB and React js to build a scalable and efficient application</span></p>
            </div>

          </div>

          <div className="project-box">


            <a href="https://prodigy-fs-01-frontend.vercel.app" target="_blank" rel="noopener noreferrer">

              <img src={Img4} alt="" />

            </a>



            <div className="content">

              <h2>User Authentication System</h2>
              <p>I developed a secure and efficient user authentication system as part of my one-month internship. The system allows users to register, log in, and access protected routes, ensuring a seamless and secure user experience</p>
              <h4>Key Features Include:</h4>
              <p style={{ fontWeight: 800 }}>- User Registration and Login: <span style={{ fontWeight: 300 }}>Users can create accounts and log in with their credentials securely</span></p>
              <p style={{ fontWeight: 800 }}>- Secure Authentication: <span style={{ fontWeight: 300 }}>Implemented secure authentication using bcrypt for password hashing to protect user credentials</span></p>
              <p style={{ fontWeight: 800 }}>- JWT (JSON Web Token) Implementation: <span style={{ fontWeight: 300 }}> Used JWT to manage user sessions and authenticate access to protected routes</span> </p>
              <p style={{ fontWeight: 800 }}>- Responsive Design: <span style={{ fontWeight: 300 }}>Ensured a user-friendly interface across devices.</span></p>
              <h2 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Technology Stack:</h2>
              <p style={{ fontWeight: 800 }}>- Backend: <span style={{ fontWeight: 300 }}>Node js, Express js.</span></p>
              <p style={{ fontWeight: 800 }}>- Authentication: <span style={{ fontWeight: 300 }}>bcrypt, JWT.</span></p>
              <p style={{ fontWeight: 800 }}>- Database: <span style={{ fontWeight: 300 }}>MongoDB</span></p>
              <p style={{ fontWeight: 800 }}>- Frontend: <span style={{ fontWeight: 300 }}>React js</span></p>
              <p style={{ fontWeight: 800 }}>- Tools: <span style={{ fontWeight: 300 }}>Thunder Client For API Testing</span></p>



            </div>

          </div>

        </div>


      </div>


    </>
  );
}

export default Portfolio;

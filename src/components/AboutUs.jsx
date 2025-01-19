import "./CSS/about.css";
import { useState, useEffect } from "react";
import Img1 from '../assets/Screenshot_20241112_183957_com.lenovo.anyshare.gps_edit_527060553818535.jpg'

function AboutUs() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const res = await fetch(`/about.json`);
        if (!res.ok) {
          throw new Error("Could not find the data!");
        }
        const data = await res.json();
        setAbout(data.about);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAboutData();
  }, []);


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])

  return (
    <>

      <div className="about-burner-container">

        <div className="about-sub">

          <h1>ABOUT ME</h1>

        </div>

        <div className="about-container container">
          <div className="about-image">

            <p>Javascript(Node Js)</p>
            <div className="node">
              <div className="fill_node"></div>
            </div>


            <p>React js</p>
            <div className="node">
              <div className="react_fill"></div>
            </div>


            <p>HTML</p>
            <div className="node">
              <div className="fill_html"></div>
            </div>


            <p>CSS</p>
            <div className="node">
              <div className="fill_css"></div>
            </div>


            <p>Mongo DB</p>
            <div className="node">
              <div className="fill_mongo"></div>
            </div>


            <p>SQL Server</p>
            <div className="node">
              <div className="fill_server"></div>
            </div>


            <p>Bootstrap</p>
            <div className="node">
              <div className="fill_bootsrap"></div>
            </div>

            
            <p>GitHub</p>
            <div className="node">
              <div className="fill_github"></div>
            </div>


          </div>
          <div className="about-content">
            <h1>{about[0]?.title}</h1>
            <p>{about[0]?.aboutDescription}</p>
            <a href="/MyResume.pdf" download={"MyResume.pdf"} className="btnPortfolio">
              Download Resume
            </a>
          </div>
        </div>

      </div>


    </>
  );
}

export default AboutUs;

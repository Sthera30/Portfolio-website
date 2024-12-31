import "./CSS/hero.css";
import Image from "../assets/IMG_20201224_015300_532_edit_26387749665764.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";
import { NavLink } from "react-router-dom";
import {FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Hero() {
  const [text] = useTypewriter({
    words: ["Full-Stack-Developer", "Web Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [heroInfo, setHeroInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/hero.json`);

        if (!res.ok) {
          throw new Error("Failed to fetch data!");
        }
        const data = await res.json();
        setHeroInfo(data)
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  return (
   
    loading? (<Spinner />) : (
      <div className="hero-container container">
      <div className="hero-info">
        <h2>Hi, I'm</h2>
        <h1>Sirtembekile Tini</h1>
        <h2>
          And I'm a <span>{text}</span>
          <Cursor />
        </h2>

        <p>{heroInfo.heros[0].description}</p>

        <div className="icons" style={{display: 'flex', gap: '1rem'}}>
        <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/sirtembekile-tini-4a374721a/" target='_blank' rel='noopener noreferrer'><FaLinkedin style={{color: '#fff', background: 'blue', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem'}} /></a>
        <a style={{ textDecoration: 'none' }} href="https://wa.me/0624192299" target='_blank' rel='noopener noreferrer'><FaWhatsapp style={{color: '#fff', background: 'lime', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem'}} /></a>
          </div>
        <div className="info">

          <NavLink to={"/projects"} style={{cursor: 'pointer'}} className="btnExplore">
            EXPLORE MY WORK
          </NavLink>
          
        </div>
      </div>

      <div className="image-container">
        <img src={Image} alt="" />
      </div>
    </div>
    )

  );
}

export default Hero;

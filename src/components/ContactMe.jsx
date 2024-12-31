import "./CSS/contact.css";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'


function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "b864ad24-f1e9-4470-9ac5-068b25b9749f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);

      setResult(data.message);
    }
  };

  return (
    <>


      <div className="burner-inner" style={{ color: '#fff', fontSize: '1.1rem', marginTop: '14rem' }}>

        <h1>GET IN TOUCH</h1>

      </div>


      <div className="contact-container sec">
        <div className="contact-info">
          <h3>
            Send me a message <FaEnvelopeOpen style={{ color: 'orange' }} className="fas fa-envelope-open"></FaEnvelopeOpen>
          </h3>
          <p>
            Feel free to reach out through contact form or find my contact
            information below.
          </p>
          <p>
          <FaPhone style={{color: 'skyblue'}} className="fas fa-phone"></FaPhone>&nbsp;&nbsp;(+27) 62 419 2299
          </p>
          <p>
          <FaEnvelope  style={{color: 'orange'}}  className="fas fa-envelope"></FaEnvelope>&nbsp;&nbsp;tinisthera@gmail.com
          </p>
        </div>
        <form onSubmit={async (event) => onSubmit(event)}>
          <label htmlFor="name">Enter Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Enter Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Write your messages here</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={10}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btnSend">
            Send message
          </button>
          <br />
          <span>{result}</span>

        </form>
      </div>
    </>
  );
}

export default Contact;

//eb6025cf-c28c-4ad9-b96e-d3b44e44269c
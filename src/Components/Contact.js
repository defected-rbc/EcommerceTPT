import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="content">
          <h1>Contact Us</h1>
          <p>
            We are always here for you! Whether you have questions, need assistance, or simply want to share your feedback, our team is 
            ready to help. Reach out to us anytime, and we'll ensure you receive the support you need. Your satisfaction is our top priority,
            and we look forward to assisting you. Thank you for choosing Elegant Steps!
          </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>Mody University of Science and Technology,<br />Laxmangarh,<br />Sikar,<br />332001</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>9982123430</p>
                <p>9934567814</p>
                
                
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Email</h3>
                <p>elegantsteps@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="fullName" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
              <div className="social-links">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
    </a>
</div>
<footer>
  <p style={{fontSize:'12px'}}>
    © 2024 Elegant Steps. Feel free to reach out us at any time . 

  </p>

</footer>
<hr class="colored-line"></hr>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
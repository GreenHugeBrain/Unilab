import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="subscription-box">
          <h3>Register Now So You Don't Miss Our Programs</h3>
          <div>
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe Now</button>
          </div>
        </div>

        <div className="nav-social">
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="copyright-links">
          <p>© 2022 Monito. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../index.css";
import "./Footer.css"
import facebookImage from '../img/face-logo.png';
import twitterImage from '../img/twitter-logo.png';
import instagramImage from '../img/insta-logo.png';
import linkedinImage from '../img/link-logo.png';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com"><img src={facebookImage} alt="Facebook" /></a>
          <a href="https://x.com"><img src={twitterImage} alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src={instagramImage} alt="Instagram" /></a>
          <a href="https://www.linkedin.com"><img src={linkedinImage} alt="LinkedIn" /></a>
        </div>
        {/*<p>&copy; 2024 SerenaLab. Todos los derechos reservados.</p>*/}
      </div>
    </footer>
    
  );
};

export default Footer;

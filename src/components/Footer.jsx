import React from "react";
import "../index.css";
import "./Footer.css"
import facebookImage from '../img/Logo-Facebook(BN).png';
import twitterImage from '../img/Twitter-Logo.webp';
import instagramImage from '../img/Logo-Instagram(BN).png';
import linkedinImage from '../img/Logo - Linkedin.png';


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

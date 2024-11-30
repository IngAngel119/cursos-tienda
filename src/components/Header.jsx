import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./assets/Logo - Av1Ev1.jpg" alt="Logo" />
      </div>
      <div className="bars">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#" className="active">Inicio</a></li>
          <li><a href="portfolio.html">Portafolio</a></li>
          <li><a href="services.html">Servicios</a></li>
          <li><a href="us.html">Nosotros</a></li>
          <li><a href="contact.html">Contactos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

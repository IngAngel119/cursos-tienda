import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import homeicon from "../img/home-icon.png";
import carticon from "../img/cart-icon.png";

const Header = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchQuery(event.target.value); // Actualiza la búsqueda en el estado principal
  };

  return (
    <header>
      <div className="nav-buttons">
        <Link to="/" className="nav-button home-button">
          <img src={homeicon} alt="Home" className="icon" />
        </Link>
        <Link to="/cart" className="nav-button cart-button">
          <img src={carticon} alt="Carrito" className="icon" />
        </Link>
      </div>
      <div className="bars">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleChange}
          aria-label="Buscar productos"
        />
      </div>
    </header>
  );
};

export default Header;

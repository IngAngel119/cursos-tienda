import React, { useState } from "react";
import "../index.css";

const Header = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchQuery(event.target.value); // Actualiza la búsqueda en el estado principal
  };

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
      
      {/* Barra de búsqueda dinámica */}
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



 import React from 'react';
import './ProductContainer.css';

const ProductContainer = ({ name, description, image }) => {
  return (
    <div className="product-container">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="add-button">Añadir Curso</button>
    </div>
  );
};

export default ProductContainer;

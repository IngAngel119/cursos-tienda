import React from 'react';
import './ProductContainer.css';

const ProductContainer = ({ name, description, image, isSearchResult }) => {
  return (
    <div className={`product-container ${isSearchResult ? 'search-result' : ''}`}>
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      {!isSearchResult && <p>{description}</p>}
      <button className="add-button">+Añadir</button>
    </div>
  );
};

export default ProductContainer;


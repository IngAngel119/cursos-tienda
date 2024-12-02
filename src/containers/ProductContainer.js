import React from 'react';
import './ProductContainer.css';

const ProductContainer = ({ name, description, image, price, isSearchResult, handleAddToCart, isInCart }) => {
  return (
    <div className={`product-container ${isSearchResult ? 'search-result' : ''}`}>
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      {!isSearchResult && <p>{description}</p>}
      <p className="product-price">${price}</p>
      <button 
        className="add-button" 
        onClick={() => handleAddToCart({ name, description, image, price })}
      >
        {isInCart ? 'Eliminar' : '+Añadir'}
      </button>
    </div>
  );
};

export default ProductContainer;

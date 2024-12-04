import React, { useState } from 'react';
import './ProductContainer.css';
import ProductModal from '../components/ProductModal'; 

const ProductContainer = ({ name, description, image, price, isSearchResult, handleAddToCart, handleShowModal, isInCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModalInternal = () => {
    if (handleShowModal) {
      handleShowModal({ name, description, image, price });
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`product-container ${isSearchResult ? 'search-result' : ''}`}>
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      {!isSearchResult && <p>{description}</p>}
      <h4 className="product-price">${price}</h4>
      <button 
        className="add-button" 
        onClick={isInCart ? () => handleAddToCart({ name, description, image, price }) : handleShowModalInternal}
      >
        {isInCart ? 'Eliminar' : 'Ver Más'}
      </button>
      {showModal && (
        <ProductModal
          name={name}
          descripcionCompleta={description}
          image={image}
          price={price}
          handleAddToCart={handleAddToCart}
          handleCloseModal={handleCloseModal}
          isInCart={isInCart}
        />
      )}
    </div>
  );
};

export default ProductContainer;

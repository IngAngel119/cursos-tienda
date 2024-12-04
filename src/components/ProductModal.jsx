import React, { useEffect, useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ name, descripcionCompleta, image, price, handleAddToCart, handleRemoveFromCart, handleCloseModal, isInCart }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isInCart) {
      handleRemoveFromCart({ name, description: descripcionCompleta, image, price });
      handleCloseModal();
    } else {
      handleAddToCart({ name, description: descripcionCompleta, image, price });
      handleCloseModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isVisible ? 'animate' : ''}`}>
        <span className="close-button" onClick={handleCloseModal}>&times;</span>
        <div className={`modal-info ${isVisible ? 'animate' : ''}`}>
          <h2>{name}</h2>
          <p>{descripcionCompleta}</p>
        </div>
        <div className={`modal-image-container ${isVisible ? 'animate' : ''}`}>
          <img src={image} alt={name} />
          <p className="price">Precio: ${price}</p>
          <button 
            className="add-button" 
            onClick={handleClick}
          >
            {isInCart ? 'Eliminar del Carrito' : 'Añadir al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

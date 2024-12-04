import React, { useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ name, descripcionCompleta, image, price, handleAddToCart, handleRemoveFromCart, handleCloseModal, isInCart }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.modal-content').classList.add('animate');
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
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseModal}>&times;</span>
        <div className="modal-info">
          <h2>{name}</h2>
          {descripcionCompleta.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="modal-image-container">
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


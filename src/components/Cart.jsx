import React from "react";
import ProductContainer from "../containers/ProductContainer";
import "./Cart.css"

const Cart = ({ cartItems, handleRemoveFromCart, handleCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <ProductContainer
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                isSearchResult={true}
                handleAddToCart={handleRemoveFromCart}
                isInCart={true}
              />
            ))}
          </div>
          <div className="cart-total">
            <h2>Total de Compra: ${total.toFixed(2)}</h2>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Cart;



import React from "react";
import ProductContainer from "../containers/ProductContainer";
import "../index.css";

const SearchResults = ({ results, handleAddToCart }) => {
  return (
    <div className="search-results-container">
      {results.length > 0 ? (
        results.map((course, index) => (
          <ProductContainer
            key={index}
            name={course.name}
            description={course.description}
            image={course.image || require("../img/default.webp")} 
            price={course.price}
            isSearchResult={true}
            handleAddToCart={handleAddToCart}
          />
        ))
      ) : (
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
};

export default SearchResults;






import React from "react";
import ProductContainer from "../containers/ProductContainer";

const Products = ({ courses, handleAddToCart }) => (
  <>
    <div className="page-title">
      <h1 className="animated-title">Todos los Productos</h1>
    </div>
    <div className="product-list">
      {courses.map((course, index) => (
        <ProductContainer
          key={index}
          name={course.name}
          description={course.description}
          image={course.image}
          price={course.price}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  </>
);

export default Products;

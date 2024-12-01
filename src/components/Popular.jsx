import React from "react";
import ProductContainer from "../containers/ProductContainer";

const Popular = ({ courses, handleAddToCart }) => (
  <>
    <div className="page-title">
      <h1 className="animated-title">+ Populares</h1>
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

export default Popular;
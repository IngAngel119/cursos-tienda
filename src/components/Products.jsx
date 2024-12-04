import React from "react";
import { useInView } from "react-intersection-observer";
import ProductContainer from "../containers/ProductContainer";
import "./Products.css";

const Products = ({ courses, handleAddToCart, loadMoreCourses, hasMore, handleShowModal }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`product-section ${inView ? "animate" : ""}`}>
      <div className="page-title">
        <h1 className="animated-title">Todos los Productos</h1>
      </div>
      <div className="product-list">
        {courses.map((course, index) => (
          <ProductContainer
            key={index}
            name={course.name}
            description={course.description}
            descripcionCompleta={course.descripcionCompleta} 
            image={course.image}
            price={course.price}
            handleAddToCart={handleAddToCart}
            handleShowModal={() => handleShowModal(course)} 
          />
        ))}
      </div>
      {hasMore && (
        <div className="load-more">
          <button onClick={loadMoreCourses} className="load-more-button">
            Cargar Más
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
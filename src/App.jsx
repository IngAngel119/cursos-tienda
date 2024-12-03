import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cite from "./components/Cite";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import Products from "./components/Products";
import SearchResults from "./components/SearchResults";
import Cart from "./components/Cart";
import Notification from "./components/Notification";
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [notification, setNotification] = useState("");
  const [visibleCourses, setVisibleCourses] = useState(4);

  const courses = [
    { 
      name: "Curso Java", 
      description: "Aprende Java desde los fundamentos.", 
      image: require("./img/java.webp"), 
      price: 150 
    },
    { 
      name: "Curso Python", 
      description: "Domina Python, uno de los lenguajes más populares.", 
      image: require("./img/python.jpg"), 
      price: 120 
    },
    { 
      name: "Curso C#", 
      description: "Conviértete en un experto en C#.", 
      image: require("./img/csharp.jpg"), 
      price: 200 
    },
    { 
      name: "Curso SwiftUI", 
      description: "Desarrolla aplicaciones iOS elegantes.", 
      image: require("./img/swiftui.jpeg.avif"), 
      price: 220 
    },
    { 
      name: "Curso Ruby", 
      description: "Aprende Ruby on Rails.", 
      image: require("./img/ruby-on-rails.jpg"), 
      price: 180 
    },
    { 
      name: "Curso de React.js", 
      description: "Domina React.js.", 
      image: require("./img/react.png"), 
      price: 160 
    },
    { 
      name: "Curso de Node.js", 
      description: "Conviértete en un experto en Node.js.", 
      image: require("./img/node.png"), 
      price: 175 
    },
    { 
      name: "Curso de Angular", 
      description: "Aprende Angular.", 
      image: require("./img/angular.jpg"), 
      price: 190 
    }
  ];

  const popular_courses = courses.slice(0, 4);

  useEffect(() => {
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (course) => {
    if (!cartItems.some((item) => item.name === course.name)) {
      setCartItems([...cartItems, course]);
      showNotification(`Añadido: ${course.name}`);
    } else {
      showNotification(`Curso ya añadido: ${course.name}`);
    }
  };

  const handleRemoveFromCart = (course) => {
    setCartItems(cartItems.filter((item) => item.name !== course.name));
    showNotification(`Eliminado: ${course.name}`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleLoadMore = () => {
    setVisibleCourses((prevVisible) => prevVisible + 4);
  };

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      {notification && <Notification message={notification} />}
      <div className="search-results-wrapper">
        {searchQuery && (
          <SearchResults results={searchResults} handleAddToCart={handleAddToCart} />
        )}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Popular courses={popular_courses} handleAddToCart={handleAddToCart} />
              <Hero />
              <Products
                courses={courses.slice(0, visibleCourses)}
                handleAddToCart={handleAddToCart}
                loadMoreCourses={handleLoadMore}
                hasMore={visibleCourses < courses.length} 
              />
              <Cite />
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

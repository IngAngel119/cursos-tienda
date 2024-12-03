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

  const courses = [
    {
      name: "Curso Java",
      description: "Aprende Java desde los fundamentos hasta aplicaciones avanzadas.",
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
      description: "Conviértete en un experto en C# y desarrolla aplicaciones de alto rendimiento.",
      image: require("./img/csharp.jpg"),
      price: 200
    },
    {
      name: "Curso SwiftUI",
      description: "Desarrolla aplicaciones iOS elegantes y efectivas.",
      image: require("./img/swiftui.jpeg.avif"),
      price: 220
    }
    // Mas Cursos Proximamente
  ];

  const popular_courses = [
    courses[0], 
    courses[1], 
    courses[2], 
    courses[3]
  ]

  useEffect(() => {
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  }, [searchQuery, courses]); 

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (course) => {
    if (!cartItems.some(item => item.name === course.name)) {
      setCartItems([...cartItems, course]);
      showNotification(`Añadido: ${course.name}`);
    }
    else{
      showNotification(`Curso ya añadido: ${course.name}`);
    }
  };

  const handleRemoveFromCart = (course) => {
    setCartItems(cartItems.filter(item => item.name !== course.name));
    showNotification(`Eliminado: ${course.name}`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000); 
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
              <Products courses={courses} handleAddToCart={handleAddToCart} />
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
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Cite from "./components/Cite";
import Footer from "./components/Footer";
import Popular from "./components/Popular"; 
import SearchResults from "./components/SearchResults"; 
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 

  const courses = [
    {
      name: "Curso Java",
      description: "Aprende Java desde los fundamentos hasta aplicaciones avanzadas.",
      image: require("./img/java.webp")
    },
    {
      name: "Curso Python",
      description: "Domina Python, uno de los lenguajes más populares.",
      image: require("./img/python.jpg")
    },
    {
      name: "Curso C#",
      description: "Conviértete en un experto en C# y desarrolla aplicaciones de alto rendimiento.",
      image: require("./img/csharp.jpg")
    },
    {
      name: "Curso SwiftUI",
      description: "Desarrolla aplicaciones iOS elegantes y efectivas.",
      image: require("./img/swiftui.jpeg.avif")
    }
    // Puedes agregar más cursos aquí...
  ];

  useEffect(() => {
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  }, [searchQuery, courses]); 

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />

      <div className="search-results-wrapper">
        {searchQuery && (
          <SearchResults results={searchResults} />
        )}
      </div>

      <Popular courses={courses} />
      <div className="title">
        <h1>Nosotros</h1>
      </div>
      <Hero />
      <div className="title">
        <h1>{searchQuery ? "Resultados de Búsqueda" : "Productos"}</h1>
      </div>
      <Slider />
      <Cite />
      <Footer />
    </>
  );
}

export default App;


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
import AboutUs from "./components/AboutUs";
import Notification from "./components/Notification";
import ProductModal from "./components/ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const courses = [
    { 
      name: "Curso Java", 
      description: "Aprende Java desde los fundamentos.",
      descripcionCompleta: `Este curso te introduce al mundo del desarrollo con Java, un lenguaje de programación robusto y ampliamente utilizado en la industria.\n
  Comenzarás aprendiendo los fundamentos, como variables, estructuras de control y sintaxis básica.\n
  Posteriormente, avanzarás hacia temas más complejos, incluyendo programación orientada a objetos, manejo de excepciones, colecciones y flujo de entrada/salida.\n
  Además, aprenderás a trabajar con bases de datos utilizando JDBC y a desarrollar interfaces gráficas con JavaFX.\n
  Al finalizar, tendrás la capacidad de crear aplicaciones escalables y entender los principios de desarrollo de software empresarial.`,
      image: require("./img/java.webp"), 
      price: 150 
    },
    { 
      name: "Curso Python", 
      description: "Domina Python, uno de los lenguajes más populares.", 
      descripcionCompleta: `Python es un lenguaje versátil y potente, ampliamente utilizado en áreas como desarrollo web, ciencia de datos, inteligencia artificial y más.\n
  Este curso te llevará desde los conceptos básicos, como variables, estructuras de control y funciones, hasta temas más avanzados.\n
  Aprenderás a trabajar con librerías como NumPy y Pandas para análisis de datos, matplotlib para visualización y Flask para desarrollo web.\n
  También exploraremos temas como automatización de tareas, desarrollo de scripts y fundamentos de aprendizaje automático.\n
  Este curso es perfecto para quienes desean abrirse camino en áreas como ciencia de datos, inteligencia artificial o desarrollo de software.`,
      image: require("./img/python.jpg"), 
      price: 120 
    },
    { 
      name: "Curso C#", 
      description: "Conviértete en un experto en C#.", 
      descripcionCompleta: `En este curso de C#, aprenderás uno de los lenguajes más importantes para el desarrollo de aplicaciones modernas, especialmente en el ecosistema de Microsoft.\n
  Iniciaremos con los fundamentos, como sintaxis, estructuras de control y tipos de datos.\n
  Luego, avanzaremos hacia temas como programación orientada a objetos, LINQ para manipulación de datos y desarrollo de interfaces gráficas con Windows Forms y WPF.\n
  También aprenderás a crear aplicaciones web utilizando ASP.NET.\n
  Al finalizar, estarás equipado para desarrollar aplicaciones de escritorio, servicios web y videojuegos utilizando Unity.`,
      image: require("./img/csharp.jpg"), 
      price: 200 
    },
    { 
      name: "Curso SwiftUI", 
      description: "Desarrolla aplicaciones iOS elegantes.",
      descripcionCompleta: `SwiftUI es el framework moderno de Apple para construir interfaces de usuario en aplicaciones iOS, macOS, tvOS y watchOS.\n
  Este curso te enseñará a crear aplicaciones móviles elegantes y funcionales, utilizando un enfoque declarativo.\n
  Aprenderás a manejar componentes como listas, formularios, animaciones y notificaciones.\n
  También veremos cómo integrar tu aplicación con APIs y cómo implementar la arquitectura MVVM para proyectos escalables.\n
  Este curso es ideal para quienes desean entrar al mundo del desarrollo móvil en el ecosistema Apple.`,
      image: require("./img/swiftui.jpeg.avif"), 
      price: 220 
    },
    { 
      name: "Curso Ruby", 
      description: "Aprende Ruby on Rails.",
      descripcionCompleta: `Ruby on Rails es un framework poderoso y eficiente para desarrollar aplicaciones web.\n
  En este curso, aprenderás los fundamentos del lenguaje Ruby y cómo aplicarlos en Rails para construir aplicaciones dinámicas.\n
  Desde la configuración inicial de tu entorno de desarrollo hasta la creación de un proyecto completo, explorarás temas como manejo de rutas, bases de datos con Active Record, autenticación de usuarios y despliegue de aplicaciones.\n
  Este curso es ideal para quienes buscan una forma ágil y estructurada de desarrollar aplicaciones web.`,
      image: require("./img/ruby-on-rails.jpg"), 
      price: 180 
    },
    { 
      name: "Curso de React.js", 
      description: "Domina React.js.",
      descripcionCompleta: `React.js es una de las bibliotecas más populares para el desarrollo de interfaces de usuario modernas.\n
  En este curso, comenzarás aprendiendo los fundamentos de React, incluyendo componentes, props y estado.\n
  Luego avanzarás hacia temas más avanzados como el manejo de rutas con React Router, gestión de estado con Redux y hooks, y optimización del rendimiento.\n
  También trabajaremos en proyectos prácticos para que puedas aplicar tus conocimientos en aplicaciones reales.\n
  Este curso es ideal para desarrolladores que quieren destacar en el mundo del desarrollo frontend.`,
      image: require("./img/react.png"), 
      price: 160 
    },
    { 
      name: "Curso de Node.js", 
      description: "Conviértete en un experto en Node.js.",
      descripcionCompleta: `Node.js es una tecnología esencial para el desarrollo backend moderno.\n
  Este curso te enseñará a construir aplicaciones escalables utilizando JavaScript en el lado del servidor.\n
  Aprenderás a configurar servidores web con Express, manejar bases de datos con MongoDB, y a crear APIs RESTful seguras y eficientes.\n
  Además, exploraremos temas como autenticación, manejo de eventos y uso de websockets para comunicación en tiempo real.\n
  Este curso es perfecto para desarrolladores que desean ampliar sus habilidades en el desarrollo full-stack.`,
      image: require("./img/node.png"), 
      price: 175 
    },
    { 
      name: "Curso de Angular", 
      description: "Aprende Angular.",
      descripcionCompleta: `Angular es un framework robusto y completo para el desarrollo de aplicaciones web modernas.\n
  En este curso, aprenderás desde los conceptos básicos como componentes, directivas y servicios, hasta temas avanzados como enrutamiento, gestión de formularios y comunicación con APIs.\n
  También trabajaremos con RxJS para manejar programación reactiva y aprenderás a implementar prácticas recomendadas para mantener tus aplicaciones escalables y de alto rendimiento.\n
  Al finalizar, estarás listo para desarrollar aplicaciones web completas y profesionales.`,
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

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setCartItems([]);
    showNotification(`Gracias por su compra de: $${total.toFixed(2)}`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleLoadMore = () => {
    setVisibleCourses((prevVisible) => prevVisible + 4);
  };

  const handleShowModal = (course) => {
    setSelectedProduct(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      {notification && <Notification message={notification} />}
      <div className="search-results-wrapper">
        {searchQuery && (
          <SearchResults 
            results={searchResults} 
            handleAddToCart={handleAddToCart} 
            handleShowModal={handleShowModal} 
          />
        )}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Popular 
                courses={popular_courses} 
                handleAddToCart={handleAddToCart} 
                handleShowModal={handleShowModal} 
              />
              <Hero />
              <Products
                courses={courses.slice(0, visibleCourses)}
                handleAddToCart={handleAddToCart}
                handleShowModal={handleShowModal}
                loadMoreCourses={handleLoadMore}
                hasMore={visibleCourses < courses.length} 
              />
              <Cite />
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout} />}
        />
        <Route
          path="/about-us" 
          element={<AboutUs />} />
      </Routes>
      <Footer />
      {showModal && selectedProduct && (
        <ProductModal
          name={selectedProduct.name}
          descripcionCompleta={selectedProduct.descripcionCompleta}
          image={selectedProduct.image}
          price={selectedProduct.price}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCloseModal={handleCloseModal}
          isInCart={cartItems.some(item => item.name === selectedProduct.name)}
        />
      )}
    </Router>
  );
}

export default App;
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Cite from "./components/Cite";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Popular />
      <Hero />
      <div className="title">
        <h1>Productos</h1>
      </div>
      <Slider />
      <Cite />
      <Footer />
    </>
  );
}

export default App;
import React from "react";
import "../index.css";
import hero_image from '../img/cursos-hero.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>SerenaLab</h1>
          <p>
          Bienvenido a SerenaLab, tu destino definitivo para aprender, 
          crecer y alcanzar tus metas. Aquí encontrarás una amplia selección de cursos diseñados para todos los niveles, 
          desde principiantes que buscan explorar nuevas áreas de conocimiento, hasta expertos que desean perfeccionar sus habilidades.
          </p>
          <p>
          </p>
          <p>
          Ya sea que quieras aprender a programar, desarrollar tus habilidades creativas o mejorar 
          en tu carrera profesional, en SerenaLab tenemos lo que necesitas para desbloquear tu potencial. 
          ¡Únete a miles de estudiantes satisfechos y da el primer paso hacia un futuro más brillante
          </p>
        </div>
        <div className="hero-image">
          <img
            src={hero_image}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

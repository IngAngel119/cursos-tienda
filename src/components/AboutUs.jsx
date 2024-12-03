import React from "react";
import "../index.css";
import "./AboutUs.css";
import about_img from "../img/about-us-img.webp";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-hero">
        <h2>Sobre Nosotros</h2>
        <p>
        En SerenaLab, creemos que la educación transforma vidas. Somos una plataforma dedicada a la educación en línea, 
        diseñada para empoderarte en tu camino hacia el éxito personal y profesional. Ofrecemos una amplia gama de cursos 
        cuidadosamente creados para satisfacer las necesidades de estudiantes, profesionales y apasionados del aprendizaje continuo.
        </p>
        <p>
        Nuestro enfoque está centrado en proporcionar una experiencia de aprendizaje accesible, flexible y de alta calidad, 
        adaptada al ritmo de cada persona. Entendemos que cada estudiante es único, por eso nuestros cursos abarcan desde habilidades 
        técnicas hasta desarrollo personal, garantizando que encuentres el contenido perfecto para alcanzar tus metas.
        </p>
        <p>
        En SerenaLab, nos esforzamos por ser mucho más que una plataforma de cursos; queremos ser tu aliado en el aprendizaje. 
        Nos comprometemos a crear un entorno donde puedas explorar, crecer y triunfar, con el apoyo de instructores expertos y
         una comunidad vibrante de estudiantes de todo el mundo.
        </p>
        <p>
        Únete a SerenaLab y da el primer paso hacia un futuro lleno de posibilidades. ¡El conocimiento está al alcance de tus manos!
        </p>
        <img src={about_img} alt="Sobre Nosotros" className="about-us-image" />
      </div>
    </div>
  );
};

export default AboutUs;

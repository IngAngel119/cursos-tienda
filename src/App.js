import React from 'react';
import ProductContainer from './containers/ProductContainer';

const App = () => {
  return (
    <>
    <div className="page-title">
      <h1 className="animated-title">Cursos de Programación</h1>
    </div>
    <div className="product-list">
      <ProductContainer 
        name="Curso Java" 
        description="Aprende Java desde los fundamentos hasta aplicaciones avanzadas. Perfecto para construir aplicaciones empresariales, móviles y de escritorio." 
        image={require('./img/java.webp')}
      />
      <ProductContainer 
        name="Curso Python" 
        description="Domina Python, uno de los lenguajes más versátiles y populares, desde lo básico hasta el desarrollo de proyectos avanzados y análisis de datos." 
        image={require('./img/python.jpg')}
      />
      <ProductContainer 
        name="Curso C#" 
        description="Conviértete en un experto en C# y desarrolla aplicaciones de alto rendimiento para la web, juegos y más con este curso integral." 
        image={require('./img/csharp.jpg')}
      />
    </div>
    </>
  );
};

export default App;
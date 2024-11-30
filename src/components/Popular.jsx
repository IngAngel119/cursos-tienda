import React from "react";
import ProductContainer from "../containers/ProductContainer";

const Popular = () => (
  <>
    <div className="page-title">
      <h1 className="animated-title">+ Populares</h1>
    </div>
    <div className="product-list">
      <ProductContainer
        name="Java"
        //description="Aprende Java desde los fundamentos hasta aplicaciones avanzadas. Perfecto para construir aplicaciones empresariales, móviles y de escritorio."
        image={require("../img/java.webp")} // Asegúrate de que esta imagen exista
      />
      <ProductContainer
        name="Python"
        //description="Domina Python, uno de los lenguajes más versátiles y populares, desde lo básico hasta el desarrollo de proyectos avanzados y análisis de datos."
        image={require("../img/python.jpg")} // Asegúrate de que esta imagen exista
      />
      <ProductContainer
        name="C#"
        //description="Conviértete en un experto en C# y desarrolla aplicaciones de alto rendimiento para la web, juegos y más con este curso integral."
        image={require("../img/csharp.jpg")} // Asegúrate de que esta imagen exista
      />
      <ProductContainer
        name="SwiftUI"
        //description="Conviértete en un experto en C# y desarrolla aplicaciones de alto rendimiento para la web, juegos y más con este curso integral."
        image={require("../img/swiftui-og.png")} // Asegúrate de que esta imagen exista
      />
    </div>
  </>
);

export default Popular;

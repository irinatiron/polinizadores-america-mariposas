// Step 1: Import the CSS file
import './IntroPollinators.css';

// Step 2: Create the intro-pollinators component
const IntroPollinators = () => {
  return (
    <div className="intro-pollinators">
      <h2 className="section-title">
        ¿Qué son las especies polinizadoras?
      </h2>
      <p className="description-text">
        Las especies polinizadoras son animales que transportan el polen de una flor a otra, permitiendo la
        reproducción de muchas plantas. Este proceso es esencial para la biodiversidad y la producción de alimentos.
        Existen distintos tipos de polinizadores, como insectos (abejas, mariposas, escarabajos, avispas), aves (como
        los colibríes) y algunos mamíferos (como los murciélagos). Dentro de estos, las mariposas juegan un papel muy
        importante: al posarse en las flores para alimentarse del néctar, recogen polen en sus patas y alas, y lo
        transportan a otras plantas. A diferencia de otros insectos, las mariposas suelen polinizar flores de colores
        vivos y con corolas profundas, contribuyendo a la reproducción de muchas especies silvestres. Además, su
        presencia es un indicador de ecosistemas sanos.
      </p>
    </div>
  );
};

export default IntroPollinators;
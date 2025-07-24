import { Link } from "react-router-dom";

const AmericanMap = () => {
  return (
    <div>
      <h2>Descubre las mariposas polinizadoras del mundo</h2>
      <p>Haz clic en el mapa y visita las fichas de las mariposas más comunes en el continente americano.</p>
      <div className="map-container">
        <Link to="/fichas-mariposas">
          <img 
            className="america-map" 
            src="/src/assets/images/115725998-america-map-old-paper-background-raster.jpg"
            alt="map of america"
          />
        </Link>
      </div>
    </div>
  );
};


export default AmericanMap;
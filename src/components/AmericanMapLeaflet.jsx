// src/components/AmericanMapLeaflet.jsx
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AmericanMapLeaflet = () => {
  return (
    <MapContainer
      center={[37.0902, -95.7129]} // Coordenadas centradas en Estados Unidos
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default AmericanMapLeaflet;

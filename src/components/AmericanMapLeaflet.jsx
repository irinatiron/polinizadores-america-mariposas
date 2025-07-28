// src/components/AmericanMapLeaflet.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AmericanMapLeaflet = () => {
    const position = [51.505, -0.09]
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
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default AmericanMapLeaflet;

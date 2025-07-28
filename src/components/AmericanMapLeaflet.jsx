// src/components/AmericanMapLeaflet.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AmericanMapLeaflet = () => {
    const markers = [
        {
            position: [38.9072, -77.0369], // Washington D.C., EE.UU.
            text: 'Estados Unidos: Washington D.C.',
        },
        {
            position: [19.4326, -99.1332], // Ciudad de México
            text: 'México: Ciudad de México',
        },
        {
            position: [-15.7939, -47.8828], // Brasília, Brasil
            text: 'Brasil: Brasília',
        },
    ];


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
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>{marker.text}</Popup>
                </Marker>
            ))}
        </MapContainer>

    );
};

export default AmericanMapLeaflet;

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono por defecto
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const AmericanMapLeaflet = () => {
    const [butterflies, setButterflies] = useState([]);

    useEffect(() => {
        fetch('/butterflies.json') // asegúrate que esté en public/
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // <-- Verifica que tenga la clave butterflies
                setButterflies(data.butterflies); // 👈 CORRECTO
            })
            .catch((err) => console.error('Error al cargar mariposas:', err));
    }, []);

    return (
        <MapContainer
            center={[-10, -60]} // Centro general de América del Sur
            zoom={4}
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {butterflies.map((butterfly) => (
                <Marker key={butterfly.id} position={butterfly.position} icon={customIcon}>
                    <Popup maxWidth={250}>
                        <strong>{butterfly.name}</strong>
                        <br />
                        <img
                            src={butterfly.img}
                            alt={butterfly.name}
                            style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', margin: '8px 0' }}
                        />
                        <div><strong>Origen:</strong> {butterfly.origin}</div>
                        <div><strong>Hábitat:</strong> {butterfly.habitat}</div>
                        <div><strong>Fenología:</strong> {butterfly.fenology}</div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default AmericanMapLeaflet;

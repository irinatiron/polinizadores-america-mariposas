
import { Routes,Route,Link,useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EditForm from "../components/EditForm";
import {getOneButterfly,updateButterfly} from "../services/ButterflyServices";

const EditButterfly = () => {
  const { id } = useParams(); // Obtiene el ID de la mariposa desde la URL
  const navigate = useNavigate(); // Para navegar después de la actualización
  const [butterflyData, setButterflyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los datos de la mariposa específica
  const fetchButterflyData = async () => {
    try {
      setLoading(true);
      // Reemplaza esta URL con tu endpoint real
      const response = await fetch(URL_API);
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos de la mariposa');
      }
      
      const data = await response.json();
      setButterflyData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar la mariposa
  const handleUpDateButterfly = async (updatedData) => {
    try {
       
      const response = await fetch(`http://localhost:3000/butterflies`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la mariposa');
      }

      const result = await response.json();
      
      // Mostrar mensaje de éxito
      alert('Mariposa actualizada exitosamente');
      
      // Navegar de vuelta a la lista o a la vista de detalle
      navigate('/butterflies'); // Ajusta esta ruta según tu aplicación
      
    } catch (err) {
      setError(err.message);
      alert('Error al actualizar la mariposa: ' + err.message);
    }
  };

  // Cargar datos cuando se monta el componente
  useEffect(() => {
    fetchButterflyData();
  }, [id]);

  // Mostrar loading
  if (loading) {
    return <div>Cargando datos de la mariposa...</div>;
  }

  // Mostrar error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Mostrar formulario de edición
  return (
    <div>
      <h2>Editar Mariposa</h2>
      {butterflyData && (
        <EditForm 
          onSubmit={updateButterfly}
          initialData={butterflyData}
        />
      )}
    </div>
  );
};

export default EditButterfly;

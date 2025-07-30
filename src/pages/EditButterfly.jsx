
import { Routes,Route,Link,useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EditForm from "../components/EditForm/EditForm";
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
      // Usar el servicio que ya creaste en lugar de fetch directo
      const data = await getOneButterfly(id);
      setButterflyData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar la mariposa
  const handleUpdateButterfly = async (updatedData) => {
    try {
      const result = await updateButterfly(id, updatedData);
      
      alert('Mariposa actualizada exitosamente');
      
      navigate('/fichas-mariposas'); 
      
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
          onSubmit={handleUpdateButterfly}
          initialData={butterflyData}
        />
      )}
    </div>
  );
};

export default EditButterfly;

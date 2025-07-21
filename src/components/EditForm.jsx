import { useState, useEffect } from 'react';
import '"src/components/EditForm.jsx"';

const EditForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    order: '',
    family: '',
    color: '',
    size: '',
    origin: '',
    location: '',
    habitat: '',
    plants: '',
    cycle: '',
    img: '',
    fenology: '',
  });

  // Cargar datos iniciales cuando se reciben (para edición)
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="order">Orden:</label>
      <input
        type="text"
        id="order"
        name="order"
        value={formData.order}
        onChange={handleChange}
        required
      />

      <label htmlFor="family">Familia:</label>
      <input
        type="text"
        id="family"
        name="family"
        value={formData.family}
        onChange={handleChange}
        required
      />

      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
      />

      <label htmlFor="size">Tamaño:</label>
      <input
        type="text"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleChange}
        required
      />

      <label htmlFor="origin">Origen:</label>
      <input
        type="text"
        id="origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Ubicación:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="habitat">Hábitat:</label>
      <input
        type="text"
        id="habitat"
        name="habitat"
        value={formData.habitat}
        onChange={handleChange}
        required
      />

      <label htmlFor="plants">Plantas:</label>
      <input
        type="text"
        id="plants"
        name="plants"
        value={formData.plants}
        onChange={handleChange}
        required
      />

      <label htmlFor="cycle">Ciclo:</label>
      <input
        type="text"
        id="cycle"
        name="cycle"
        value={formData.cycle}
        onChange={handleChange}
        required
      />

      <label htmlFor="img">Imagen (URL):</label>
      <input
        type="url"
        id="img"
        name="img"
        value={formData.img}
        onChange={handleChange}
        required
      />

      <label htmlFor="fenology">Fenología:</label>
      <input
        type="text"
        id="fenology"
        name="fenology"
        value={formData.fenology}
        onChange={handleChange}
        required
      />

      <button type="submit">Actualizar Mariposa</button>
    </form>
  );
};

export default EditForm;
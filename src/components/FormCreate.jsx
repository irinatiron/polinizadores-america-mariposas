import { useState } from 'react'; // Importa hook useState que maneja el estado del formulario
import './FormCreate.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ // Se crea un estado local llamado formData con los valores del formulario
    name: '', // Valores iniciales como cadena vacía
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

  const handleChange = (e) => { // Manejamos los cambios realizados por el usuario
    const { name, value } = e.target; // Recoge name y value del input modificado
    setFormData((prevData) => ({ // Recoge el estado anterior
      ...prevData,
      [name]: value, // Actualiza con los cambios modificados
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del navegador 
    await onSubmit(formData); // Llamada a la función onSubmit
    setFormData({ // Tras enviar el formulario correctamente lo reinicia vacío
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
  };

  return ( // Renderizado del form
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">Nombre:</label>
      <input type="text" id="input-name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="input-order">Orden:</label>
      <input type="text" id="input-order" name="order" value={formData.order} onChange={handleChange} required />

      <label htmlFor="input-family">Familia:</label>
      <input type="text" id="input-family" name="family" value={formData.family} onChange={handleChange} required />

      <label htmlFor="input-color">Color:</label>
      <input type="text" id="input-color" name="color" value={formData.color} onChange={handleChange} />

      <label htmlFor="input-size">Tamaño:</label>
      <input type="text" id="input-size" name="size" value={formData.size} onChange={handleChange} />

      <label htmlFor="input-origin">Origen:</label>
      <input type="text" id="input-origin" name="origin" value={formData.origin} onChange={handleChange} />

      <label htmlFor="input-location">Localización:</label>
      <input type="text" id="input-location" name="location" value={formData.location} onChange={handleChange} />

      <label htmlFor="input-habitat">Hábitat:</label>
      <input type="text" id="input-habitat" name="habitat" value={formData.habitat} onChange={handleChange} />

      <label htmlFor="input-plants">Plantas visitadas:</label>
      <input type="text" id="input-plants" name="plants" value={formData.plants} onChange={handleChange} />

      <label htmlFor="input-cycle">Ciclo de vida:</label>
      <input type="text" id="input-cycle" name="cycle" value={formData.cycle} onChange={handleChange} />

      <label htmlFor="input-img">Imagen:</label>
      <input type="url" id="input-img" name="img" value={formData.img} onChange={handleChange} />

      <label htmlFor="input-fenology">Fenología:</label>
      <input type="text" id="input-fenology" name="fenology" value={formData.fenology} onChange={handleChange} />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

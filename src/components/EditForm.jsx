import { useState, useEffect } from 'react';
import "../components/EditForm.css";
import "../components/CreateForm/CreateForm.module.css";
import Input from "../components/CreateForm/ImageUpload";

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

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        name: initialData.name || '',
        order: initialData.order || '',
        family: initialData.family || '',
        color: initialData.color || '',
        size: initialData.size || '',
        origin: initialData.origin || '',
        location: initialData.location || '',
        habitat: initialData.habitat || '',
        plants: initialData.plants || '',
        cycle: initialData.cycle || '',
        img: initialData.img || '',
        fenology: initialData.fenology || '',
      });
    }
  }, [initialData]);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejo de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica adicional
    if (!formData.name.trim()) {
      alert('El nombre es obligatorio');
      return;
    }
    
    // Llama a la función desde el componente padre
    onSubmit(formData);
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="butterfly-form form-style" >
        
        <div className="form-Group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ej: Mariposa Monarca"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="order">Orden:</label>
          <input
            type="text"
            id="order"
            name="order"
            value={formData.order}
            onChange={handleChange}
            required
            placeholder="Ej: Lepidoptera"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="family">Familia:</label>
          <input
            type="text"
            id="family"
            name="family"
            value={formData.family}
            onChange={handleChange}
            required
            placeholder="Ej: Nymphalidae"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            placeholder="Ej: Naranja y negro"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="size">Tamaño:</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
            placeholder="Ej: 8-12 cm"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="origin">Origen:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            required
            placeholder="Ej: América del Norte"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="location">Ubicación:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Ej: México, EE.UU., Canadá"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="habitat">Hábitat:</label>
          <input
            type="text"
            id="habitat"
            name="habitat"
            value={formData.habitat}
            onChange={handleChange}
            required
            placeholder="Ej: Bosques templados"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="plants">Plantas:</label>
          <input
            type="text"
            id="plants"
            name="plants"
            value={formData.plants}
            onChange={handleChange}
            required
            placeholder="Ej: Asclepias, algodoncillo"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="cycle">Ciclo:</label>
          <input
            type="text"
            id="cycle"
            name="cycle"
            value={formData.cycle}
            onChange={handleChange}
            required
            placeholder="Ej: Huevo, larva, pupa, adulto"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="img">Imagen (URL):</label>
          <input
            type="url"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            placeholder="https://ejemplo.com/imagen-mariposa.jpg"
          />
          <Input />
        </div>

        <div className="form-Group">
          <label htmlFor="fenology">Fenología:</label>
          <input
            type="text"
            id="fenology"
            name="fenology"
            value={formData.fenology}
            onChange={handleChange}
            required
            placeholder="Ej: Migración octubre-marzo"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            Actualizar Mariposa
          </button>
          <button type="button" className="btn-cancel" onClick={() => window.history.back()}>
            Cancelar
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default EditForm;
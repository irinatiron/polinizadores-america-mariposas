import { useState } from 'react'; // Importa hook useState que maneja el estado del formulario
import validateButterfly from './ValidateButterfly'; // Importa la validación del formulario
import { initialFormState, butterflyFamilies } from '../FormConstants'; // Importa el estado inicial del formulario y las familias existentes
import './CreateForm.css';
import { IoImageOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { LuRuler, LuHourglass, LuFlower2 } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaPlus, FaCheck } from "react-icons/fa";


import Swal from 'sweetalert2' // Importa sweetalert


const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({}); // Se crea estado formErrors para almacenar los mensajes de error y por defecto está vacío

  const [showOptional, setShowOptional] = useState(false); // Vamos a dividir los campos en required (nombre, orden y familia) y opcionales (el resto)
  // Inicialmente los campos opcionales están ocultos: false

  const handleChange = (e) => { // handleChange es la función que se ejecuta cuando cambia un campo, se extrae name y value
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData, // Spread operator: clona la información de formData
      [name]: value, // Los campos que han cambiado con su valor
    };
    setFormData(updatedFormData); // Actualiza el estado del formulario 

    // Valida el campo que se modifica y guarda los errores
    const validationErrors = validateButterfly({ ...formData, [name]: value });
    setFormErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página
    const errors = validateButterfly(formData); // Validación final del formulario antes de permitir que envíe los datos
   
    const fieldLabels = { // Constante con la traducción de los campos
      name: 'Nombre',
      order: 'Orden',
      family: 'Familia',
      color: 'Color',
      size: 'Tamaño',
      origin: 'Origen',
      location: 'Localización',
      habitat: 'Hábitat',
      plants: 'Plantas visitadas',
      cycle: 'Ciclo de vida',
      img: 'Imagen',
      fenology: 'Fenología'
    };

    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const firstErrorMessage = errors[firstErrorField];
      const fieldLabel = fieldLabels[firstErrorField] || firstErrorField;
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        html: `<p>Por favor verifique lo que ha escrito en el campo <strong> ${fieldLabel} </strong> antes de continuar.</p><p>${firstErrorMessage}</p>`,
        confirmButtonText: 'Entendido',
        customClass: {confirmButton: 'swal2-confirm-error'} 
      });
      return;
    }

    await onSubmit(formData); // Si no hay errores
    // Si el formulario se ha enviado correctamente se restablece a su valor inicial y se vacían todos los campos
    setFormData(initialFormState);
  };

  return ( // Renderizado del form
    <form onSubmit={handleSubmit}>
      <div id='required-fields'>
        <div className="form-group" id='name-group'>
          <label htmlFor="input-name">Nombre</label>
          <input type="text" id="input-name" name="name" value={formData.name} onChange={handleChange} placeholder='Ej: Mariposa monarca (Danaus plexippus)' required autoFocus />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>
        <div className="form-group" id='order-group'>
          <label htmlFor="input-order">Orden</label>
          <input type="text" id="input-order" name="order" value={formData.order} readOnly />
        </div>
        <div className="form-group" id='family-group'>
          <label htmlFor="input-family">Familia</label>
          <select id="input-family" name="family" value={formData.family} onChange={handleChange} required>
            <option value="">Selecciona la familia</option>
            {butterflyFamilies.map((family) => (
              <option key={family} value={family}>
                {family}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Damos la opción al usuario de añadir información adicional a o de guardar la mariposa añadida sólo con el nombre y la familia */}
      {!showOptional && (<div className="form-buttons">
        <button type="button" className="show-optional" onClick={() => setShowOptional(true)}><FaPlus /> Añadir información adicional</button>
        <button type="submit" className="submit-button">Añadir mariposa <FaCheck /></button>
      </div>
      )}
      {/* Si el usuario elige añadir información adicional desplegamos el resto de campos */}
      {showOptional && (
        <div id='optional-fields'>
          <div className="form-group" id='img-group'>
            <label htmlFor="input-img"><IoImageOutline /> Imagen</label>
            <input type="url" id="input-img" name="img" value={formData.img} onChange={handleChange} placeholder='https://url-de-la-imagen.jpg' />
            {formErrors.img && <p className="error-message">{formErrors.img}</p>}
          </div>
          {/* Campo para una futura subida de archivos (imagen) por parte del usuario, necesario un back-end */}
          {/* <div className="form-group" id='img-group'>
          <label htmlFor="input-img">Imagen</label>
          <input type="file" id="input-img" name="img" accept="image/*" onChange={handleChange} />
        </div> */}
          <div className="form-group" id='origin-group'>
            <label htmlFor="input-origin"><HiOutlineGlobeAmericas /> Origen</label>
            <textarea id="input-origin" name="origin" value={formData.origin} onChange={handleChange} placeholder='Ej: Originaria de América del Norte.' />
            {formErrors.origin && <p className="error-message">{formErrors.origin}</p>}
          </div>
          <div className="form-group" id='location-group'>
            <label htmlFor="input-location"><TbMapPin2 /> Localización</label>
            <textarea id="input-location" name="location" value={formData.location} onChange={handleChange} placeholder='Ej: Se distribuye desde Canadá hasta el norte de Sudamérica.' />
            {formErrors.location && <p className="error-message">{formErrors.location}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-color"><MdOutlineColorLens /> Color</label>
            <textarea id="input-color" name="color" value={formData.color} onChange={handleChange} placeholder='Ej: Alas de color naranja con líneas negras.' />
            {formErrors.color && <p className="error-message">{formErrors.color}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-size"><LuRuler /> Tamaño</label>
            <textarea id="input-size" name="size" value={formData.size} onChange={handleChange} placeholder='Ej: Entre 8,9 y 10,2 cm.' />
            {formErrors.size && <p className="error-message">{formErrors.size}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-fenology"><IoCalendarOutline /> Fenología</label>
            <textarea id="input-fenology" name="fenology" value={formData.fenology} onChange={handleChange} placeholder='Ej: Migración en otoño, reproducción en primavera y verano.' />
            {formErrors.fenology && <p className="error-message">{formErrors.fenology}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-cycle"><LuHourglass /> Ciclo de vida</label>
            <textarea id="input-cycle" name="cycle" value={formData.cycle} onChange={handleChange} placeholder='Ej: Huevo, oruga, crisálida y adulto.' />
            {formErrors.cycle && <p className="error-message">{formErrors.cycle}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-habitat"><HiOutlineHome /> Hábitat</label>
            <textarea id="input-habitat" name="habitat" value={formData.habitat} onChange={handleChange} placeholder='Ej: Hábitat diverso abarcando desde bosques a campos de algodoncillo.' />
            {formErrors.habitat && <p className="error-message">{formErrors.habitat}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="input-plants"><LuFlower2 /> Plantas visitadas</label>
            <textarea id="input-plants" name="plants" value={formData.plants} onChange={handleChange} placeholder='Ej: Plantas del género Asclepias.' />
            {formErrors.plants && <p className="error-message">{formErrors.plants}</p>}
          </div>
        </div>
      )}
      {/* Si el usuario decidió añadir más campos adicionales le mostramos el botón de submit justo al final del formulario */}
      {showOptional && (<div className="form-buttons"><button type="submit">Añadir mariposa <FaCheck /></button></div>)}
    </form>
  );
};

export default Form;

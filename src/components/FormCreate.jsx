import { useState } from 'react'; // Importa hook useState que maneja el estado del formulario
import './FormCreate.css';
import { IoImageOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { LuRuler, LuHourglass, LuFlower2 } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaPlus, FaCheck } from "react-icons/fa";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ // Se crea un estado local llamado formData con los valores del formulario
    name: '', // Valores iniciales como cadena vacía
    order: 'Lepidoptera', // Todas las mariposas son del orden Lepidoptera así que no dejamos al usuario modificar este campo
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

  const [showOptional, setShowOptional] = useState(false); // Vamos a dividir los campos en required (nombre, orden y familia) y opcionales (el resto)


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
      order: 'Lepidoptera',
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

  const butterflyFamilies = [ // Las familias que existen de mariposas para el select
    'Nymphalidae',
    'Papilionidae',
    'Pieridae',
    'Lycaenidae',
    'Hesperiidae',
    'Riodinidae',
  ];

  return ( // Renderizado del form
    <form onSubmit={handleSubmit}>
      <div id='required-fields'>
        <div className="form-group" id='name-group'>
          <label htmlFor="input-name">Nombre</label>
          <input type="text" id="input-name" name="name" value={formData.name} onChange={handleChange} placeholder='Ej: Mariposa monarca (Danaus plexippus) ' required autoFocus />
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
          </div>
          {/* Campo para una futura subida de archivos (imagen) por parte del usuario, necesario un back-end */}
          {/* <div className="form-group" id='img-group'>
          <label htmlFor="input-img">Imagen</label>
          <input type="file" id="input-img" name="img" accept="image/*" onChange={handleChange} />
        </div> */}
          <div className="form-group" id='origin-group'>
            <label htmlFor="input-origin"><HiOutlineGlobeAmericas /> Origen</label>
            <textarea id="input-origin" name="origin" value={formData.origin} onChange={handleChange} placeholder='Ej: Originaria de América del Norte.' />
          </div>
          <div className="form-group" id='location-group'>
            <label htmlFor="input-location"><TbMapPin2 /> Localización</label>
            <textarea id="input-location" name="location" value={formData.location} onChange={handleChange} placeholder='Ej: Se distribuye desde Canadá hasta el norte de Sudamérica.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-color"><MdOutlineColorLens /> Color</label>
            <textarea id="input-color" name="color" value={formData.color} onChange={handleChange} placeholder='Ej: Alas de color naranja con líneas negras.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-size"><LuRuler /> Tamaño</label>
            <textarea id="input-size" name="size" value={formData.size} onChange={handleChange} placeholder='Ej: Entre 8,9 y 10,2 cm.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-fenology"><IoCalendarOutline /> Fenología</label>
            <textarea id="input-fenology" name="fenology" value={formData.fenology} onChange={handleChange} placeholder='Ej: Migración en otoño, reproducción en primavera y verano.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-cycle"><LuHourglass /> Ciclo de vida</label>
            <textarea id="input-cycle" name="cycle" value={formData.cycle} onChange={handleChange} placeholder='Ej: Huevo, oruga, crisálida y adulto.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-habitat"><HiOutlineHome /> Hábitat</label>
            <textarea id="input-habitat" name="habitat" value={formData.habitat} onChange={handleChange} placeholder='Ej: Hábitat diverso abarcando desde bosques a campos de algodoncillo.' />
          </div>
          <div className="form-group">
            <label htmlFor="input-plants"><LuFlower2 /> Plantas visitadas</label>
            <textarea id="input-plants" name="plants" value={formData.plants} onChange={handleChange} placeholder='Ej: Plantas del género Asclepias.' />
          </div>
        </div>
      )}
      {/* Si el usuario decidió añadir más campos adicionales le mostramos el botón de submit justo al final del formulario */}
      {showOptional && (<div className="form-buttons"><button type="submit">Añadir mariposa <FaCheck /></button></div>)}
    </form>
  );
};

export default Form;

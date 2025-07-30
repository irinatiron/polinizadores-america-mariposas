import { useState } from 'react'; // Importa hook useState que maneja el estado del formulario
import validateButterfly from './ValidateButterfly'; // Importa la validación del formulario
import { initialFormState, butterflyFamilies, fieldLabels } from '../FormConstants'; // Importa el estado inicial del formulario, las familias existentes y labels traducidos
import styles from './CreateForm.module.css';
// Importaciones de iconos:
import { IoImageOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { LuRuler, LuHourglass, LuFlower2 } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaPlus, FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2' // Importa sweetalert
import Input from './ImageUpload'; // Importamos el componente de Cloudinary
import { useNavigate } from 'react-router-dom'; // Importa hook useNavigate para navegar a otra ruta dentro de la app

const Form = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({}); // Se crea estado formErrors para almacenar los mensajes de error y por defecto está vacío
  const [showOptional, setShowOptional] = useState(false); // Vamos a dividir los campos en required (nombre, orden y familia) y opcionales (el resto)
  // Inicialmente los campos opcionales están ocultos: false
  const isRequiredValid = () => {
    const { name, family } = formData;
    const errors = validateButterfly({ name, family });
    return Object.keys(errors).length === 0;
  };
  const handleChange = (e) => { // handleChange es la función que se ejecuta cuando cambia un campo, se extrae name y value
    // handleChange recibe un evento e a través del input
    const { name, value } = e.target; // Separa name y value
    setFormData(prev => ({
      ...prev, // Spread operator: clona la información de formData
      [name]: value, // Los campos que han cambiado con su valor
    }));
  };
  const handleBlur = (e) => { // handleBlur también recibe el evento e
    const { name } = e.target; // handleBlur se ejecuta cuando el input pierde el foco
    const validationErrors = validateButterfly(formData); // Valida cuando ya no hay foco
    setFormErrors(prev => ({
      ...prev,
      [name]: validationErrors[name], // Muestra los mensajes de error
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página
    const errors = validateButterfly(formData); // Validación final del formulario antes de permitir que envíe los datos
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const firstErrorMessage = errors[firstErrorField];
      const fieldLabel = fieldLabels[firstErrorField] || firstErrorField;
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        html: `<p>Por favor verifique lo que ha escrito en el campo <strong> ${fieldLabel} </strong> antes de continuar.</p><p>${firstErrorMessage}</p>`,
        confirmButtonText: 'Entendido',
        customClass: { confirmButton: 'swal2-confirm-error' }
      });
      return;
    }
    await onSubmit(formData); // Si no hay errores
    Swal.fire({
      icon: 'success',
      title: 'Mariposa añadida correctamente',
      text: 'Gracias por contribuir al catálogo.',
      confirmButtonText: 'Volver a las fichas de mariposas',
      customClass: { confirmButton: 'swal2-confirm-success' }
    }).then(() => {
      navigate('/fichas-mariposas'); // Cuando el usuario pulsa el botón de confirmación le llevamos de vuelta a las fichas
    });
    // Si el formulario se ha enviado correctamente se restablece a su valor inicial y se vacían todos los campos
    setShowOptional(false); // Para que no muestre los campos opcionales abiertos al reiniciar el formulario
    setFormData(initialFormState); // Limpia los datos que se acabaron de enviar y pone los que vienen por defecto
  };
    // Modal para mostrar imágenes expandidas
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const openModal = (imageSrc, title) => {
        setModalImage(imageSrc);
        setModalTitle(title);
    };
    const closeModal = () => {
        setModalImage(null);
        setModalTitle('');
    };
  return ( // Renderizado del formulario
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.requiredFields}>
          <div className={`${styles.formGroup} ${styles.nameGroup}`}>
            <label htmlFor="input-name">Nombre *</label>
            <input type="text" id='input-name' className={styles.inputName} name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Mariposa monarca (Danaus plexippus)"
              title="Nombre científico o nombre común con científico entre paréntesis." required autoFocus className={formErrors.name ? styles.inputError : ''} />
            {formErrors.name && <p className={styles.errorMessage}>{formErrors.name}</p>}
          </div>
          <div className={`${styles.formGroup} ${styles.orderGroup}`}>
            <label htmlFor="input-order">Orden (por defecto)</label>
            <input type="text" id='input-order' className={styles.inputOrder} name="order" value={formData.order} readOnly tabIndex={-1} onFocus={(e) => e.target.blur()} title="Campo no editable. Todas las mariposas pertenecen al orden Lepidoptera." />
          </div>
          <div className={`${styles.formGroup} ${styles.familyGroup}`}>
            <label htmlFor="input-family">Familia *</label>
            <select name="family" id='input-family' className={styles.inputFamily} value={formData.family} onChange={handleChange} onBlur={handleBlur} title="Selecciona entre las familias existentes." required className={formErrors.family ? styles.inputError : ''} >
              <option value="">Selecciona la familia</option>
              {butterflyFamilies.map((family) => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
            {formErrors.family && <p className={styles.errorMessage}>{formErrors.family}</p>}
          </div>
        </div>
        {!showOptional && (
          <div className={styles.formButtons}>
            <button type="button" className={styles.optionalButton} onClick={() => setShowOptional(true)} disabled={!isRequiredValid()} title="Debes completar nombre y familia para añadir más información"><FaPlus /> Añadir información adicional</button>
            <button type="submit" className={styles.sendButton} disabled={!isRequiredValid()} title='Guardar la nueva mariposa en el catálogo'>Añadir mariposa <FaCheck /></button>
          </div>
        )}
        {showOptional && (
          <div className={styles.optionalFields}>
            <div className={`${styles.formGroup} ${styles.imgGroup}`}>
              <label htmlFor="input-img"><IoImageOutline /> Foto de la mariposa</label>
              {formData.img ? (
                <div className={styles.imagePreviewContainer}>
                  <img src={formData.img} alt="Preview" className={`${styles.imagePreview} ${styles.clickableImage}`}
                  onClick={() => openModal(formData.img, formData.name)}
                  />
                  <div className={styles.imageActions}>
                    <p className={styles.imageUrlLabel}>{formData.img.split('/').pop()}</p>
                    <button type="button" className={styles.changeImageButton} onClick={() => setFormData({ ...formData, img: '' })}>Borrar imagen</button>
                  </div>
                </div>
              ) : (
                <Input name="img" id="input-img" value={formData.img} onUpload={(url) => setFormData({ ...formData, img: url })} error={formErrors.img} />
              )}
              {formErrors.img && (
                <p className={styles.errorMessage}>{formErrors.img}</p>
              )}
            </div>
            <div className={`${styles.formGroup} ${styles.originGroup}`}>
              <label htmlFor="input-origin"><HiOutlineGlobeAmericas /> Origen</label>
              <textarea id="input-origin" name="origin" value={formData.origin} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Originaria de América del Norte." title="¿De dónde procede esta mariposa?" />
              {formErrors.origin && <p className={styles.errorMessage}>{formErrors.origin}</p>}
            </div>
            <div className={`${styles.formGroup} ${styles.locationGroup}`}>
              <label htmlFor="input-location"><TbMapPin2 /> Localización</label>
              <textarea id="input-location" name="location" value={formData.location} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Se distribuye desde Canadá hasta el norte de Sudamérica." title="¿Dónde podemos encontrar esta mariposa?" />
              {formErrors.location && <p className={styles.errorMessage}>{formErrors.location}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-color"><MdOutlineColorLens /> Color</label>
              <textarea id="input-color" name="color" value={formData.color} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Alas de color naranja con líneas negras." title="¿Cómo se identifica esta mariposa?" />
              {formErrors.color && <p className={styles.errorMessage}>{formErrors.color}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-size"><LuRuler /> Tamaño</label>
              <textarea id="input-size" name="size" value={formData.size} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Entre 8,9 y 10,2 cm." title="¿Qué medidas tiene?" />
              {formErrors.size && <p className={styles.errorMessage}>{formErrors.size}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-fenology"><IoCalendarOutline /> Fenología</label>
              <textarea id="input-fenology" name="fenology" value={formData.fenology} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Migración en otoño, reproducción en primavera y verano." title="¿En qué época del año la podemos encontrar?" />
              {formErrors.fenology && <p className={styles.errorMessage}>{formErrors.fenology}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-cycle"><LuHourglass /> Ciclo de vida</label>
              <textarea id="input-cycle" name="cycle" value={formData.cycle} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: 28 días." title="¿Cuánto dura su ciclo vital?" />
              {formErrors.cycle && <p className={styles.errorMessage}>{formErrors.cycle}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-habitat"><HiOutlineHome /> Hábitat</label>
              <textarea id="input-habitat" name="habitat" value={formData.habitat} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Hábitat diverso abarcando desde bosques a campos de algodoncillo." title="¿En qué condiciones se desarrolla?" />
              {formErrors.habitat && <p className={styles.errorMessage}>{formErrors.habitat}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="input-plants"><LuFlower2 /> Plantas visitadas</label>
              <textarea id="input-plants" name="plants" value={formData.plants} onChange={handleChange} onBlur={handleBlur} placeholder="Ej: Plantas del género Asclepias." title="¿Qué especies vegetales poliniza?" />
              {formErrors.plants && <p className={styles.errorMessage}>{formErrors.plants}</p>}
            </div>
          </div>
        )}
        {showOptional && (
          <div className={styles.formButtons}>
            <button type="submit" className={`${styles.sendButton} ${styles.SendButtonEnd}`} disabled={!isRequiredValid()} title='Guardar la nueva mariposa en el catálogo'>Añadir mariposa <FaCheck /></button>
          </div>
        )}

      </form>

      <div className={styles.cancelButtonContainer}>
        <button type="button" className={`${styles.cancelButton}`} title='Cancelar y volver atrás'  onClick={() => window.history.back()}><IoIosArrowRoundBack /> Cancelar y regresar a las fichas</button>
      </div>
      
      {/* Modal para mostrar imágenes expandidas */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" className="close-icon">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <img src={modalImage} alt={modalTitle} className="modal-image" />
            <div className="modal-title">{modalTitle}</div>
          </div>
        </div>
      )}

      </div>
  );
};

export default Form;

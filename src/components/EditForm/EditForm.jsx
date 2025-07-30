import { useState, useEffect } from 'react';
import Input from '../EditForm/ImageUploadEdit'; // Importamos el componente de Cloudinary
// Importaciones de iconos:
import { IoImageOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { LuRuler, LuHourglass, LuFlower2 } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from './EditForm.module.css';
import { butterflyFamilies } from '../FormConstants'; // Importa el estado inicial del formulario, las familias existentes y labels traducidos

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

  return (
    <>
      <div className={styles["edit-form-container"]}>
        <form onSubmit={handleSubmit} className={`${styles["butterfly-form"]} ${styles["form-style"]}`}>

          <div className={styles["form-Group"]}>
            <label htmlFor="name">Nombre *</label>
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

          <div className={styles["form-Group"]}>
            <label htmlFor="order">Orden (por defecto)</label>
            <input
              type="text"
              id="order"
              name="order"
              value={formData.order}
              onChange={handleChange}
              required
              readOnly
              placeholder="Ej: Lepidoptera"
              title="Campo no editable. Todas las mariposas pertenecen al orden Lepidoptera."
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="family">Familia *</label>
            <select id="family" className={styles.inputFamily} name="family" value={formData.family} onChange={handleChange} title="Selecciona entre las familias existentes." required>
              <option value="">Selecciona la familia</option>
              {butterflyFamilies.map((family) => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="color"><MdOutlineColorLens /> Color</label>
            <textarea
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Ej: Naranja y negro"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="size"><LuRuler /> Tamaño</label>
            <textarea
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="Ej: 8-12 cm"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="origin"><HiOutlineGlobeAmericas /> Origen</label>
            <textarea
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Ej: América del Norte"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="location"><TbMapPin2 /> Ubicación</label>
            <textarea
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ej: México, EE.UU., Canadá"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="habitat"><HiOutlineHome /> Hábitat</label>
            <textarea
              type="text"
              id="habitat"
              name="habitat"
              value={formData.habitat}
              onChange={handleChange}
              placeholder="Ej: Bosques templados"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="plants"><LuFlower2 /> Plantas visitadas</label>
            <textarea
              type="text"
              id="plants"
              name="plants"
              value={formData.plants}
              onChange={handleChange}
              placeholder="Ej: Asclepias, algodoncillo"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="cycle"><LuHourglass /> Ciclo de vida</label>
            <textarea
              type="text"
              id="cycle"
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              placeholder="Ej: Huevo, larva, pupa, adulto"
            />
          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="img"><IoImageOutline /> Imagen</label>
            {/* Si ya hay una imagen, muestra la vista previa y el botón de borrar: */}
            {formData.img && (
              <div className={styles.imagePreviewContainer}>
                <img
                  src={formData.img}
                  alt="Vista previa"
                  className={styles["imagePreview"]}
                  onClick={() => openModal(formData.img, formData.name)}
                />
              </div>
            )}
            {/* Si no hay imagen, muestra el componente de carga de imagen: */}
            {!formData.img && (
              <Input
                name="img"
                id="input-img"
                value={formData.img}
                onUpload={(url) => setFormData({ ...formData, img: url })}
              />
            )}
            {/* Muestra el botón de borrar imagen si ya hay una imagen cargada: */}
            {formData.img && (
              <div className={styles.imageActions}>
                <p className={styles.imageUrlLabel}>{formData.img.split('/').pop()}</p>
                <button type="button" className={styles.changeImageButton} onClick={() => setFormData({ ...formData, img: '' })}>Borrar imagen</button>
              </div>
            )}



          </div>

          <div className={styles["form-Group"]}>
            <label htmlFor="fenology"><IoCalendarOutline /> Fenología</label>
            <input
              type="text"
              id="fenology"
              name="fenology"
              value={formData.fenology}
              onChange={handleChange}
              placeholder="Ej: Migración octubre-marzo"
            />
          </div>

          <div className={styles["form-buttons"]}>

            <button type="submit" className={styles["btn-submit"]}>
              Actualizar Mariposa <FaCheck />
            </button>
          </div>

        </form>
        <div className={styles.cancelButtonContainer}>
          <button type="button" className={`${styles.cancelButton}`} title='Cancelar y volver atrás' onClick={() => window.history.back()}><IoIosArrowRoundBack /> Cancelar y regresar a las fichas</button>
        </div>
      </div>

      {/* Modal para mostrar imágenes expandidas */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" className="close-icon">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <img src={modalImage} alt={modalTitle} className="modal-image" />
            <div className="modal-title">{modalTitle}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditForm;

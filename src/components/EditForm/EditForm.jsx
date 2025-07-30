import { useState, useEffect } from 'react';
import Input from '../EditForm/ImageUploadEdit' // Importamos el componente de Cloudinary
// Importaciones de iconos:
import { IoImageOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { LuRuler, LuHourglass, LuFlower2 } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaPlus, FaCheck } from "react-icons/fa";
import styles from './EditForm.module.css';

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
    <div className={styles["edit-form-container"]}>
      <form onSubmit={handleSubmit} className={`${styles["butterfly-form"]} ${styles["form-style"]}`} >
        
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
          <label htmlFor="order">Orden</label>
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

        <div className={styles["form-Group"]}>
          <label htmlFor="family">Familia *</label>
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

        <div className={styles["form-Group"]}>
          <label htmlFor="color"><MdOutlineColorLens /> Color</label>
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
          <input
            type="url"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen-mariposa.jpg"
           />

          {formData.img && (
        <div className={styles["image-preview"]}>
          <img src={formData.img} alt="Vista previa" style={{ maxWidth: "200px", marginTop: "10px" }} />
        </div>
         )}

          <Input onUpload={(url) => setFormData(prev => ({ ...prev, img: url }))} />
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
            Actualizar Mariposa
          </button>
          <button type="button" className={styles["btn-cancel"]} onClick={() => window.history.back()}>
            Cancelar
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default EditForm;

import { useState, useEffect, useRef } from 'react';
// useState gestiona estados locales como la imagen cuando se está cargando la subida
// useEffect actua cuando se cambia el valor de img
// useRef accede al input file
import axios from 'axios'; // Envía la imagen a Cloudinary
import styles from './CreateForm.module.css';


const ImageUpload = ({ onUpload, img }) => { //onUpload es una función que recibe la URL cuando ya se subió la imagen
  const [previewUrl, setPreviewUrl] = useState(img || null); // Guarda la imagen para mostrarla 
  const [loading, setLoading] = useState(false); // Indica si se está cargando la subida
  const inputFileRef = useRef(null); // Limpia valor del input
  useEffect(() => { // Actualiza previewUrl cada vez que se modifica la imagen
    setPreviewUrl(img || null);
    if (!img && inputFileRef.current) { // Si está vacío el input se vacía para que no muestre el archivo que se subió antes
      inputFileRef.current.value = '';
    }
  }, [img]);
  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Extrae el primer archivo seleccionado
    if (!file) return; // No hace nada si no se selecciona archivo
    setLoading(true); // Comienzo de la carga 
    const formData = new FormData(); // Guarda datos de la imagen en una nueva constante
    formData.append('file', file); // Añade el archivo al objeto FormData bajo el campo 'file'
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET); // Accede al preset que se ha definido en la cuenta de Cloudinary
    try {
      const res = await axios.post( // Petición POST a la URL de la API de Cloudinary
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        formData
      );
      const imageUrl = res.data.secure_url; // URL donde se encuentra la imagen subida
      setPreviewUrl(imageUrl); // Actualiza y muestra vista previa
      onUpload(imageUrl);
    } catch (error) {
      console.error('Error subiendo la imagen:', error);
    } finally { // Se ejecuta siempre
      setLoading(false); // Desactiva loading para mostrar mensaje de subida de imagen
    }
  };
  return ( // Renderizado del componente
    <div id='image-upload-container'>
      {/* El usuario selecciona la imagen pulsando esto: */}
      <input type="file" onChange={handleImageChange} accept="image/*" ref={inputFileRef} />
      {/* handleImageChange se ejecuta cuando se selecciona un archivo e image/* restrige la selección a archivos de imagen */}
      {loading && <p>Subiendo imagen...</p>}
      {previewUrl && (
        // <img src={previewUrl} alt="Vista previa de la imagen subida" id='img-preview'/>
        <img
          src={previewUrl}
          alt="Vista previa de la imagen subida"
          className={styles.imgPreview}
        />
      )}
    </div>
  );
};

export default ImageUpload;

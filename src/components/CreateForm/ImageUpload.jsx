import { useRef, useState, useEffect } from 'react'; // Importa hooks de React para manejar DOM, estado y efectos
import styled from 'styled-components'; // Permite escribir estilos CSS dentro de JS
import axios from 'axios'; // Para realizar solicitud HTTP al subir imagen a Cloudinary

const Input = ({ name, value, onUpload, error }) => {
  // name: nombre del campo en el form
  // value: URL actual si hay imagen subida
  // onUpload: función para enviar URL 
  const inputRef = useRef(null); // Reinicia el input file
  const [previewUrl, setPreviewUrl] = useState(value || null); // Almacena la URL para la previsualización
  const [loading, setLoading] = useState(false); // Mientras se sube la imagen
  useEffect(() => {
    setPreviewUrl(value || null);
    if (!value && inputRef.current) { // Actualiza el preview cada vez que se cambia la URL
      inputRef.current.value = ''; // Limpia el valor del input file si no hay value
    }
  }, [value]);
  const handleFileChange = async (e) => { 
    const file = e.target.files[0]; // Coge el primer archivo seleccionado
    if (!file) return; // No hace nada si no se selecciona archivo
    setLoading(true); // Inicia carga
    const formData = new FormData(); // Prepara los datos que va a enviar a Cloudinary
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET); // Credenciales de Cloudinary
    try { // Envia la imagen a Cloudinary
      const res = await axios.post( // Petición a la API de Cloudinary con Axios
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        formData
      );
      const imageUrl = res.data.secure_url; // Extrae la URL del resultado
      setPreviewUrl(imageUrl); // Si resulta existosa la subida, actualiza la vista previa
      onUpload(imageUrl); // Llamada a onUpload para pasarle la URL
    } catch (err) {
      console.error('Error uploading image:', err);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };
  return ( // Renderizado del container donde se sube la imagen
    // https://uiverse.io/escannord/good-insect-28
    <StyledWrapper>
      <label htmlFor="file" className="labelFile"> 
        <span>
          <svg xmlSpace="preserve" viewBox="0 0 184.69 184.69" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px">
            <g>
                    <path d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
      				C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
      				C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
      				c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
      				c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
      				c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
      				c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
      				v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z" style={{fill: 'var(--color-olive-green)'}} />
                  </g>
                  <g>
                    <path d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
      				c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
      				L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
      				c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
      				C104.91,91.608,107.183,91.608,108.586,90.201z" style={{fill: 'var(--color-olive-green)'}} />
                  </g>
          </svg>
        </span>
        <p>{loading ? 'Subiendo imagen...' : 'Arrastra una imagen aquí o haz click para seleccionar'}</p>
      </label>
      <input
        ref={inputRef}
        className="input"
        id="file"
        type="file"
        name={name}
        accept="image/*"
        onChange={handleFileChange}
      />
      {previewUrl && <img src={previewUrl} alt="Vista previa" className="preview" />}
      {error && <p className="error">{error}</p>}
    </StyledWrapper>
  );
};
// Estilos mediante styled-components:
const StyledWrapper = styled.div`
  .input {
    display: none;
  }
  .labelFile {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // width: 250px;
    height: 190px;
    border: 2px dashed var(--color-sage-green);
    align-items: center;
    text-align: center;
    // padding: 5px;
    color: var(--color-olive-green);
    cursor: pointer;
  }
  .preview {
    margin-top: 1rem;
    max-width: 100%;
    height: auto;
    border-radius: 6px;
  }
  .error {
    color: red;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
    
`;

export default Input;

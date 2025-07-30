import { useState } from 'react';


const ImageUploadEdit = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.secure_url) {
        onUpload(data.secure_url); 
      } else {
        alert("Error al subir imagen");
        console.error("Cloudinary response:", data);
      }
    } catch (err) {
      console.error("Error al subir a Cloudinary:", err);
      alert("Ocurrió un error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploading && <p>Subiendo imagen...</p>}
    </div>
  );
};

export default ImageUploadEdit;

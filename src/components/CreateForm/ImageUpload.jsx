import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUpload, img }) => {
  const [previewUrl, setPreviewUrl] = useState(img || null);
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef(null);

  useEffect(() => {
    setPreviewUrl(img || null);
    if (!img && inputFileRef.current) {
      inputFileRef.current.value = '';  // Reset input file value
    }
  }, [img]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        formData
      );

      const imageUrl = res.data.secure_url;
      setPreviewUrl(imageUrl);
      onUpload(imageUrl);
    } catch (error) {
      console.error('Error subiendo la imagen:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='image-upload-container'>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        ref={inputFileRef}
      />
      {loading && <p>Subiendo imagen...</p>}
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Vista previa de la imagen subida"
          id='img-preview'
        />
      )}
    </div>
  );
};

export default ImageUpload;

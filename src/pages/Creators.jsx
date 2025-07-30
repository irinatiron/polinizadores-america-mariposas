import { useState, useEffect } from 'react';
import './Creators.css';
import { getAllCreators } from '../services/CreatorServices';

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        setLoading(true);
        const creatorsData = await getAllCreators();
        setCreators(creatorsData);
      } catch (err) {
        setError('Error al cargar la información de las creadoras');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) {
    return (
      <div className="creators-container">
        <div className="loading-message">
          <div className="butterfly-decoration">🦋</div>
          <p>Cargando información de nuestras creadoras...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="creators-container">
        <div className="error-message">
          <h2>Oops! 🦋</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="creators-container">
      <div className="creators-header">
        <h1>Nuestras Creadoras</h1>
        <p>Conoce al equipo apasionado detrás de Polinizadores de América</p>
        <div className="butterfly-decoration">🦋</div>
      </div>

      <div className="creators-grid">
        {creators.map(creator => (
          <div key={creator.id} className="creator-card">
            <div className="card-header">
              <div className="profile-section">
                <img 
                  src={creator.profileImage} 
                  alt={creator.name}
                  className="profile-image clickable-image"
                  onClick={() => openModal(creator.profileImage, creator.name)}
                />
                <div className="creator-info">
                  <h3>{creator.name}</h3>
                  <p className="role">{creator.role}</p>
                </div>
              </div>
            </div>

            <div className="butterfly-section">
              <div className="butterfly-info">
                <h4>Mariposa Favorita</h4>
                <p className="species-name">{creator.butterflySpecies}</p>
                {creator.butterflySpeciesLatin && (
                  <p className="species-latin">{creator.butterflySpeciesLatin}</p>
                )}
              </div>
              {creator.butterflyImage && (
                <img 
                  src={creator.butterflyImage} 
                  alt={creator.butterflySpecies}
                  className="butterfly-image clickable-image"
                  onClick={() => openModal(creator.butterflyImage, `${creator.butterflySpecies} (${creator.butterflySpeciesLatin})`)}
                />
              )}
            </div>

            <div className="description">
              <p>{creator.bio || creator.description}</p>
            </div>

            {creator.skills && creator.skills.length > 0 && (
              <div className="skills-section">
                <h4>Habilidades</h4>
                <div className="skills-tags">
                  {creator.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="social-links">
              {creator.github && (
                <a 
                  href={creator.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M12 0.297C5.37 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              )}
              {creator.linkedin && (
                <a 
                  href={creator.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
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

      <div className="team-message">
        <div className="message-content">
          <h3>🌟 Nuestro Compromiso</h3>
          <p>
            Somos un equipo diverso y apasionado, unidas por el amor a la tecnología y la conservación. 
            Cada una de nosotras aporta su experiencia única para crear esta plataforma que celebra 
            y documenta la increíble biodiversidad de las mariposas en América.
          </p>
          <div className="butterflies-footer">
            🦋 🦋 🦋 🦋 🦋
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;

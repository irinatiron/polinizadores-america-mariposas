import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const newErrors = {};

  if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
  if (!formData.email.trim()) {
    newErrors.email = 'El email es requerido';
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = 'El email no es válido';
  }
  if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
  if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors); // Mostrar errores debajo de cada campo (si tenés esa lógica)
    return; // No enviamos si hay errores
  }

  setIsSubmitting(true);
  setErrors({});

  try {
    await emailjs.send(
      'service_m97yeod',       // ← ID real de tu servicio
      'template_w6wwniy',      // ← ID real de tu plantilla
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      'osMYH7kDCSAwRaOXt'       // ← tu clave pública
    );

    setSubmitMessage('¡Mensaje enviado correctamente! 🦋 Te responderemos pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    setSubmitMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.');
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="contact-form-container">
      {submitMessage && !submitMessage.includes('Error') && (
        <div className="butterfly-animation">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Cuerpo de la mariposa */}
            <ellipse cx="50" cy="50" rx="2" ry="25" fill="#4a4a4a" />
            
            {/* Ala izquierda superior */}
            <path className="wing-left" d="M30 35 Q15 25 20 45 Q25 55 35 45 Q40 40 30 35" 
                  fill="#BF6734" opacity="0.9" />
            
            {/* Ala izquierda inferior */}
            <path className="wing-left" d="M35 55 Q20 60 25 75 Q30 80 40 70 Q42 65 35 55" 
                  fill="#565939" opacity="0.8" />
            
            {/* Ala derecha superior */}
            <path className="wing-right" d="M70 35 Q85 25 80 45 Q75 55 65 45 Q60 40 70 35" 
                  fill="#BF6734" opacity="0.9" />
            
            {/* Ala derecha inferior */}
            <path className="wing-right" d="M65 55 Q80 60 75 75 Q70 80 60 70 Q58 65 65 55" 
                  fill="#565939" opacity="0.8" />
            
            {/* Antenas */}
            <line x1="47" y1="30" x2="45" y2="25" stroke="#4a4a4a" strokeWidth="1.5" />
            <line x1="53" y1="30" x2="55" y2="25" stroke="#4a4a4a" strokeWidth="1.5" />
            <circle cx="45" cy="25" r="1.5" fill="#4a4a4a" />
            <circle cx="55" cy="25" r="1.5" fill="#4a4a4a" />
            
            {/* Detalles decorativos en las alas */}
            <circle cx="25" cy="40" r="3" fill="#fff" opacity="0.6" />
            <circle cx="75" cy="40" r="3" fill="#fff" opacity="0.6" />
            <circle cx="30" cy="65" r="2" fill="#BF6734" opacity="0.7" />
            <circle cx="70" cy="65" r="2" fill="#BF6734" opacity="0.7" />
          </svg>
        </div>
      )}

      <div className="form-header-box">
        <h2>Contáctanos</h2>
        <p>
          Si tienes preguntas, sugerencias o quieres colaborar en la documentación
          de mariposas, escríbenos.
        </p>
      </div>

      {submitMessage && (
        <div className={`message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Tu nombre completo"
            />
            {errors.name && <span className="error-icon">❗</span>}
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="tu.email@ejemplo.com"
            />
            {errors.email && <span className="error-icon">❗</span>}
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto *</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
          >
            <option value="">Selecciona un asunto</option>
            <option value="identificacion">🦋Identificación de mariposas</option>
            <option value="colaboracion">🤝Colaboración</option>
            <option value="informacion">ℹ️ Solicitud de información</option>
            <option value="sugerencia">💡 Sugerencias</option>
            <option value="otro">🔄 Otro</option>
          </select>
          {errors.subject && <span className="error-icon">❗</span>}
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            placeholder="Escribe tu mensaje aquí..."
            rows="6"
          />
          {errors.message && <span className="error-icon">❗</span>}
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
       <div className="form-group-button">

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
        </div>
      </form>

      <div className="contact-info">
        <h3>Información adicional</h3>
        <p>📧 Email: polinizadoras.america@f5.com</p>
        <p>🦋 Síguenos en nuestras redes sociales para más contenido sobre mariposas</p>
        <p>📍 Documentando la biodiversidad de nuestras mariposas en toda America</p>
      </div>
    </div>
  );
};

export default ContactForm;
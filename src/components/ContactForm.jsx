import { useState } from 'react';
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

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('¡Mensaje enviado correctamente! Te responderemos pronto.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-header">
        <h2>¡Conecta con Nosotras!</h2>
                <p>
          Cada una de nosotras aporta su experiencia única: desde el desarrollo web, trabajamos juntas para crear esta plataforma que celebra la belleza y importancia 
          de las mariposas en nuestros ecosistemas.
        </p>
        <p>
          ¿Tienes preguntas, sugerencias o quieres colaborar con nosotras? ¡Nos encantaría saber de ti! 
          Completa el formulario y te responderemos pronto.
        </p>
      </div>

      {submitMessage && (
        <div className={`message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
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
          {errors.email && <span className="error-text">{errors.email}</span>}
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
            <option value="identificacion">Identificación de mariposas</option>
            <option value="colaboracion">Colaboración</option>
            <option value="informacion">Solicitud de información</option>
            <option value="sugerencia">Sugerencias</option>
            <option value="otro">Otro</option>
          </select>
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
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
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
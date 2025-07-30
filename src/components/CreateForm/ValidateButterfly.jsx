// Validaciones del formulario
const validateButterfly = (data) => {
  const errors = {};
  const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ() ,.-]{5,100}$/; // Permite letras mayúsculas y minúsculas, letras acentuadas y especiales en español, espacios, paréntesis, puntos y guiones
  const wordCount = data.name.trim().split(/\s+/).length; // Elimina espacios al principio y final, divide el string en un array de palabras para poder contar cuántas hay
  if (!data.name.trim()) { // Verifica que name no esté vacío
    errors.name = '❗ El nombre es obligatorio.';
  } else if (!namePattern.test(data.name)) { // Validaciones adicionales para verificar que el contenido cumple con el namePattern y el número de palabras
    errors.name = '❗ Mínimo 2 palabras. Solo se permiten letras, espacios y paréntesis.';
  } else if (wordCount < 2 || wordCount > 5) {
    errors.name = '❗ El nombre debe tener entre 2 y 5 palabras.';
  }
  if (!data.family.trim()) {
    errors.family = '❗ Selecciona una familia de la lista.';
  }
  if (data.img && !/^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i.test(data.img)) {
    errors.img = '❗ La URL introducida no es válida.';
  }
  const textFields = ['origin', 'location', 'color', 'size', 'fenology', 'cycle', 'habitat', 'plants'];
  const textPattern = /^[\wÀ-ÿ ,.'()\-:;]{4,500}$/i; // Letras mayúsculas y minúsculas, dígitos 0-9, acentos y letras especiales, espacio, coma, punto, apóstrofe, paréntesis, guión, dos puntos y punto y coma
  // Entre 5 y 500 caracteres permitidos
  textFields.forEach(field => {
    if (data[field] && data[field].trim().length < 4) {
      errors[field] = '❗ Debe escribir por lo menos 4 caracteres.';
    } else if (data[field] && !textPattern.test(data[field])) {
      errors[field] = '❗ El texto introducido no es válido.';
    }
  });
  return errors;
};

export default validateButterfly;

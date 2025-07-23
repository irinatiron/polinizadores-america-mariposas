export const initialFormState = {
  name: '',
  order: 'Lepidoptera',  // Todas las mariposas pertenecen a la orden Lepidoptera
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
};

export const butterflyFamilies = [ // Las familias que existen de mariposas para el select
  'Nymphalidae',
  'Papilionidae',
  'Pieridae',
  'Lycaenidae',
  'Hesperiidae',
  'Riodinidae',
];

export const fieldLabels = { // Traducción de los campos del formulario para utilizarlo en los mensajes de error diciéndole al usuario qué revisar
  name: 'Nombre',
  order: 'Orden',
  family: 'Familia',
  color: 'Color',
  size: 'Tamaño',
  origin: 'Origen',
  location: 'Localización',
  habitat: 'Hábitat',
  plants: 'Plantas visitadas',
  cycle: 'Ciclo de vida',
  img: 'Imagen',
  fenology: 'Fenología'
};

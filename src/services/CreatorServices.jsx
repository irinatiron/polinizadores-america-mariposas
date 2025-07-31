// Servicio para obtener información de las creadoras desde la API local

const URL_API = "http://localhost:3000/creators";

/**
 * Obtiene todas las creadoras desde la API local
 * @returns {Promise<Array>} Array con información de todas las creadoras
 */
export async function getAllCreators() {
  try {
    const response = await fetch(URL_API);
    if (!response.ok) {
      throw new Error('Error al obtener las creadoras');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching creators:', error);
    // Fallback data en caso de error
    return getFallbackCreators();
  }
}

/**
 * Obtiene una creadora específica por ID
 * @param {string|number} id - ID de la creadora
 * @returns {Promise<Object>} Información de la creadora
 */
export async function getOneCreator(id) {
  try {
    const response = await fetch(`${URL_API}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener la creadora');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching creator:', error);
    throw error;
  }
}

/**
 * Datos de respaldo en caso de que la API no esté disponible
 * @returns {Array} Array con datos básicos de las creadoras
 */
function getFallbackCreators() {
  return [
    {
      id: 1,
      name: "María Carmen",
      role: "Product owner",
      profileImage: "src/assets/images/mc.png",
      github: "https://github.com/CarmenTajuelo",
      linkedin: "https://www.linkedin.com/in/carmentajuelo/",
      butterflySpecies: "Mariposa Monarca",
      bio: "Encargada en el proyecto de realizar navbar footer y método delete."
    },
    {
      id: 2,
      name: "Guissella Pérez",
      role: "Full Stack Developer",
      profileImage: "src/assets/images/gp.png",
      github: "https://github.com/guiss26",
      linkedin: "https://www.linkedin.com/in/guissella-pérez/",
      butterflySpecies: "Morpho Azul",
      bio: "Enfocada en el método Get y testing del proyecto."
    },
    {
      id: 3,
      name: "Irina Tiron",
      role: "Scrum master",
      profileImage: "src/assets/images/it.png",
      github: "https://github.com/irinatiron",
      linkedin: "https://www.linkedin.com/in/irinatiron/",
      butterflySpecies: "Cola de Golondrina",
      bio: "Encargada de unificar el estilo y forma de trabajo del proyecto."
    },
    {
      id: 4,
      name: "Ingrid Martínez",
      role: "Full Stack Developer",
      profileImage: "src/assets/images/im.png",
      github: "https://github.com/ingridD2707",
      linkedin: "https://www.linkedin.com/in/ingridmartinez/",
      butterflySpecies: "Mariposa Cebra",
      bio: "Desarrolladora encargada de formularios complejos y validaciones."
    },
    {
      id: 5,
      name: "Paloma Gómez",
      role: "Frontend Developer",
      profileImage: "src/assets/images/pg.png",
      github: "https://github.com/Pal-cloud",
      linkedin: "https://www.linkedin.com/in/palomagsal/",
      butterflySpecies: "Mariposa del Café",
      bio: "Desarrolladora encargada de la sección de creadoras y el formulario de contacto."
    }
  ];
}

/**
 * Obtiene las estadísticas del equipo
 * @returns {Promise<Object>} Estadísticas del equipo
 */
export async function getTeamStats() {
  try {
    const creators = await getAllCreators();
    return {
      totalMembers: creators.length,
      totalExperience: creators.reduce((sum, creator) => sum + (creator.yearsExperience || 0), 0),
      specializations: [...new Set(creators.map(creator => creator.specialization))],
      locations: [...new Set(creators.map(creator => creator.location))],
      skills: [...new Set(creators.flatMap(creator => creator.skills || []))]
    };
  } catch (error) {
    console.error('Error getting team stats:', error);
    return {
      totalMembers: 5,
      totalExperience: 22,
      specializations: ['Frontend', 'Backend', 'Full Stack'],
      locations: ['España', 'Perú', 'Colombia', 'México'],
      skills: ['React', 'Node.js', 'JavaScript', 'CSS']
    };
  }
}

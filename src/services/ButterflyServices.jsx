import Swal from 'sweetalert2';
const URL_API = "http://localhost:3000/butterflies";

// Método GET para el READ
export async function getAllButterflies() {
  const response = await fetch(URL_API)
  if (!response.ok) {
    throw new Error('Error al obtener las mariposas')
  }
  return response.json()
}

export async function getOneButterfly(id) {
  const response = await fetch(`${URL_API}/${id}`)
  if (!response.ok) throw new Error('Error al obtener la mariposa')
  return response.json()
}

// Método POST para el CREATE
export async function createButterfly(newButterfly) {
  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newButterfly)
    });
    if (response.ok) {
      const created = await response.json();
      Swal.fire({
        icon: 'success',
        title: '¡Mariposa añadida!',
        text: 'La información se ha guardado correctamente.',
        confirmButtonText: 'Perfecto',
        customClass: { confirmButton: 'swal2-confirm-ok' }
      });
      return created;
    }
    else {
      const errorText = await response.text();
      console.error('Error al añadir la mariposa:', errorText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Método PUT para el UPDATE
export async function updateButterfly(id, updatedButterfly) {
  try {
    const response = await fetch(`${URL_API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedButterfly),
    });

    if (!response.ok) {
      console.log("Status del error:", response.status);
      throw new Error("Error al actualizar mariposa");
    }

    const data = await response.json();
    console.log("Mariposa actualizada correctamente", data);
    return data;

  } catch (error) {
    console.error("Error al actualizar:", error.message);
    //throw error;

  }
}


// ========================================
//  DELETE <<>> DELETE
// ========================================

const deleteButterfly = async (id) => {
  try {
    // Make the DELETE request to the server
    const response = await fetch(`${URL_API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Handle HTTP errors (4xx, 5xx status codes)
    // Server responded but with an error status
    if (!response.ok) {
      throw new Error(`Error al borrar la mariposa ${id}: ${response.status}`);
    }

    // Request was successful - show success message
    //toast.success(`Mariposa con id ${id} eliminada correctamente.`);
    Swal.fire({
      icon: 'success',
      title: '¡Eliminada!',
      text: `La mariposa con ID ${id} fue eliminada correctamente.`,
      timer: 2000,
      showConfirmButton: false
    });

    return response;

  } catch (error) {
    // Handle two types of errors:
    // 1. Network errors (server unreachable, no internet, timeout, etc.)
    // 2. HTTP errors thrown by the if (!response.ok) check above

    //toast.error('Error al eliminar la mariposa');
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo eliminar la mariposa.',
    });

    throw error; // Re-throw so component can handle it if needed
  }
};
export { deleteButterfly };
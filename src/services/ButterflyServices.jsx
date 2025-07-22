// Sólo peticiones fetch en este archivo
import Swal from 'sweetalert2';
const URL_API = "http://localhost:3000/butterflies";

// Método GET para el READ
export async function getAllButterflies() {
  // const response = await fetch(URL_API, {
  //   method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // const butterflyData = await response.json()
  // console.log(butterflyData)
  // return butterflyData

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
export async function updateButterfly(id, updatedbutterfly) {
  try {
    const response = await fetch(`http://localhost:3000/butterflies"`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedbutterfly),
    });

    if (!response.ok) {
      throw new Error("No se pudo actualizar ");
    }

    const data = await response.json();
    console.log("Actualizado:", data);
    return data;

  } catch (error) {
    console.error("Error al actualizar:", error.message);
  }
}













// Método DELETE para eliminar
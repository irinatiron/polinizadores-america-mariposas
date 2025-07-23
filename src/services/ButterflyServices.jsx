import { useState } from 'react';

// Sólo peticiones fetch en este archivo
const URL_API = "http://localhost:3000/butterflies";


// ========================================
//  READ <<>> GET
// ========================================

async function getAllButterflies() {

}
async function getOneButterfly(id) {

}



// ========================================
//  CREATE <<>> POST
// ========================================

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
      alert('Mariposa añadida correctamente');
      return created;
    } else {
      const errorText = await response.text();
      console.error('Error al añadir la mariposa:', errorText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// ========================================
//  UPDATE <<>> PUT
// ========================================

async function updatebutterfly(id, updatedbutterfly) {
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
   toast.success(`Mariposa con id ${id} eliminada correctamente.`);
   return response;
   
 } catch (error) {
   // Handle two types of errors:
   // 1. Network errors (server unreachable, no internet, timeout, etc.)
   // 2. HTTP errors thrown by the if (!response.ok) check above
   toast.error('Error al eliminar la mariposa');
   throw error; // Re-throw so component can handle it if needed
 }
};
export { deleteButterfly };






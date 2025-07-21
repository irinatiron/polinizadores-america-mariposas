// Sólo peticiones fetch en este archivo

const URL_API = "http://localhost:3000/butterflies";

// Método GET para el READ
async function getAllButterflies() {

}
async function getOneButterfly(id) {

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
// Método PUT para el UPDATE
async function updatebutterfly(id,getOneButterfly ) {//SEGUN LO QUE USE 
try {
const response = await fetch(`${URL_API}${id}`, {
method: "PUT",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(updatedButterfly),
});

if (!response.ok) {
throw new Error("No se pudo actualizar la mariposa ");
}

const data = await response.json();
console.log("Mariposa actualizada:", data);
return data;

} catch (error) {
console.error("Error al actualizar:", error.message);
}
}













// Método DELETE para eliminar
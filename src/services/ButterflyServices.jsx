// Sólo peticiones fetch en este archivo

const URL_API = "http://localhost:3000/butterflies";

// Método GET para el READ
async function getAllButterflies() {
    
}
async function getOneButterfly(id) {
    
}
// Método POST para el CREATE
// Método PUT para el UPDATE
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













// Método DELETE para eliminar
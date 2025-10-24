// Saludo simple sin librerías externas
const args = process.argv;
const nombre = args[2];

if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("Hola mundo");
}

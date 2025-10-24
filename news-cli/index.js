// process.argv es un array con:
// [0] ruta al binario de node
// [1] ruta al archivo que ejecutamos
// [2] primer argumento del usuario (si existe)

const args = process.argv;
const nombre = args[2]; // primer argumento del usuario

if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("Hola mundo");
}

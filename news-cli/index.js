// Si pasas un argumento, saluda con ese nombre; si no, "Hola mundo"
const args = process.argv;
const nombre = args[2];

if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("Hola mundo");
}

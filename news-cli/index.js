// index.js
const { processCommand } = require('./src/cli');

try {
  processCommand(process.argv);
} catch (e) {
  console.log('[ERROR] Ocurrió un problema inesperado: ' + e.message);
}

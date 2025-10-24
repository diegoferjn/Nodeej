// src/cli.js
const { loadNews } = require('./dataService');
const { showTitle, showSuccess, showError } = require('./utils/logger');

function processCommand(args) {
  const cmd = args[2]; // primer argumento del usuario tras node e index.js

  if (cmd === 'list') {
    showTitle('Noticias');
    loadNews((err, raw) => {
      if (err) {
        showError('No se pudo cargar news.json: ' + err.message);
        return;
      }
      // Como no usamos JSON.parse (no está en manuales), muestro el texto tal cual
      console.log(raw);
      showSuccess('Listado mostrado');
    });
  } else {
    showError('Comando no reconocido. Usa: list');
  }
}

module.exports = { processCommand };

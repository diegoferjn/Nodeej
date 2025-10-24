// src/utils/logger.js
function showTitle(text, color = 'cyan') {
  // No aplico color porque no hay librerías ni técnica de color en los manuales.
  console.log('=== ' + text + ' ===');
}

function showSuccess(message) {
  console.log('[OK] ' + message);
}

function showError(message) {
  console.log('[ERROR] ' + message);
}

module.exports = { showTitle, showSuccess, showError };

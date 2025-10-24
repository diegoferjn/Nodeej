// src/dataService.js
const fs = require('fs');

function loadNews(callback) {
  // Leo el archivo como texto (utf8)
  fs.readFile('data/news.json', 'utf8', (err, data) => {
    if (err) return callback(err);
    // Devuelvo el contenido tal cual (string), sin JSON.parse
    return callback(null, data);
  });
}

module.exports = { loadNews };

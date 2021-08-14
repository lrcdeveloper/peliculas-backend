const mongoose = require('mongoose');

const peliculaSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  anio: { type: String, required: true },
  portada: { type: String, required: true },
  calificacion: { type: String, required: true }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
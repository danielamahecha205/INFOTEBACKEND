const mongoose = require('mongoose');

const elementoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  descripcion: { type: String },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Elemento', elementoSchema);

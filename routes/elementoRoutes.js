const express = require('express');
const router = express.Router();
const Elemento = require('../models/Elemento');

// Ruta POST para crear un nuevo elemento
router.post('/crear', async (req, res) => {
  try {
    const nuevoElemento = new Elemento(req.body);
    await nuevoElemento.save();
    res.json({ mensaje: "Elemento creado con éxito", elemento: guardado });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta GET para ver todos los elementos
router.get('/', async (req, res) => {
  try {
    const elementos = await Elemento.find();
    res.send(elementos);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

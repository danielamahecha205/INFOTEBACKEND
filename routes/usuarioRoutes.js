// backend/routes/usuarioRoutes.js
import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario", error });
  }
});

export default router;

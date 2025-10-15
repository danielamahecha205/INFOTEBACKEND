import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const elementosRouter = require('./routes/elementos');
app.use('/elementos', elementosRouter);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/infote';

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,
  useUnifiedTopology: true,})
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Servidor INFOTE funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

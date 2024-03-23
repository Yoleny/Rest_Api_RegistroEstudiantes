//const express = require('express');
import  Express  from "express";
const app = Express();
import { estudiante } from './Rutas/apiEstudiante.js';
import { usuario } from './Rutas/routeUser.js';

import cors from 'cors';

// Middleware 
app.use(Express.json());
const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
// Rutas
app.use('/api/usuario', usuario);
app.use('/api/estudiante', estudiante);



app.listen(4000, ()=>{

    console.log("Esuchando en el puerto 4000");

});
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage });

app.post('/estudiantes/imagen', upload.single('imagen'), function (req, res, next) {
  // El archivo se ha cargado con éxito
  res.json({
    nombre: req.file.filename
  });
});

app.get('/estudiantes/imagen/:nombre', function (req, res, next) {
    const fileName = req.params.nombre;
    res.sendFile(`${__dirname}/uploads/${fileName}`);
});
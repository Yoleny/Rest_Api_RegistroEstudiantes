//const express = require('express');
import express from 'express';
import { estudiante } from './Rutas/apiEstudiante.js'
import { docente } from './Rutas/apiDocente.js';
import { asignatura} from './Rutas/apiAsignatura.js';
import { notas} from './Rutas/apiNotas.js';
import { matricula } from './Rutas/apiMatricula.js';


const app = express();

//middlewares 

app.use(express.json());

const port = 3000;
app.use('/api/estudiante', estudiante);
app.use('/api/docente', docente);
app.use('/api/asignatura', asignatura);
app.use('/api/notas', notas);
app.use("/api/matricula", matricula);


app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});
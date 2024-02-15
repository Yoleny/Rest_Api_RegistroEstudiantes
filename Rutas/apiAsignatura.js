import  express  from "express"
const asignatura = express();
import { getAsignatura, 
        postAsignatura, 
        putAsignatura, 
        deleteAsignatura
    } from "../controles/asignaturaControles.js";

asignatura.get('', getAsignatura);

asignatura.post('', postAsignatura)

asignatura.put( '/:id', putAsignatura)

asignatura.delete('/:id', deleteAsignatura)

export {asignatura}
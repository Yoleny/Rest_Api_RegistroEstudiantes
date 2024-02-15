import  express  from "express"
const docente = express();
import { getDocente, 
        postDocente, 
        putDocente, 
        deleteDocente
    } from "../controles/docenteControles.js";

docente.get('', getDocente);

docente.post('', postDocente)

docente.put( '/:id', putDocente)

docente.delete('/:id', deleteDocente)

export {docente}
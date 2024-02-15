import  express  from "express"
const notas = express();
import { getNotas, 
        postNotas, 
        putNotas, 
        deleteNotas
    } from "../controles/notasControles.js";

notas.get('', getNotas);

notas.post('', postNotas)

notas.put( '/:id', putNotas)

notas.delete('/:id', deleteNotas)

export {notas}
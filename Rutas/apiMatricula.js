import  express  from "express"
const matricula = express();
import { getMatricula, 
        postMatricula, 
        putMatricula, 
        deleteMatricula
    } from "../controles/matriculaControles.js";

matricula.get('', getMatricula);

matricula.post('', postMatricula)

matricula.put( '/:id', putMatricula)

matricula.delete('/:id', deleteMatricula)

export {matricula}
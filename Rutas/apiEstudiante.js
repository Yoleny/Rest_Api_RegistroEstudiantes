import  express  from "express"
const estudiante = express();
import { getEstudiante, 
        postEstudiante,  
        putEstudiante, 
        deleteEstudiante
    } from "../controles/estudianteControles.js";

estudiante.get('', getEstudiante );

estudiante.post('', postEstudiante)
 
estudiante.put( '/:id', putEstudiante )

estudiante.delete('/:id', deleteEstudiante)

export { estudiante} 
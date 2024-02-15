import {db} from '../db/conn.js';

const getEstudiante = async (req, res)=>{

    const sql = `select * from tbl_estudiante`;
                    
    const result = await db.query(sql);
    res.json(result)

}

const postEstudiante = async (req, res)=>{
  

    const { nombre , estudiante_id} = req.body;

    const params =  [nombre, estudiante_id];

    const sql = `insert into tbl_estudiante
                (nombre, estudiante_id)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putEstudiante = async (req, res)=>{
   

    const {nombre, estudiante_id } = req.body;
    const {id} = req.params;
    const params = [
        nombre, 
        estudiante_id,
        id
    ]

    const sql =  'UPDATE tbl_estudiante SET nombre = $1, estudiante_id = $2 WHERE id = $3';
                
    const result = await db.query(sql, params) 
    res.status(200).send({msg: "Actualizado con exito"})

}



const deleteEstudiante = async (req, res)=>{
  
    const params = [req.params.id];

    const sql = `delete from tbl_estudiante
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getEstudiante, postEstudiante, putEstudiante, deleteEstudiante}
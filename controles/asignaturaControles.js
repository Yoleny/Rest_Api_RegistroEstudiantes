import {db} from '../db/conn.js';

const getAsignatura = async (req, res)=>{

    const sql = `select * from tbl_asignatura`;
                    
    const result = await db.query(sql);
    res.json(result)
 
}

const postAsignatura = async (req, res)=>{
  

    const {  nombre_asignatura , asignatura_id} = req.body;

    const params =  [nombre_asignatura, asignatura_id];

    const sql = `insert into tbl_asignatura
                (nombre_asignatura, asignatura_id)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putAsignatura = async (req, res) => {
    const { nombre_asignatura, asignatura_id } = req.body;
    const { id } = req.params;
    const params = [
        nombre_asignatura,
       asignatura_id, 
        id
    ]; 

    const sql =  'UPDATE tbl_asignatura SET nombre_asignatura = $1, asignatura_id = $2 WHERE id = $3';
                
    const result = await db.query(sql, params) 
    res.status(200).send({msg: "Actualizado con exito"})

} 



const deleteAsignatura = async (req, res)=>{
  
    const params = [req.params.id];

    const sql = `delete from tbl_asignatura
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getAsignatura, postAsignatura, putAsignatura, deleteAsignatura}
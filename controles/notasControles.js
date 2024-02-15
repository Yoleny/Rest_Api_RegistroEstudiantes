import {db} from '../db/conn.js';

const getNotas = async (req, res)=>{

    const sql = `select * from tbl_notas`;
                    
    const result = await db.query(sql);
    res.json(result)

}

const postNotas = async (req, res)=>{
   

    const {  nombre, nombre_asignatura, nota_obtenida} = req.body;

    const params =  [nombre, nombre_asignatura, nota_obtenida];

    const sql = `insert into tbl_notas
    (nombre, nombre_asignatura, nota_obtenida )
    values 
    ($1, $2, $3) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putNotas = async (req, res) => {
    const { nombre, nombre_asignatura, nota_obtenida } = req.body;
    const { id } = req.params;
    const params = [
        nombre,
        nombre_asignatura,
       nota_obtenida,
        id
    ];

    const sql =  'UPDATE tbl_notas SET nombre = $1, nombre_asignatura = $2, nota_obtenida = $3 WHERE id = $4';
                
    const result = await db.query(sql, params) 
    res.status(200).send({msg: "Actualizado con exito"}) 

}



const deleteNotas = async (req, res)=>{
  
    const params = [req.params.id];

    const sql = `delete from tbl_notas
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

} 

export {getNotas, postNotas, putNotas, deleteNotas}
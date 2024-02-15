import {db} from '../db/conn.js';

const getDocente = async (req, res)=>{

    const sql = `select * from tbl_docente`;
                    
    const result = await db.query(sql);
    res.json(result)

}

const postDocente = async (req, res)=>{
  

    const {  nombre_docente , docente_id} = req.body;

    const params =  [nombre_docente, docente_id];

    const sql = `insert into tbl_docente
                (nombre_docente, docente_id)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putDocente = async (req, res) => {
    const { nombre_docente, docente_id } = req.body;
    const { id } = req.params;
    const params = [
        nombre_docente,
        docente_id,
        id
    ];

    const sql =  'UPDATE tbl_docente SET nombre_docente = $1, docente_id = $2 WHERE id = $3';
                
    const result = await db.query(sql, params) 
    res.status(200).send({msg: "Actualizado con exito"})

}



const deleteDocente = async (req, res)=>{
  
    const params = [req.params.id];

    const sql = `delete from tbl_docente
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getDocente, postDocente, putDocente, deleteDocente}
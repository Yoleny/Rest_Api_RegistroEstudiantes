import { db } from '../db/conn.js';

const getMatricula = async (req, res) => {

    const sql = `select * from tbl_matricula`;

    const result = await db.query(sql);
    res.json(result)

}

const postMatricula = async (req, res) => {


    const { nombre_estudiante, asignatura, docente } = req.body;

    const params = [nombre_estudiante, asignatura, docente];

    const sql = 'INSERT INTO tbl_matricula (nombre_estudiante, asignatura, docente) VALUES ($1, $2, $3) RETURNING *';
   

    const result = await db.query(sql, params) 
    res.status(200).send({msg: "Matricula Existosa!!"})

}

const putMatricula = async (req, res) => {
    const { nombre_estudiante, asignatura, docente} = req.body;
    const { id } = req.params;
    const params = [
        nombre_estudiante,
        asignatura,
        docente,
        id
    ];

    const sql = 'UPDATE tbl_matricula SET (nombre_estudiante, asignatura, docente) = ($1, $2, $3) WHERE id = $4';

    const result = await db.query(sql, params)
    res.status(200).send({ msg: "Actualizado con exito" })  
 
}



const deleteMatricula = async (req, res) => {

    const params = [req.params.id];

    const sql = `delete from tbl_matricula
    where id = $1 
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getMatricula, postMatricula, putMatricula, deleteMatricula }
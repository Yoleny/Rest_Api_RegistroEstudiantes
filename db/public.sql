-- Active: 1705366687777@@127.0.0.1@5432@api_registroestudiante@public
CREATE DATABASE Api_RegistroEstudiante

create table tbl_rol 
(
    id serial PRIMARY key,
    nombre_rol varchar(200), 
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
);

drop table tbl_usuarios;
create table tbl_usuarios 
(
    nombre_usuario  varchar(20) primary key,
    correo_electronico varchar(50),
    contrasena varchar(20),
    nombre varchar(200),
    apellido varchar(200),
    foto_perfil bytea,
    id_rol int,
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true, 
    constraint fk_id_rol FOREIGN key (id_rol) REFERENCES tbl_rol (id)
);

select * from tbl_usuarios;

CREATE TABLE tbl_estudiante
(
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(200),
    estudiante_id NUMERIC,
    imagen BYTEA,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);


create table tbl_docente
(
    id serial primary key ,
    docente_id NUMERIC,
    nombre_docente varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_asignatura
(
    id serial PRIMARY key,
    asignatura_id NUMERIC,
    nombre_asignatura VARCHAR (100),
    creado TIMESTAMP DEFAULT current_timestamp
);

 
CREATE TABLE tbl_notas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    nombre_asignatura VARCHAR(255),
    nota_obtenida DECIMAL(4, 2)
);

CREATE TABLE tbl_matricula (
  id SERIAL PRIMARY KEY,
  nombre_estudiante VARCHAR(100),
  asignatura VARCHAR(50),
  docente VARCHAR(100),
  fecha_matricula TIMESTAMP DEFAULT current_timestamp
);


DROP TABLE tbl_estudiante;

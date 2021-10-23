const Usuario = require('../models/Usuario');
const {request, response}=require('express');

const registrarUsuario = async (req=request, resp=response) =>{

try {
    const {nombre, correo, clave}=req.body;

    const usuario = new Usuario();
    usuario.nombre=nombre;
    usuario.clave=clave;
    usuario.correo=correo;

    await usuario.save();
    resp.status(200).send({message: 'Usuario Creado'});
} catch (error) {
    console.log("ERROR CREANDO EL USUARIO");
    resp.status(500).send({message: 'Error al crear el usuario'});
}

}
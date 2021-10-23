const mongoose = require('mongoose');
const Schema = mongoose.schema;
const model = mongoose.model;

const Usuarioschema = new Schema({
    nombre:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    clave:{
        type: String,
        required: true
    }


})

module.exports=model('Usuario', Usuarioschema);
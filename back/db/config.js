const mongoose = require('mongoose');//se importa el archivo de mongosse

const dbConnection = async () => { //Creamos una función para almacenar la conexión
    try {
        await mongoose.connect(process.env.BD_CONNECTION);
        console.log("Estoy conectado");
    } catch (error) {
        console.log("Error");
    }
    
    

}

module.exports =  dbConnection;
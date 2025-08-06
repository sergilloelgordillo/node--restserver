const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'//el endpoint que tu quieras ponerle

        //middlewares anadir funcionalidad a mi webserver
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }//fin del constructor
    middlewares(){
        this.app.use(cors());
        //lectura y parseo del body cualquier informacion que le mandes la va a serializar en formato json
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public') );
    }
    routes(){
        //este va a ser un middleware que voy a poner ciertas rutas
        //cuando pase una solicitud por esta ruta entonces aqui lo voy a cargar es como un middleware codicional
        //entonces yo quiero que sea una solicitud y luego que necesito mandar a llamar
        this.app.use(this.usuariosPath,require('../routes/usuarios.route'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;
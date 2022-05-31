import 'dotenv/config'
import {con} from './Repository/connection.js'
import UsuarioController from './Controller/UsuarioController.js'
import FilmeController from './Controller/FilmeController.js'


import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use(UsuarioController);
server.use(FilmeController);




server.listen(process.env.PORT, () => 
                console.log(`Api conectada na porta ${process.env.PORT}`) )

export default server;
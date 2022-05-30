import 'dotenv/comfig'
import {con} from './repository/connection.js'

import express from 'express'
import cors from 'cors'
import Connection from 'mysql2/typings/mysql/lib/Connection';

const server = express();
server.use(cors());
server.use(express.json());





server.listen(process.env.PORT, () => 
                console.log(`Api conectada na porta ${process.env.PORT}`) )
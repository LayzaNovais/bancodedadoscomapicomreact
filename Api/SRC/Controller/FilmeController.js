import { adicionarFilme } from '../Repository/FilmeRepository';


import {Router} from 'express';
const server = Router();

server.post('/filme' , async (req, resp) => {
    try {
        const novoFilme = req.body;
        

        
    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        });
    }
})
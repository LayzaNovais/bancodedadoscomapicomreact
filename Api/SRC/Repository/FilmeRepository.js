import { response } from 'express';
import server from '../index.js';
import {con} from "./connection.js"

export async function adicionarFilme(filme){
 const comando = 
   
     `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                 VALUES (1, 'Harry Potter e a Camara Secreta', 'Filme bem tops', 8.2, '2012-02-11', true)`

}

const [linhas] = await con.query (comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, filme.imagem, filme.usuario])
filme.id = resposta.insertID;

return filme;





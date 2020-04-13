const express = require('express');
const cors = require('cors'); 

const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET : Buscar uma informação no back-end
 * POST : Criar uma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE : Deletar uma informação do back-end
 */

 /**
  * Tipo de parâmetros:
  * 
  * Query Params: Paramêtros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *  
  */

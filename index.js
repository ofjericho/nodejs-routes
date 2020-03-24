const express = require('express');
const routes = require('./routes/routes');

const app = express();

/**
 * Informar ao express que estamos trabalhando com o 
 * formato JSON no corpo das requisições
 */
app.use(express.json());

/**
 * Informar o apontamento das definições das rotas
 */
app.use(routes);

app.listen(3333);
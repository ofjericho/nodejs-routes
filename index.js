const express = require('express');
const app = express();

/**
 * Informar ao express que estamos trabalhando com o formato JSON no corpo das requisições
 */
app.use(express.json());

/**
 * Tipos de Parametros via request
 * 
 * Query params: request.query - Parametros nomeados enviados na rota após. http://localhost:3333/users?nome=fabio maia&page=2&idade=40
 * Route params: request.param - Parametros para identificar recursos. http://localhost:3333/users/1
 * Request Body: request.body - Corpo da requisição utilizado para Criar ou Alterar recursos
 */

app.get('/users/:id', (request, response) => {
  
  const params = request.params;

  console.log(params);

  return response.json({
    cidade: 'oi Jericho', 
    descricao: 'a cidade mais antiga do mundo que se tem noticia no ocidente'
  });

});

app.get('/users', (request, response) => {
  
  const params = request.query;

  console.log(params);

  return response.json({
    cidade: 'oi Jericho', 
    descricao: 'a cidade mais antiga do mundo que se tem noticia no ocidente'
  });

});

app.post('/users', (request, response) =>{

  const params = request.body;

  console.log(params);

  return response.json({
    msg: "User " + params.nome + " criado com sucesso"
  });


});

app.listen(3333);
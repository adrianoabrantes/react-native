const express = require('express');
const SessionController = require('./controllers/SessionController');

const rotas = express.Router();

//get, post, put, delete
//metodo get solicita informacoes de uma rota
rotas.get('/', (req, res) => {
    //req.query acessar query params (para filtros)
    return res.json({ idade: req.query.idade });
});

rotas.put('/users/:id', (req, res) => {
    //req.params acessar route params (para edicao, delete)
    return res.json({ id: req.params.id });
});

rotas.post('/users/', (req, res) => {
    return res.json(req.body);
});

rotas.delete(() => {

});

rotas.post('/sessions',SessionController.store);

module.exports=rotas;
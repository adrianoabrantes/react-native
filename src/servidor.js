const express = require('express');
const mongoose = require('mongoose');
const rotas = require('./rotas');

const aplicativo = express();

mongoose.connect('mongodb+srv://chinafox:chinafox@aplicativo-wiswx.mongodb.net/aplicativo?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
aplicativo.use(express.json());

aplicativo.use(rotas);

aplicativo.listen(8080);
const express = require('express')
const app = express()
const porta = 3000
const rotas = require('./src/rotas')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use('/', rotas);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})
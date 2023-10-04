const express = require('express');
const modulo = require('./modulos');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/numeros-megassena', (req, res) => {
    let filtro = req.query.filtro
    filtro ? filtro.toLowerCase() : null;

    !filtro ? res.send(modulo.sequencia()) : filtro === 'pares' ? res.send(modulo.sequenciaDeNumerosPares()) : filtro === 'impares' ? res.send(modulo.sequenciaDeNumerosImpares()) : res.send('Filtro inválido! Tente novamente.');
});


module.exports = router;

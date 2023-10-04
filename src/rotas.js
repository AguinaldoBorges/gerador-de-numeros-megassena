const express = require('express');
const modulo = require('./modulos');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/numeros-megassena', (req, res) => {
    res.send(modulo.sequencia());
});

module.exports = router;

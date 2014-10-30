var express = require('express');
var lifestyle = require('lifestyle');
var router = express.Router();

var client = null; // TODO: instansier en klient mot APIet

router.get('/oppg2/a', function(req, res) {
    res.render('oppg2-a', {
        count: 'X'
    });
});

router.get('/oppg2/b', function(req, res) {
    res.render('oppg2-b');
});

router.get('/oppg2/bonus/:finnkode', function(req, res) {
    res.render('oppg2-bonus');
});

module.exports = router;

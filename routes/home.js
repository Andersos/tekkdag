var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
        message: 'w000pw000p! Du har serveren oppe og stå! :)'
    });
});

module.exports = router;

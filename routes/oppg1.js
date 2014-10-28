var express = require('express');
var router = express.Router();

router.get('/oppg1', function(req, res) {
    res.render('oppg1');
});

module.exports = router;

var express = require('express');
var handlebars  = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./lib/routes');

// view engine setup
app.engine('.hbs', handlebars({
    defaultLayout: 'default',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
app.use(bodyParser.urlencoded({ extended: false }));

routes.mountAllRoutes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;

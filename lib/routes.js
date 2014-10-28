var fs = require('fs');
var path = require('path');

exports.mountAllRoutes = function(app) {
    fs.readdirSync(__dirname + '/../routes').forEach(function(file) {
        var routeFile = path.basename(file);
        app.use(require('../routes/' + routeFile));
    });
};
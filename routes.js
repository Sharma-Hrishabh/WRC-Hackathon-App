const routes = require('next-routes')();

routes
    .add('/','index')
    .add('/admin','adminPage')
    .add('/addhospitals','hospital')
    .add('/discharge','discharge');

module.exports = routes;

var mongoose = require('mongoose')
    , site = require('./../app/controller/site')

module.exports = function (app) {
    app.get('/', site.index)
    app.get('/:test', site.jsontest)
    app.get('/vitamin/:vitaminName', site.getVitamins)
    app.post('/vitaminAdd', site.addVitamin)
}

var express = require('express')
    , app = express()
    , fs = require('fs')
    , config = require('./config/config')['dev']


var models_path = config.root + '/app/model'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path + '/' + file)
})


require('./config/express')(app, config)
require('./config/routes')(app)
app.listen(config.port);
console.log('Nodejstr Demo at : ' + config.port)
var express = require('express')
    , app = express()
    , config = require('./config/config')['dev']
require('./config/express')(app,config)
require('./config/routes')(app)
app.listen(config.port);
console.log('Nodejstr Demo at : ' + config.port)
var express = require('express')
    , mongoStore = require('connect-mongo')(express)

module.exports = function (app, config) {

    app.set('showStackError', true)
    app.use(express.compress({
        filter: function (req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
        },
        level: 9
    }))
    app.use(express.static(config.root + '/public'))
    app.use(express.logger('dev'))
    app.set('views', config.root + '/app/view')
    app.set('view engine', 'jade', {layout :true})
    app.configure(function () {
        app.use(express.cookieParser())
        app.use(express.urlencoded())
        app.use(express.json())
        app.use(express.methodOverride())
        app.use(express.session({
            secret: 'nodejstrsession',
            store: new mongoStore({
                url: config.db,
                collection: 'sessions'
            })
        }))
        app.use(express.favicon())
        app.use(app.router)
        app.use(function (err, req, res, next) {
            console.error(err.stack);
            next(err);
        })
        app.use(function (err, req, res, next) {
            req.xhr ? res.send(500, { error: 'Something blew up!' }) : next(err);
        })
        app.use(function (err, req, res, next) {
            if (~err.message.indexOf('not found')) return next()
            console.error(err.stack)
            res.status(500).render('error/500', { error: err.stack })
        })
        app.use(function (req, res, next) {
            res.status(404).render('error/404', { url: req.originalUrl })
        })
    })
}
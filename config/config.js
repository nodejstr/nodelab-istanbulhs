module.exports = {
    'dev': {
        db: 'mongo://localhost/nodejstrdev',
        port: 1337,
        root: require('path').normalize(__dirname + '/..')
    },
    'prod': {
        db: 'mongo://localhost/nodejstr',
        port: 80,
        root: require('path').normalize(__dirname + '/..')
    }
}
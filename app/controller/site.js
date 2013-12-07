var mongoose = require('mongoose')
    , Vitamin = mongoose.model('Vitamin')

exports.index = function (req, res) {
    res.render('site/index', {youAreUsingJade: true, title: 'new title'})
}

exports.jsontest = function (req, res) {
    var test = req.params.test;
    res.json({result: 1, status: test});
}

exports.getVitamins = function (req, res) {
    var vitName = req.params.vitaminName;
    var vitamin = Vitamin.findOne();
    res.render('site/vitamin', {vitamin: vitamin})
}


exports.addVitamin = function (req, res) {
    var vitamin = new Vitamin(req.body);
    vitamin.save(function (err) {
        if (err)
            res.json({err: err})
        else
            res.json({success: true})
    });

}

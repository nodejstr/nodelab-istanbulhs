exports.index = function (req, res) {
    res.render('site/index',{youAreUsingJade : true})
}

exports.jsontest =function (req, res) {
    var test = req.params.test;
    res.json({result: 1, status: test});
}

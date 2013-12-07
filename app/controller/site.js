exports.index = function (req, res) {
    res.json({result: 1, status: 'Index'});
}

exports.jsontest =function (req, res) {
    var test = req.params.test;
    res.json({result: 1, status: test});
}

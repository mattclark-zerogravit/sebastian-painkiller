const Issue = require('../models/issue.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.issue_create = function (req, res) {
    let issue = new Issue(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    issue.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Issue Created successfully')
    })
};
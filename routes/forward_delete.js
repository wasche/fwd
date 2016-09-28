exports.path = '/_forward/:id/delete';
exports.requiresAuth = true;

exports.get = function(req, res) {
    var mongoose = require('mongoose'),
        Forward = mongoose.model('Forward');
    Forward.remove({
        _id: req.params.id
    }, function(err) {
        Forward
            .find({})
            .sort({
                name: 1
            })
            .exec(function(err, docs) {
                res.render('admin', {
                    title: null,
                    forwards: docs,
                    page: 'admin'
                });
            });
    });
};

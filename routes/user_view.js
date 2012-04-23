exports.path = '/_user/:id';

exports.get = function(req, res){
  var mongoose = require('mongoose')
    , User = mongoose.model('User')
    ;

  User.findById(req.params.id, function(err, user){
    if (err) { throw err; }
    res.render('users/view', {
      title: null
    , user: user
    });
  });
};
exports.path = '/_forward/:id';

exports.post = function(req, res){
  var mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    ;

  Forward.findById(req.params.id, function(err, fwd){
    if (err) { throw err; }
    fwd.name = req.body.name;
    fwd.target = req.body.url;
    fwd.save(function(err){
      if (err) { throw err; }
      res.redirect('/');
    });
  });
};
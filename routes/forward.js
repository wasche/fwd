exports.path = '/_forwards/:id';
exports.requiresAuth = true;

var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.get = function(req, res){
  Forward.findById(req.params.id, function(err, fwd){
    if (err) throw err;
    res.json(fwd);
  });
};

exports.put = function(req, res){
  Forward.findById(req.params.id, function(err, fwd){
    if (err) { throw err; }
    fwd.name = req.body.name;
    fwd.target = req.body.url;
    fwd.note = req.body.note;
    fwd.save(function(err){
      if (err) { throw err; }
      res.json(fwd);
    });
  });
};

exports.del = function(req, res){
  Forward.remove({_id: req.params.id}, function(err){
    if (err) throw err;
    res.sendStatus(200);
  });
};

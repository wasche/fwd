exports.path = '/_forwards';

var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.get = function(req, res){
  Forward
  .find({})
  .exec(function(err, docs){
    res.json(
      docs
    );
  });
};

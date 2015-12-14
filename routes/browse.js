var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.path = '/_browse';

exports.get = function(req, res){
  Forward
  .find({})
  .sort({name:1})
  .exec(function(err, docs){
    res.render('browse', {
      title: null
    , forwards: docs
    });
  });
};

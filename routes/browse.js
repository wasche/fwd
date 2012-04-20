var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.path = '/_browse';

exports.get = function(req, res){
  Forward
  .find({})
  .asc('name')
  .run(function(err, docs){
    res.render('browse', {
      title: null
    , forwards: docs
    });
  });
};

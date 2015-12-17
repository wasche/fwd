var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.path = '/_admin';

exports.get = function(req, res){
  Forward
  .find({})
  .sort({name:1})
  .exec(function(err, docs){
    res.render('admin', {
      title: null
    , forwards: docs
    , page: 'admin'
    });
  });
};

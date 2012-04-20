var mongoose = require('mongoose')
  , Forward = mongoose.model('Forward')
  ;

exports.path = '/_add';

exports.get = function(req, res){
  res.render('add', {
    title: null
  });
};

exports.post = function(req, res){
  Forward.create({
    name: req.body.name
  , target: req.body.url
  },
  function(err){
    if (err) {
      res.render('add', {
        title: null
      , error: err
      });
    } else {
      res.redirect('/');
    }
  });
};

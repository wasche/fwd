module.exports = function(req, res, next){
  if ('/' === req.url) { next(); return; }
  var mongoose = require('mongoose')
      Forward = mongoose.model('Forward')
    ;

  Forward.find({ name: req.url.slice(1) }, function(err, docs){
    if (err) { throw err; }
    if (docs && docs.length) {
      docs[0].touch(function(){
        res.redirect(docs[0].target);
      });
    } else {
      next();
    }
  });
}
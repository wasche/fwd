module.exports = function(req, res, next){
  if ('/' === req.url) { next(); return; }
  var mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    , name = req.url.slice(1).replace(/(\d+)/, '{NUM}')
    ;

  Forward.find({ name: name }, function(err, docs){
    if (err) { throw err; }
    if (docs && docs.length) {
      docs[0].touch(function(){
        res.redirect(RegExp.$1 ? docs[0].target.replace('{NUM}', RegExp.$1) : docs[0].target);
      });
    } else {
      next();
    }
  });
}
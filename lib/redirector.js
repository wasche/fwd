module.exports = function(req, res, next){
  if ('/' === req.url) { next(); return; }
  var mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    , name = req.url.slice(1)
        .replace(/%20/g, ' ')
    , placeholder
    , replacement
    ;

  if (/\/(.*)/.test(name)) {
    placeholder = '{QUERY}'
    name = RegExp.leftContext + '/' + placeholder + RegExp.rightContext;
    replacement = RegExp.$1;
  } else if (/(\d+)/.test(name)) {
    placeholder = '{NUM}'
    name = RegExp.leftContext + placeholder + RegExp.rightContext;
    replacement = RegExp.$1;
  }

  placeholder = placeholder && new RegExp(placeholder.replace(/[\{\}]/g, '\\$&'), 'g');

  name = new RegExp(name.replace(/[- ]/, '[- ]'), 'gi');

  Forward.find({ name: name }, function(err, docs){
    if (err) { throw err; }
    if (docs && docs.length) {
      docs[0].touch(function(){
        res.redirect(replacement ? docs[0].target.replace(placeholder, replacement) : docs[0].target);
      });
    } else {
      next();
    }
  });
}

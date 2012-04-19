exports.path = '/';

exports.get = function(req, res){
  var dns = require('dns')
    , mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    ;

  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      if (err) {
        console.err(err);
      } else {
        Forward.getLatest(function(err, latest){
          res.render('index', {
            title: null
          , host: domains
          , latest: latest
          });
        });
      }
  });
};
